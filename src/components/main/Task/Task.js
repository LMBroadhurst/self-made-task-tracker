import { useState } from "react";
import "../Main.js";

const Task = ({ task, onDelete, setParentTasksToDo, setParentTasksCompleted }) => {

    const [tasksToDo, setTasksToDo] = useState(0);
    const [tasksCompleted, setTasksCompleted] = useState(0);

    const taskCompletedClick = () => {

        onDelete(task.id)

        setTasksCompleted(tasksCompleted + 1);
        setParentTasksCompleted(tasksCompleted);
        console.log(tasksCompleted);


    }

    const clickXonTask = () => {

        onDelete(task.id)

        setTasksToDo(tasksToDo - 1);
        setParentTasksToDo(tasksToDo);
        console.log(tasksToDo);

    };


    return (
        <section className="task">
            <div className="taskDescription">
                <h3>{task.text}</h3>
                <p>Date added: {task.date}</p>
                <p>Priority: {task.priority}</p>
            </div>
            <div>
                <button onClick={ taskCompletedClick }>✅</button>
                <button onClick={ clickXonTask }
                >❌</button>
            </div>
        </section>
    )
  }
  
  export default Task;