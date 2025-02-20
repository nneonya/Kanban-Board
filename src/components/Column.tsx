import styled from "styled-components";
import Task from "./Task";

interface ColumnProps {
  title: string;
  color: string;
}

const ColumnContainer = styled.div`
  background: #f8f8f8;
  border-radius: 12px;
  padding: 16px;
  width: 300px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ColumnHeader = styled.div<{ color: string }>`
  display: flex;
  max-height: 46px;
  justify-content: space-between;
  align-items: center;
  border-radius: 46px;
  background-color: ${({ color }) => color};
  color: white;
  font-weight: normal;
  position: relative;
`;

const TaskCount = styled.div`
  width: 32px;
  height: 32px;
  background: white;
  color: #666;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 7px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
background: transparent;
border: none;
color: white;
font-size: 22px;
cursor: pointer;
`;

const Column: React.FC<ColumnProps> = ({ title, color }) => {
  return (
    <ColumnContainer>
      <ColumnHeader color={color}>
        <HeaderContent>
          <TaskCount>2</TaskCount>
          <span>{title}</span>
        </HeaderContent>
        <AddButton>+</AddButton>
      </ColumnHeader>
      <Task title="UI/UX Design in AI" description="Lorem ipsum dolor sit amet..." priority="Medium" />
      <Task title="Blog Copywriting" description="Lorem ipsum dolor sit amet..." priority="Low" />
    </ColumnContainer>
  );
};

export default Column;
