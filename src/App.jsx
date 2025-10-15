import { useEffect } from "react";
import TaskService from "./services/TaskService";
import MainLayout from "./layout/MainLayout";
//import TaskList from "./views/TaskList";

function App() {
  useEffect(() => {
    TaskService.getAll().then((data) => {
      console.log("Respuesta del backend (getAll):", data);
    });
  }, []);
  return (
    <MainLayout>
      <div className="text-center mt-4">
        <h1>Hola!! To-Do List</h1>
        <p>Probando conexion backend...</p>
        <p>Abre la consola para ver los datos</p>
      </div>
    </MainLayout>
  );
}

export default App;
