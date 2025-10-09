import { useEffect } from "react";
import TaskService from "./services/TaskService";
import React from "react";
import MainLayout from "./layout/MainLayout";

function App() {
  useEffect(() => {
    TaskService.getAllTask().then((data) => {
      console.log("Respuesta del backend (getAllTask):", data);
    });
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

