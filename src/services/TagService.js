import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";
const TOKEN = "3|dKdPZsPdUt6JrA1JFiwWf8lHIfzaZJLPvocWyATWf9bfa7e2";

const TagService = {
  getAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/tags`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener tags:", error);
      return [];
    }
  },

  getById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/tags/${id}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener tag:", error);
      return null;
    }
  },
};

export default TagService;
