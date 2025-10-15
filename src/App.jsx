import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import TaskList from "./views/TaskList";

function App() {  
  return (
    <MainLayout>
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-center mt-4">
              <h1>Hola!! To-Do List</h1>
              <p>Bienvenido a tu app de tareas</p>
            </div>
          }
        />
        <Route path="/task" element={<TaskList />} />
      </Routes>
    </MainLayout>
  );
  
}

export default App;

