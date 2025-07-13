import { useEffect, useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");


  useEffect(() => {
    console.log("Saving to localStorage:", tasks);
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);
  
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks) {
        setTasks(JSON.parse(savedTasks));
    }
  },[]);


  //Add Task
  const handleAddTask = (e) => {
    e.preventDefault();

    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    };

    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };

  //Mark Completed
  const toggleComplete = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTask);
  };

  //Delete Task
  const deleteTask = (id) => {
    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
  };

  //Filter Task
  const filteredTasks = tasks.filter(task => {
    if(filter === "active") return !task.completed;
    if(filter === "completed") return task.completed;
    return true;
  })


  return (
    <>
      <div className="w-full h-screen bg-slate-800 flex justify-center items-center flex-col flex-wrap">
        <h1 className="text-white text-3xl font-bold mb-6">
          Personal Task Manager
        </h1>
        <div className="w-auto h-auto bg-white border-none rounded-xl px-6 py-4 flex flex-col gap-3">
          <form onSubmit={handleAddTask} className="mb-4 mt-5">
            <input
              type="text"
              placeholder="Enter the task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="basis-1 h-auto p-1 rounded-[10px] outline-none border-solid border-[0.5px] border-gray-500 pl-4 text-xl"
            />

            <button
              className="w-auto h-auto py-2 px-5 ml-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 duration-75 active:bg-purple-900"
              type="submit"
            >
              Add Task
            </button>
          </form>

          <ul className="flex flex-col gap-3">
            {filteredTasks.map((task) => (
              <li className="text-xl font-serif flex items-center justify-between bg-transparent shadow-sm  rounded-xl" 
              key={task.id}>

                <div className="flex items-center gap-2">
                <input className="w-4 h-4 rounded-full mr-[5px]"
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </span>
                </div>

                <button
                  className="w-auto h-auto py-[5px] px-[10px] text-[16px] ml-2 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 duration-75 active:bg-red-900 text-xl"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex justify-between mb-3">
            <button className="w-auto h-auto py-2 px-5 ml-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 duration-75 active:bg-green-900"
             onClick={() => setFilter("all")}>All</button>
            <button className="w-auto h-auto py-2 px-5 ml-2 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 duration-75 active:bg-orange-900"
             onClick={() => setFilter("active")}>Active</button>
            <button className="w-auto h-auto py-2 px-5 ml-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 duration-75 active:bg-blue-900"
             onClick={() => setFilter("completed")}>Completed</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskManager;
