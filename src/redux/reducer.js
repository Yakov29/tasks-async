import { createSlice } from "@reduxjs/toolkit";
import { deleteTask, getTasks, postTask } from "./thunks/thunks";

const initialState = {
  tasks: [],
  isLoading: false,
  filter: "",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    filterTask: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tasks = payload;
      })
      .addCase(postTask.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.filter((task) => task.id !== payload);
      });
  },
});

export const { filterTask: filterTaskAction } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
