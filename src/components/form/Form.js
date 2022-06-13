import AddTask from "./AddTask/AddTask";
import { useState } from "react";

const Form = () => {

    const [parentTasksToDo, setParentTasksToDo] = useState(0);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Walk the dog",
            date: "Yesterday",
            priority: "High",
        },
        {
            id: 2,
            text: "Write JSX",
            date: "NOW!",
            priority: "High x2",
        }
    ]);

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

  return (
    <section>
            {<AddTask onAdd={addTask} setParentTasksToDo={setParentTasksToDo} />}
    </section>
  )
}

export default Form