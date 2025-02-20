import styled from "styled-components";
import Column from "./Column";

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Высота экрана */
  background-color: #f0f2f5;
`;

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 32px;
`;

const BoardTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Board: React.FC = () => {
  return (
    <BoardWrapper>
      <BoardTitle>Kanban Dashboard</BoardTitle>
      <BoardContainer>
        <Column title="To Do" color="#6a5acd" />
        <Column title="In Progress" color="#ffa500" />
        <Column title="Done" color="#2ecc71" />
      </BoardContainer>
    </BoardWrapper>
  );
};

export default Board;
