import styled from "styled-components";

interface TaskProps {
  title: string;
  description: string;
  priority?: "High" | "Medium" | "Low";
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
`;

const TaskDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;

const Task: React.FC<TaskProps> = ({ title, description, priority }) => {
  return (
    <TaskContainer>
      {priority && <PriorityBadge priority={priority}>{priority}</PriorityBadge>}
      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
    </TaskContainer>
  );
};

export default Task;
