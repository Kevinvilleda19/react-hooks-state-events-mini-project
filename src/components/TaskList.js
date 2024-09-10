import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  // Function to handle deleting a task
  function handleDeleteTask(deletedTaskText) {
    const updatedTasks = tasks.filter((task) => task.text !== deletedTaskText);
    setTasks(updatedTasks);
  }

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
