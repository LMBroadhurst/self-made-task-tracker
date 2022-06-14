import "./Main.css";
import { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks.js";

const Main = () => {

    const [tasks, setTasks] = useState([]);

    // Add Task

    const addTask = (task) => {
        const id = (Math.floor(Math.random() * 100000) + 1);
        const newTask = {id, ...task};

        setTasks( [...tasks, newTask] );
    }

    // Delete Task

    const deleteTask = (id) => {
        console.log('delete', id);
        setTasks(tasks.filter( (task) => task.id !== id ));
    }


    // Not Easier Stuff

    const [tasksToDo, setTasksToDo] = useState(0);
    const [tasksCompleted, setTasksCompleted] = useState(0);

    const increaseTasksToDo = () => {
        setTasksToDo(tasksToDo + 1);
        console.log(tasksToDo);
    }

    const decreaseTasksToDo = () => {
        setTasksToDo(tasksToDo - 1);
        console.log(tasksToDo);
    }

    const increaseTasksCompleted = () => {
        setTasksCompleted(tasksCompleted + 1);
        console.log(tasksCompleted);
    }

  return (
    <main id="main">

        <section className="toDoCompleted">
            <h3>No. of tasks to do: {tasksToDo}</h3>
            <h3>No. of tasks completed: {tasksCompleted}</h3>
        </section>

        {tasks.length > 0 ? <Tasks tasks={tasks} 
                                onDelete={deleteTask}
                                decreaseTasksToDo={decreaseTasksToDo}
                                increaseTasksCompleted={increaseTasksCompleted}
                            /> : 
        <section className="noTasks">
            <p>No tasks left 🥳🎉</p>
            <p>Use the form below to add tasks 💪</p>
        </section>}

        <section>
            {<AddTask onAdd={addTask} increaseTasksToDo={increaseTasksToDo} />}
        </section>

    </main>
  )
}

export default Main

