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

export default {
    getAll
};