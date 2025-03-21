import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksReducer";
import columnsReducer from "./reducers/columnsReducer";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    columns: columnsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
