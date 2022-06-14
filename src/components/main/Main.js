import "./Main.css";
import { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks.js";

const Main = () => {

    const [tasks, setTasks] = useState([]);

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

    const [parentTasksToDo, setParentTasksToDo] = useState(0);
    const [parentTasksCompleted, setParentTasksCompleted] = useState(0);

  return (
    <main id="main">

        <section className="toDoCompleted">
            <h3>No. of tasks to do: {parentTasksToDo}</h3>
            <h3>No. of tasks completed: {parentTasksCompleted}</h3>
        </section>

        {tasks.length > 0 ? <Tasks tasks={tasks} 
                                onDelete={deleteTask}
                                setParentTasksToDo={setParentTasksToDo}
                                parentTasksToDo={parentTasksToDo}
                                setParentTasksCompleted={setParentTasksCompleted}
                                parentTasksCompleted={parentTasksCompleted}
                            /> : 
        <section className="noTasks">
            <p>No tasks left 🥳🎉</p>
            <p>Use the form below to add tasks 💪</p>
        </section>}

        <section>
            {<AddTask onAdd={addTask} setParentTasksToDo={setParentTasksToDo} />}
        </section>

    </main>
  )
}

export default Main

