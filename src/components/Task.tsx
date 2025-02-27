import React, { useState } from "react";
import styled from "styled-components";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  priority?: "High" | "Medium" | "Low";
  onDelete: () => void;
  onEdit: (id: string, title: string, description: string, priority?: "High" | "Medium" | "Low") => void;
}

const TaskContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PriorityBadge = styled.span<{ priority?: string }>`
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
  color: ${({ priority }) =>
    priority === "High" ? "#ff4d4d" : priority === "Medium" ? "#4d79ff" : "#2ecc71"};
  background-color: ${({ priority }) =>
    priority === "High" ? "#ffcccc" : priority === "Medium" ? "#ccd9ff" : "#d4f8d4"};
  align-self: flex-start;
`;

const TaskTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
  text-align: left;
  display: inline-block;
  min-width: 0;
  outline: none;
  border: none;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
`;

const EditIcon = styled(FaEdit)`
  cursor: pointer;
  color: #4d79ff;
`;

const DeleteIcon = styled(FaTrashAlt)`
  cursor: pointer;
  color: #ff4d4d;
`;

const EditableText = styled.span`
  display: inline-block;
  min-width: 0;
  outline: none;
  border: none;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
`;

const Task: React.FC<TaskProps> = ({ id, title, description, priority, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
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
          <TaskTitle>
            <EditableText
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setNewTitle(e.target.textContent || title)}
            >
              {newTitle}
            </EditableText>
            <div>
              <EditIcon onClick={() => setIsEditing(true)} />
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
          <div>
            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value as "High" | "Medium" | "Low")}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button onClick={handleSaveEdit}>Save</button>
          </div>
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
