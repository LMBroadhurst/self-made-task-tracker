import Task from "../Task/Task.js";

const Tasks = ( { tasks, onDelete, props }) => {

  
  return (
    <>
        {tasks.map( (task) => (
            <Task key={task.id} task={task} 
            onDelete={onDelete}
            setParentTasksToDo={props.setParentTasksToDo}
            parentTasksToDo={props.parentTasksToDo}
            setParentTasksCompleted={props.setParentTasksCompleted}
            parentTasksCompleted={props.parentTasksCompleted}
            />
        ))}
    </>
  )
}

export default Tasks