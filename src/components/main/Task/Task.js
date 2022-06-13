const Task = ({ task }) => {
    return (
        <section className="task">
            <div>
                <h3>{task.text}</h3>
                <p>Date added: {task.date}</p>
                <p>Priority: {task.priority}</p>
            </div>
            <div>
                <button>✅</button>
                <button>❌</button>
            </div>
        </section>
    )
  }
  
  export default Task;