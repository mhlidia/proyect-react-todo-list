import { useEffect } from "react";
import TaskService from "./services/TaskService";
import React from "react";
import MainLayout from "./layout/MainLayout";

function App() {
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await TaskService.getAll();
        console.log("Respuesta del backend (getAll):", data);
      } catch (error) {
        console.error("Error obteniendo tareas:", error);
      }
    };
    fetchTasks();
  }, []);
  return (
    <MainLayout>
      <div className="text-center mt-4">
        <h1>Hola!! To-Do List</h1>
        <p>Probando conexion backend...</p>
      </div>
    </MainLayout>
  );
}

export default App;

