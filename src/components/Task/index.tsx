import { useState, useRef, useEffect } from "react";
import { Draggable } from "@hello-pangea/dnd";
import {
  TaskContainer,
  PriorityBadge,
  TaskTitle,
  TaskDescription,
  EditIcon,
  DeleteIcon,
  EditableText,
  SaveButton,
} from "./styled";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  priority?: "High" | "Medium" | "Low";
  isNew?: boolean;
  columnId: string;
  index: number;
  onDelete: () => void;
  onEdit: (id: string, title: string, description: string, priority?: "High" | "Medium" | "Low") => void;
}

const Task: React.FC<TaskProps> = ({ id, title, description, priority, isNew, columnId, index, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(!!isNew);
  const [newTitle, setNewTitle] = useState(isNew ? "New Task" : title); 
  const [newDescription, setNewDescription] = useState(isNew ? "Task description" : description); 
  const [newPriority, setNewPriority] = useState(priority);

  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isNew && isEditing) {
      const handleTitleFocus = () => {
        if (titleRef.current && titleRef.current.textContent === "New Task") {
          titleRef.current.textContent = "";
        }
      };

      const handleDescriptionFocus = () => {
        if (descriptionRef.current && descriptionRef.current.textContent === "Task description") {
          descriptionRef.current.textContent = "";
        }
      };

      if (titleRef.current) {
        titleRef.current.addEventListener("focus", handleTitleFocus);
      }
      if (descriptionRef.current) {
        descriptionRef.current.addEventListener("focus", handleDescriptionFocus);
      }

      return () => {
        if (titleRef.current) {
          titleRef.current.removeEventListener("focus", handleTitleFocus);
        }
        if (descriptionRef.current) {
          descriptionRef.current.removeEventListener("focus", handleDescriptionFocus);
        }
      };
    }
  }, [isNew, isEditing]);

  const handleTitleChange = (e: React.FocusEvent<HTMLDivElement>) => {
    setNewTitle(e.target.textContent || "");
  };

  const handleDescriptionChange = (e: React.FocusEvent<HTMLDivElement>) => {
    setNewDescription(e.target.textContent || "");
  };

  const handleSaveEdit = () => {
    onEdit(id, newTitle, newDescription, newPriority);
    setIsEditing(false);
  };

  const priorityOptions = ["High", "Medium", "Low"];

  if (isEditing) {
    return (
      <TaskContainer>
        <div>
          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value as "High" | "Medium" | "Low")}
          >
            {priorityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <TaskTitle>
          <EditableText
            ref={titleRef}
            contentEditable
            suppressContentEditableWarning
            onBlur={handleTitleChange}
          >
            {newTitle}
          </EditableText>
          <div>
            <DeleteIcon onClick={onDelete} />
          </div>
        </TaskTitle>
        <TaskDescription
          ref={descriptionRef}
          contentEditable
          suppressContentEditableWarning
          onBlur={handleDescriptionChange}
        >
          {newDescription}
        </TaskDescription>
        <SaveButton onClick={handleSaveEdit}>Save</SaveButton>
      </TaskContainer>
    );
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <TaskContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {priority && <PriorityBadge priority={priority}>{priority}</PriorityBadge>}
          <TaskTitle>
            <span>{title}</span>
            <div>
              <EditIcon onClick={() => setIsEditing(true)} />
              <DeleteIcon onClick={onDelete} />
            </div>
          </TaskTitle>
          <TaskDescription>{description}</TaskDescription>
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default Task;