import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasksAPI } from "../../api/getTasksAPI";
import { postTaskAPI } from "../../api/postTaskAPI";
import { deleteTaskAPI } from "../../api/deleteTaskAPI";

export const getTasks = createAsyncThunk("tasks/getTasks", () => getTasksAPI());

export const postTask = createAsyncThunk("tasks/postTask", (task) =>
  postTaskAPI(task)
);

export const deleteTask = createAsyncThunk("task/deleteTask", (id) =>
  deleteTaskAPI(id)
);
