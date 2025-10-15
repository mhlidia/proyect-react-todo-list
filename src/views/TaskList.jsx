import React, { useEffect, useState } from "react";
import TaskService from "../services/TaskService";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    TaskService.getAll()
      .then((data) => {
        console.log("Tareas obtenidas:", data);
        setTasks(data || []); // Por si data es null
      })
      .catch((error) => {
        console.error("Error al obtener tareas:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2>Lista de tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas registradas.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> - {task.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
