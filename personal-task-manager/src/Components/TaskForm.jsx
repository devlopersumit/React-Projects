import React from "react";

function TaskForm({ newTask, setNewTask, newDueDate, setNewDueDate, newPriority, setNewPriority, newTags, setNewTags, onAddTask }) {
  return (
    <form onSubmit={onAddTask} className="flex flex-col md:flex-row items-center gap-3 mb-4 mt-5">
      <input
        type="text"
        placeholder="Enter the task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="flex-1 h-auto p-2 rounded-lg outline-none border border-gray-300 focus:border-purple-500 transition text-lg shadow-sm"
      />
      <input
        type="date"
        value={newDueDate}
        onChange={(e) => setNewDueDate(e.target.value)}
        className="flex-1 h-auto p-2 rounded-lg outline-none border border-gray-300 focus:border-purple-500 transition text-lg shadow-sm"
      />
      <select
        value={newPriority}
        onChange={(e) => setNewPriority(e.target.value)}
        className="flex-1 h-auto p-2 rounded-lg outline-none border border-gray-300 focus:border-purple-500 transition text-lg shadow-sm"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      
      <button
        className="min-w-30 py-2 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md hover:from-purple-700 hover:to-indigo-700 transition"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
