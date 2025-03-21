import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { COLUMNS } from "@/constants";

interface Column {
  id: string;
  title: string;
  color: string;
}

interface ColumnState {
  columns: Column[];
}

const loadColumnsFromLocalStorage = (): ColumnState => {
  const savedColumns = localStorage.getItem("columns");
  return savedColumns ? JSON.parse(savedColumns) : { columns: COLUMNS };
};

const saveColumnsToLocalStorage = (state: ColumnState) => {
  localStorage.setItem("columns", JSON.stringify(state));
};

const initialState: ColumnState = loadColumnsFromLocalStorage();

const columnsSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    addColumn: (state) => {
      state.columns.push({
        id: Date.now().toString(),
        title: "New Column",
        color: "#ff0000",
      });
      saveColumnsToLocalStorage(state);
    },
    deleteColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload);
      saveColumnsToLocalStorage(state); 
    },
    editColumn: (
      state,
      action: PayloadAction<{ columnId: string; newTitle: string; newColor: string }>
    ) => {
      const column = state.columns.find((col) => col.id === action.payload.columnId);
      if (column) {
        column.title = action.payload.newTitle;
        column.color = action.payload.newColor;
        saveColumnsToLocalStorage(state); 
      }
    },
  },
});

export const { addColumn, deleteColumn, editColumn } = columnsSlice.actions;
export default columnsSlice.reducer;
