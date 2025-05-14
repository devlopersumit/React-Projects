import { useEffect, useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(()=> {
    const savedTask = localStorage.getItem("todoTask");
    return savedTask ? JSON.parse(savedTask) : [];
  });

  
  const [input, SetInput] = useState("");

  useEffect(()=> {
    localStorage.setItem("todoTask", JSON.stringify(task));
  }, [task]);

  function handleInputChange(e) {
    SetInput(e.target.value);
  }

  function addTask() {
    if (input.trim() !== "") {
      setTask((t) => [...t, input]);
      SetInput("");
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <div className="w-full h-screen bg-pink-300 flex items-center justify-center">
    <div className="w-[350px] h-[400px] bg-white rounded-xl p-3 flex flex-col gap-2">
      <h1 className="text-xl font-bold text-center">To-Do-List-App</h1>
      <div className="w-full flex justify-around gap-1">
        <input className="border-[1.5px] border-solid border-gray-400 rounded-md pl-2 py-1 outline-none grow shrink basis-0"
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={handleInputChange}
        />

        <button className="bg-blue-700 text-white border-none rounded-lg py-2 px-3" 
        onClick={addTask}>Add</button>
      </div>

      <ul >
        {task.map((tasks, index) => (
          <div className="w-full flex justify-between items-center  rounded-md px-2 py-2 gap-1 mb-1" key={index}>
            <li className="list-none text-[18px]">
              <span>{tasks}</span>
            </li>
            <button className="bg-red-700 text-white border-none rounded-lg py-2 px-3"
              onClick={() => {
                deleteTask(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default ToDoList;
