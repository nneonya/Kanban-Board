import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addColumn, deleteColumn, editColumn } from "@/store/reducers/columnsReducer";
import { moveTask } from "@/store/reducers/tasksReducer"; 
import Column from "@components/Column";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd"; 
import {
  BoardWrapper,
  BoardContainer,
  BoardTitle,
  AddButtonWrapper,
  AddButton,
} from "./styled";

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.columns.columns);

  const onDragEnd = (result: DropResult) => { 
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    dispatch(moveTask({
      sourceColumnId: source.droppableId,
      destinationColumnId: destination.droppableId,
      sourceIndex: source.index,
      destinationIndex: destination.index,
      taskId: draggableId,
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardWrapper>
          <BoardTitle>
            Kanban Dashboard
            <AddButtonWrapper>
              <AddButton onClick={() => dispatch(addColumn())}>+</AddButton>
            </AddButtonWrapper>
          </BoardTitle>

          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided) => (
              <BoardContainer {...provided.droppableProps} ref={provided.innerRef}>
                {columns.map((column, index) => (
                  <Column
                    key={column.id}
                    title={column.title}
                    color={column.color}
                    columnId={column.id}
                    index={index}
                    onDelete={() => dispatch(deleteColumn(column.id))}
                    onEdit={(columnId, newTitle, newColor) =>
                      dispatch(editColumn({ columnId, newTitle, newColor }))
                    }
                  />
                ))}
                {provided.placeholder}
              </BoardContainer>
            )}
          </Droppable>
        </BoardWrapper>
      </DragDropContext>
    </ThemeProvider>
  );
};

export default Board;
