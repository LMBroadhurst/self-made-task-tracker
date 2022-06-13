import "./Main.css";
import { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks.js";

const Main = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Walk the dog",
            date: "Yesterday",
            priority: "High",
        },
        {
            id: 2,
            text: "Write JSX",
            date: "NOW!",
            priority: "High x2",
        }
    ]);



    // Add Task

    const addTask = (task) => {
        const id = (Math.floor(Math.random() * 10000) + 1);
        const newTask = {id, ...task};

        setTasks( [...tasks, newTask] );
    }



    // Delete Task

    const deleteTask = (id) => {
        console.log('delete', id);
        setTasks(tasks.filter( (task) => task.id !== id ));
    }



    // Easier Stuff

    const [tasksCompleted, setTasksCompleted] = useState(0);
    const [parentTasksToDo, setParentTasksToDo] = useState(0);
    
    const completedTaskUpdateCounter = () => {
        setTasksCompleted(tasksCompleted + 1);
    };

    const removedTaskUpdateCounter = () => {
        setTasksCompleted(tasksCompleted - 1);
    };

    
  return (
    <main>

        <section className="toDoCompleted">
            <h3>No. of tasks to do: {parentTasksToDo}</h3>
            <h3>No. of tasks completed: {tasksCompleted}</h3>
        </section>

        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : "No tasks left 🥳🎉"}

        <AddTask onAdd={addTask} setParentTasksToDo={setParentTasksToDo}  />

    </main>
  )
}

export default Main

