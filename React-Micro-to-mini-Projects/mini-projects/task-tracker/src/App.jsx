import { useState } from 'react'
import './App.css'
import TaskInput from './Components/TaskInput'

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInput = (e) => {
    setTask(e.target.value);
  }

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <TaskInput 
        onInputChange={handleInput} 
        onAddTask={handleAddTask}
        task={task}
      />
      <div className="task-list">
        {tasks.map((item, index) => (
          <div key={index} className="task-item">
            <p>{item}</p>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
