import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";
const TOKEN = "3|dKdPZsPdUt6JrA1JFiwWf8lHIfzaZJLPvocWyATWf9bfa7e2";

const CategoryService = {
  getAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener categorías:", error);
      return [];
    }
  },

  getById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/categories/${id}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener categoría:", error);
      return null;
    }
  },
};

export default CategoryService;
