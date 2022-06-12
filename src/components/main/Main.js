import "./Main.css";

const Main = () => {
  return (
    <main>
        <section className="toDoCompleted">
            <h3>No. of tasks to do: 0</h3>
            <h3>No. of tasks completed: 0</h3>
        </section>

        <section className="dummyTask task1">
            <p>Enter task description here</p>
            <p>Date added: xx/yy/zz</p>
            <p>Priority: High</p>
        </section>

        <section className="dummyTask task2">
            <p>Enter task description here</p>
            <p>Date added: xx/yy/zz</p>
            <p>Priority: High</p>
        </section>

        <section className="dummyTask task3">
            <p>Enter task description here</p>
            <p>Date added: xx/yy/zz</p>
            <p>Priority: High</p>
        </section>
    </main>
  )
}

export default Main