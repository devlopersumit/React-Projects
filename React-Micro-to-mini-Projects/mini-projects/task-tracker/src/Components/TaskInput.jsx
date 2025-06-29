import React from 'react'
import '../CSS/TaskInput.css'

function TaskInput({ onInputChange, onAddTask, task }) {
  return (
    <div className="main">
      <input 
        type="text" 
        placeholder='Enter Task' 
        className='input-box'
        value={task}
        onChange={onInputChange}
      />
      <button onClick={onAddTask}>Add Task</button>
    </div>
  )
}

export default TaskInput