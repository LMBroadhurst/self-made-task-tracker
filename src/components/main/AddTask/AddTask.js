import { useState } from "react";
import "./AddTask.css";

const AddTask = ({ createTask }) => {

    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault()
    
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

        console.log(createTask(text, date, priority));
    
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

      <input type='submit' value='✅' className='btn' />
    </form>
  )

}

export default AddTask