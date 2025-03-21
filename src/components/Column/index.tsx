import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addTask, deleteTask, editTask } from "@/store/reducers/tasksReducer";
import Task from "@components/Task";
import { Droppable } from "@hello-pangea/dnd";
import {
  ColumnContainer,
  ColumnHeader,
  TaskCount,
  AddButton,
  AddTaskButton,
  DeleteButton,
  EditInput,
  ColorInput,
  SaveButton,
  EditButton,
} from "./styled";

interface ColumnProps {
  title: string;
  color: string;
  columnId: string;
  index: number;
  onDelete: () => void;
  onEdit: (columnId: string, newTitle: string, newColor: string) => void;
}

const Column: React.FC<ColumnProps> = ({ title, color, columnId, index, onDelete, onEdit }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks[columnId] || []);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newColor, setNewColor] = useState(color);

  const handleAddTask = () => {
    dispatch(
      addTask({
        columnId,
        task: {
          id: Date.now().toString(),
          title: "New Task",
          description: "Task description",
          priority: "Medium",
          isNew: true,
        },
      })
    );
  };

  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask({ columnId, taskId }));
  };

  const handleEditTask = (taskId: string, title: string, description: string, priority?: "High" | "Medium" | "Low") => {
    dispatch(editTask({ columnId, taskId, title, description, priority }));
  };

  const handleSaveEdit = () => {
    onEdit(columnId, newTitle, newColor);
    setIsEditing(false);
  };

  return (
    <ColumnContainer>
      <ColumnHeader color={newColor}>
        {isEditing ? (
          <>
            <EditInput value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <ColorInput type="color" value={newColor} onChange={(e) => setNewColor(e.target.value)} />
            <SaveButton onClick={handleSaveEdit}>Save</SaveButton>
          </>
        ) : (
          <>
            <TaskCount>{tasks.length}</TaskCount>
            <span>{title}</span>
            <EditButton onClick={() => setIsEditing(true)}>✎</EditButton>
            <DeleteButton onClick={onDelete}>×</DeleteButton>
            <AddButton onClick={handleAddTask}>+</AddButton>
          </>
        )}
      </ColumnHeader>

      <Droppable droppableId={columnId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                priority={task.priority}
                isNew={task.isNew}
                columnId={columnId}
                index={index}
                onDelete={() => handleDeleteTask(task.id)}
                onEdit={handleEditTask}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <AddTaskButton color={newColor} onClick={handleAddTask}>
        <span>Add task...</span>
      </AddTaskButton>
    </ColumnContainer>
  );
};

export default Column;
