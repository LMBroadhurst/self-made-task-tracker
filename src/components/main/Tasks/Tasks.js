import Task from "../Task/Task.js";

const Tasks = ( { tasks, onDelete, increaseTasksToDo, decreaseTasksToDo, increaseTasksCompleted }) => {

  
  return (
    <>
        {tasks.map( (task) => (
            <Task key={task.id} task={task}
            class={task.id}
            onDelete={onDelete}
            increaseTasksToDo={increaseTasksToDo}
            decreaseTasksToDo={decreaseTasksToDo}
            increaseTasksCompleted={increaseTasksCompleted}
            />
        ))}
    </>
  )
}

export default Tasks