import React, { useState } from "react";
import {
  TaskContainer,
  PriorityBadge,
  TaskTitle,
  TaskDescription,
  EditIcon,
  DeleteIcon,
  EditableText,
  SaveButton,
} from "./styled"; // Импортируем стили

interface TaskProps {
  id: string;
  title: string;
  description: string;
  priority?: "High" | "Medium" | "Low";
  isNew?: boolean; // Добавили флаг для новых задач
  onDelete: () => void;
  onEdit: (id: string, title: string, description: string, priority?: "High" | "Medium" | "Low") => void;
}

const Task: React.FC<TaskProps> = ({ id, title, description, priority, isNew, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(!!isNew); // Только новая задача будет открыта для редактирования
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newPriority, setNewPriority] = useState(priority);

  const handleSaveEdit = () => {
    onEdit(id, newTitle, newDescription, newPriority);
    setIsEditing(false);
  };

  return (
    <TaskContainer>
      {isEditing ? (
        <>
        <div>
            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value as "High" | "Medium" | "Low")}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <TaskTitle>
            
            <EditableText
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setNewTitle(e.target.textContent || title)}
            >
              {newTitle}
            </EditableText>
            <div>
              <DeleteIcon onClick={onDelete} />
            </div>
          </TaskTitle>
          <TaskDescription
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setNewDescription(e.target.textContent || description)}
          >
            {newDescription}
          </TaskDescription>
          
          <SaveButton onClick={handleSaveEdit}>Save</SaveButton>
        </>
      ) : (
        <>
          {priority && <PriorityBadge priority={priority}>{priority}</PriorityBadge>}
          <TaskTitle>
            <span>{title}</span>
            <div>
              <EditIcon onClick={() => setIsEditing(true)} />
              <DeleteIcon onClick={onDelete} />
            </div>
          </TaskTitle>
          <TaskDescription>{description}</TaskDescription>
        </>
      )}
    </TaskContainer>
  );
};

export default Task;
