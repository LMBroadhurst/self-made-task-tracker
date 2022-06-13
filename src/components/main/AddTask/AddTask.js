import { useState } from "react";
import "./AddTask.css";
import "../Main.js";
// import Main from "../Main.js";


const AddTask = ( {onAdd, setParentTasksToDo} ) => {

  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [tasksToDo, setTasksToDo] = useState(0);

  const taskToDoUpdateCounter = () => {
    setTasksToDo(tasksToDo + 1);
    setParentTasksToDo(tasksToDo);
    console.log(tasksToDo);
};

    
  const onSubmit = (e) => {
      e.preventDefault();
  
      if (!text) {
          alert('Please add a task')
          return
      }

      if (!date) {
          alert('Please add the day')
          return
      }

      if (!priority) {
          alert('Please add the task priority')
          return
      }

      onAdd({text, date, priority});
  

      // Clears the form
      
      setText('')
      setDate('')
      setPriority('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>

      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Date</label>
        <input
          type='text'
          placeholder='Add date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Priority</label>
        <input
          type='text'
          placeholder="Priority"
          value={priority}
          onChange={(e) => setPriority(e.currentTarget.value)}
        />
      </div>

      <input type='submit' value='✅' className='btn'
      onClick={ taskToDoUpdateCounter }/>
    </form>
  )

}

export default AddTask