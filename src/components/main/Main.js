import "./Main.css";
import { useState } from "react";
import AddTask from "./AddTask/AddTask";
// import Tasks from "./Tasks/Tasks.js";

const Main = () => {

    const [tasksCompleted, setTasksCompleted] = useState(0);
    const [parentTasksToDo, setParentTasksToDo] = useState(0);
    
    const completedTaskUpdateCounter = () => {
        setTasksCompleted(tasksCompleted + 1);
    };

    
  return (
    <main>

        <section className="toDoCompleted">
            <h3>No. of tasks to do: {parentTasksToDo}</h3>
            <h3>No. of tasks completed: {tasksCompleted}</h3>
        </section>

        <section>
            <section className="dummyTask task1">
                <div>
                    <p>Enter task description here</p>
                    <p>Date added: xx/yy/zz</p>
                    <p>Priority: High</p>
                </div>
                <div>
                    <button onClick={ completedTaskUpdateCounter }>✅</button>
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

        <AddTask setParentTasksToDo={setParentTasksToDo}  />

    </main>
  )
}

export default Main

