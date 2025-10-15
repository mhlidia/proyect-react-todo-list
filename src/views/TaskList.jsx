import React, { useEffect, useState } from "react";
import TaskService from "../services/TaskService";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    TaskService.getAll()
      .then((data) => {
        console.log("Tareas obtenidas:", data);
        if (Array.isArray(data)) {
          setTasks(data);
        } else if (data && Array.isArray(data.data)) {
          setTasks(data.data);
        } else {
          console.error("Formato inesperado:", data);
        }
      })
      .catch((error) => console.error("Error al obtener tareas:", error));
  }, []);

  return (
    <div className="container-fluid">
      <h2>Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas disponibles.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item">
              <strong>{task.title}</strong> <br />
              {task.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
