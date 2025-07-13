import { useState } from "react";

function TaskManager() {

const[tasks, setTasks] = useState([]);
const[newTask, setNewTask] = useState('');

const handleAddTask = (e)=> {
 e.preventDefault();

 if(newTask.trim() === "") return;

 const task = {
    id: Date.now(),
    title: newTask.trim(),
    completed: false
 };

 setTasks(prev => [...prev, task]);
 setNewTask("");

 
}

 const toggleComplete = (id)=> {
    const updatedTask = tasks.map(task => 
        task.id === id ? {...task, completed:!task.completed} : task
    );
    setTasks(updatedTask);
 };

 const deleteTask = (id)=> {
    const filteredTask = tasks.filter(task => task.id !== id);
    setTasks(filteredTask); 
 };


    return (
        <>
        <div className="w-full h-screen bg-slate-800 flex justify-center items-center flex-col">
            <h1 className="text-white text-3xl font-bold mb-6">Personal Task Manager</h1>
            <div className="w-auto h-28 bg-white border-none rounded-xl px-6 py-4">
            <form onSubmit={handleAddTask}>

                <input type="text"
                placeholder="Enter the task..."
                value={newTask}
                onChange={(e)=> setNewTask(e.target.value)}
                className="basis-1 h-auto p-1 rounded-xl outline-none border-solid border-[1px] border-gray-900 pl-4 text-xl"  />

                <button className="w-auto h-auto py-2 px-5 ml-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 duration-75 active:bg-purple-900" 
                type="submit">Add Task</button>
            </form>

            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id}>
                            <input type="checkbox"
                            checked = {task.completed}
                            onChange={()=> toggleComplete(task.id)} />
                            <span style={{textDecoration: task.completed ? "line-through" : "none"}}>{task.title}</span>

                            <button className="text-red-500"
                            onClick={()=> deleteTask(task.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
            </div>

        </div>
        </>
    );
}

export default TaskManager;