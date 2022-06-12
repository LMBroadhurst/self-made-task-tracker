const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      if (!text) {
        alert('Please add a task')
        return
      }
  
      onAdd({ text, day, reminder })
  
      setText('')
      setDay('')
      setReminder(false)
    }