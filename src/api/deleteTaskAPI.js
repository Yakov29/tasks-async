const API_URL = "https://69046ae86b8dabde49639b3a.mockapi.io/tasks";

export const deleteTaskAPI = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });



    return id;
  } catch (error) {
    console.error(error);
    return null;
  }
};
