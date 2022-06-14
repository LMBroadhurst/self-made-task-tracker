import "../Main.js";

const Task = ({ task, onDelete, props }) => {

    const taskCompletedClick = () => {

        onDelete(task.id)
        props.setParentTasksCompleted(props.parentTasksCompleted + 1)
        console.log(props.parentTasksCompleted)

    }

    const clickXonTask = () => {

        onDelete(task.id)
        props.setParentTasksToDo(props.parentTasksToDo - 1)

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