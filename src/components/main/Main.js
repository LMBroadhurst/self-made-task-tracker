import "./Main.css";
import Tasks from "./Tasks/Tasks.js";

const Main = () => {

    let taskNumberStart = 0;

  return (
    <main>

        <section className="toDoCompleted">
            <h3>No. of tasks to do: {taskNumberStart}</h3>
            <h3>No. of tasks completed: {taskNumberStart}</h3>
        </section>

        <section>
            <section className="dummyTask task1">
                <div>
                    <p>Enter task description here</p>
                    <p>Date added: xx/yy/zz</p>
                    <p>Priority: High</p>
                </div>
                <div>
                    <button>✅</button>
                    <button>❌</button>
                </div>
            </section>

            <section className="dummyTask task2">
                <div>
                    <p>Enter task description here</p>
                    <p>Date added: xx/yy/zz</p>
                    <p>Priority: High</p>
                </div>
                <div>
                    <button>✅</button>
                    <button>❌</button>
                </div>
            </section>

            <section className="dummyTask task3">
                <div>
                    <p>Enter task description here</p>
                    <p>Date added: xx/yy/zz</p>
                    <p>Priority: High</p>
                </div>
                <div>
                    <button>✅</button>
                    <button>❌</button>
                </div>
            </section>
        </section>

    </main>
  )
}

export default Main

