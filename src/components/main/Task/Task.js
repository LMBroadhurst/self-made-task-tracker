import "../Main.js"

const Task = ({ task, onDelete }) => {

    const taskCompletedClick = () => {

        onDelete(task.id)

    }

    const clickXonTask = () => {

        onDelete(task.id)

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