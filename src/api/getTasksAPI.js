const API_URL = "https://69046ae86b8dabde49639b3a.mockapi.io/tasks";

export const getTasksAPI = async () => {
  try {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    console.log(tasks)
    return tasks;
  } catch (error) {
    console.error(error);
    return [];
  }
};
