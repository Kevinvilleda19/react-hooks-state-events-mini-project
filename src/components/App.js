import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  // state to manage the tasks
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to add a new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]); // add the new task to the existing task array
  }

  // Filter tasks based on the selected category
  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* Pass categories and callback to change the selected category */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {/* Pass the list of categories and callback to add a new task */}
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      {/* Pass the filtered tasks to the TaskList */}
      <TaskList tasks={tasksToDisplay} setTasks={setTasks} />
    </div>
  );
}

export default App;
