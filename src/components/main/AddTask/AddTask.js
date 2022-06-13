import { useState } from "react";
import "./AddTask.css";
import "../Main.js";


const AddTask = ( {onAdd, setParentTasksToDo} ) => {

  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [tasksToDo, setTasksToDo] = useState(0);

  const taskToDoUpdateCounter = () => {

    if (text && date && priority) {
      setTasksToDo(tasksToDo + 1);
      setParentTasksToDo(tasksToDo);
      console.log(tasksToDo);
    }
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
          type='date'
          placeholder='Add date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label htmlFor="priorities">Priority</label>

        {/* Code below is if box is preferred */}

        {/* <input type="select"
          placeholder="Priority"
          value={priority}
          onChange={(e) => setPriority(e.currentTarget.value)}
        /> */}

        <select id="priorities"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.currentTarget.value)}
        >
          <option id="placeholderOption" value="" disabled hidden>Specify priority strength</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
          

      </div>

      <input type='submit' value='✅' className='btn'
      onClick={ taskToDoUpdateCounter }/>
    </form>
  )

}

export default AddTask