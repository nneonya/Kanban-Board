import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  description: string;
  priority?: "High" | "Medium" | "Low";
  isNew?: boolean;
}

interface TasksState {
  [columnId: string]: Task[];
}

// Загрузка состояния из localStorage
const loadTasksFromLocalStorage = (): TasksState => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : {};
};

// Сохранение состояния в localStorage
const saveTasksToLocalStorage = (state: TasksState) => {
  localStorage.setItem("tasks", JSON.stringify(state));
};

const initialState: TasksState = loadTasksFromLocalStorage();

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ columnId: string; task: Task }>) => {
      if (!state[action.payload.columnId]) {
        state[action.payload.columnId] = [];
      }
      state[action.payload.columnId].push(action.payload.task);
      saveTasksToLocalStorage(state); // Сохраняем в localStorage
    },
    deleteTask: (state, action: PayloadAction<{ columnId: string; taskId: string }>) => {
      if (state[action.payload.columnId]) {
        state[action.payload.columnId] = state[action.payload.columnId].filter(
          (task) => task.id !== action.payload.taskId
        );
        saveTasksToLocalStorage(state); // Сохраняем в localStorage
      }
    },
    editTask: (
      state,
      action: PayloadAction<{
        columnId: string;
        taskId: string;
        title: string;
        description: string;
        priority?: "High" | "Medium" | "Low";
      }>
    ) => {
      const tasks = state[action.payload.columnId];
      if (tasks) {
        const task = tasks.find((t) => t.id === action.payload.taskId);
        if (task) {
          task.title = action.payload.title;
          task.description = action.payload.description;
          task.priority = action.payload.priority;
          task.isNew = false; // Сбрасываем флаг isNew после редактирования
          saveTasksToLocalStorage(state); // Сохраняем в localStorage
        }
      }
    },
    moveTask: (
      state,
      action: PayloadAction<{
        sourceColumnId: string;
        destinationColumnId: string;
        sourceIndex: number;
        destinationIndex: number;
        taskId: string;
      }>
    ) => {
      const { sourceColumnId, destinationColumnId, sourceIndex, destinationIndex, taskId } = action.payload;

      const sourceTasks = state[sourceColumnId];
      const task = sourceTasks[sourceIndex];

      sourceTasks.splice(sourceIndex, 1);

      if (!state[destinationColumnId]) {
        state[destinationColumnId] = [];
      }

      state[destinationColumnId].splice(destinationIndex, 0, task);
      saveTasksToLocalStorage(state); // Сохраняем в localStorage
    },
  },
});

export const { addTask, deleteTask, editTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;