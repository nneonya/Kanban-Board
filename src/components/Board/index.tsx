import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Column from "../Column";
import theme from "../../styles/theme";
import { COLUMNS } from "../../constants";
import {
  BoardWrapper,
  BoardContainer,
  BoardTitle,
  AddButtonWrapper,
  AddButton,
} from "./styled";

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

  const handleDeleteColumn = (columnId: string) => {
    setColumns(columns.filter((column) => column.id !== columnId));
  };

  const handleEditColumn = (columnId: string, newTitle: string, newColor: string) => {
    setColumns(
      columns.map((column) =>
        column.id === columnId ? { ...column, title: newTitle, color: newColor } : column
      )
    );
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
            <Column
              key={column.id}
              title={column.title}
              color={column.color}
              columnId={column.id}
              onDelete={() => handleDeleteColumn(column.id)}
              onEdit={handleEditColumn}
            />
          ))}
        </BoardContainer>
      </BoardWrapper>
    </ThemeProvider>
  );
};

export default Board;
