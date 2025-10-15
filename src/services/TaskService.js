const API_URL = "http://127.0.0.1:8000/api";
const TOKEN = "3|dKdPZsPdUt6JrA1JFiwWf8lHIfzaZJLPvocWyATWf9bfa7e2";

export const getAll = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getAll():", error);
  }
};

export const getById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getById():", error);
  }
};

export const create = async (taskData) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(taskData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en create():", error);
  }
};

export const update = async (id, taskData) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(taskData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en update():", error);
  }
};

export const remove = async (id) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en remove():", error);
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
