import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Column from "../Column";
import theme from "../../styles/theme";
import { COLUMNS } from "../../constants";
import { BoardWrapper, BoardContainer, BoardTitle, AddButtonWrapper, AddButton } from "./styled";

interface ColumnData {
  id: string;
  title: string;
  color: string;
}

const Board: React.FC = () => {
  const [columns, setColumns] = useState<ColumnData[]>(COLUMNS);

  const handleAddColumn = () => {
    const newColumn = {
      id: Date.now().toString(),
      title: "New Column", 
      color: "red", 
    };
    setColumns([...columns, newColumn]);
  };

  return (
    <ThemeProvider theme={theme}>
      <BoardWrapper>
        <BoardTitle>
          Kanban Dashboard
          <AddButtonWrapper>
            <AddButton onClick={handleAddColumn}>+</AddButton>
          </AddButtonWrapper>
        </BoardTitle>

        <BoardContainer>
          {columns.map((column) => (
            <Column key={column.id} title={column.title} color={column.color} columnId={column.id} />
          ))}
        </BoardContainer>
      </BoardWrapper>
    </ThemeProvider>
  );
};

export default Board;
