import Main from "../Main.js";

const Task = (task) => {

    const taskCompleteCountIncrease = () => {
        Main.taskCompleteCountIncrease();
    }

  return (
    <section className="dummyTask">
        <div>
            <p>Dummy{task.description}</p>
            <p>Date added: {task.dateAdded}</p>
            <p>Priority: {task.priority}</p>
        </div>
        <div>
            <button  onClick={ () => {
                taskCompleteCountIncrease();
            } }>✅</button>
            <button>❌</button>
        </div>
    </section>
  )
}

export default Task