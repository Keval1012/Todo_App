import { createSlice } from "@reduxjs/toolkit";
import { initialTodos } from "../../json/todosData";

const initialState = {
  todoData: initialTodos,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoData: (state, action) => {
      state.todoData = action.payload;
    }
  },
});

export const { setTodoData } = todoSlice.actions;

export default todoSlice.reducer;
