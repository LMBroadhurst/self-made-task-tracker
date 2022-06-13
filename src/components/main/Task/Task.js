const Task = ({ task, onDelete }) => {

    const increaseTasksCompleted = () => {

    }

    return (
        <section className="task">
            <div className="taskDescription">
                <h3>{task.text}</h3>
                <p>Date added: {task.date}</p>
                <p>Priority: {task.priority}</p>
            </div>
            <div>
                <button onClick={ increaseTasksCompleted}>✅</button>
                <button onClick={ () =>  onDelete(task.id)}>❌</button>
            </div>
        </section>
    )
  }
  
  export default Task;