const API_URL = "https://69046ae86b8dabde49639b3a.mockapi.io/tasks";

export const postTaskAPI = async (task) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });


    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
