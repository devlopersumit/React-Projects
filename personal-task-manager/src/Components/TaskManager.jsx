import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [newPriority, setNewPriority] = useState("Medium");
  const [newTags, setNewTags] = useState("");
  const [subtaskTexts, setSubtaskTexts] = useState({});
  const [filter, setFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Add Task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    const tagsArr = newTags.split(",").map(t => t.trim()).filter(Boolean);
    const task = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
      dueDate: newDueDate || null,
      priority: newPriority,
      tags: tagsArr,
      subtasks: [],
    };
    setTasks((prev) => [...prev, task]);
    setNewTask("");
    setNewDueDate("");
    setNewPriority("Medium");
    setNewTags("");
  };

  // Mark Completed
  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Add Subtask
  const handleAddSubtask = (taskId) => {
    const text = subtaskTexts[taskId]?.trim();
    if (!text) return;
    setTasks((prevTasks) => prevTasks.map(task =>
      task.id === taskId
        ? { ...task, subtasks: [...(task.subtasks || []), { id: Date.now(), title: text, completed: false }] }
        : task
    ));
    setSubtaskTexts((prev) => ({ ...prev, [taskId]: "" }));
  };

  // Toggle Subtask Complete
  const toggleSubtaskComplete = (taskId, subtaskId) => {
    setTasks((prevTasks) => prevTasks.map(task =>
      task.id === taskId
        ? { ...task, subtasks: task.subtasks.map(st => st.id === subtaskId ? { ...st, completed: !st.completed } : st) }
        : task
    ));
  };

  // Filter Task
  const filteredTasks = tasks.filter(task => {
    if (filter === "active" && task.completed) return false;
    if (filter === "completed" && !task.completed) return false;
    if (tagFilter && !(task.tags || []).includes(tagFilter)) return false;
    if (search) {
      const searchLower = search.toLowerCase();
      const inTitle = task.title.toLowerCase().includes(searchLower);
      const inTags = (task.tags || []).some(tag => tag.toLowerCase().includes(searchLower));
      const inSubtasks = (task.subtasks || []).some(st => st.title.toLowerCase().includes(searchLower));
      if (!inTitle && !inTags && !inSubtasks) return false;
    }
    return true;
  });

  // Collect all unique tags for filter UI
  const allTags = Array.from(new Set(tasks.flatMap(t => t.tags || [])));

  // Today's Focus: tasks due today or high priority
  const today = new Date();
  today.setHours(0,0,0,0);
  const focusTasks = tasks.filter(task => {
    if (task.completed) return false;
    if (task.priority === 'High') return true;
    if (task.dueDate) {
      const due = new Date(task.dueDate);
      due.setHours(0,0,0,0);
      return due.getTime() === today.getTime();
    }
    return false;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center py-10 px-2 transition-colors">
      <div className="w-full max-w-2xl bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 transition-colors">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-4xl font-extrabold text-center text-purple-800 dark:text-purple-300 tracking-tight drop-shadow-lg">
            Personal Task Manager
          </h1>
          <button
            className="ml-4 py-2 px-4 rounded-lg font-bold shadow bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 hover:from-purple-200 hover:to-purple-400 dark:hover:from-purple-800 dark:hover:to-purple-900 transition"
            onClick={() => setDarkMode(dm => !dm)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
        <TaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          newDueDate={newDueDate}
          setNewDueDate={setNewDueDate}
          newPriority={newPriority}
          setNewPriority={setNewPriority}
          newTags={newTags}
          setNewTags={setNewTags}
          onAddTask={handleAddTask}
        />
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          <button className={`py-2 px-5 rounded-lg font-semibold transition text-white ${filter === "all" ? "bg-green-600" : "bg-green-400 hover:bg-green-600"}`}
            onClick={() => setFilter("all")}>All</button>
          <button className={`py-2 px-5 rounded-lg font-semibold transition text-white ${filter === "active" ? "bg-orange-600" : "bg-orange-400 hover:bg-orange-600"}`}
            onClick={() => setFilter("active")}>Active</button>
          <button className={`py-2 px-5 rounded-lg font-semibold transition text-white ${filter === "completed" ? "bg-blue-600" : "bg-blue-400 hover:bg-blue-600"}`}
            onClick={() => setFilter("completed")}>Completed</button>
        </div>
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-2">
            <span className="text-gray-500 dark:text-gray-300 font-semibold mr-2">Filter by tag:</span>
            <button
              className={`px-3 py-1 rounded-full text-xs font-bold border ${tagFilter === "" ? "bg-purple-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-purple-700 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-900"}`}
              onClick={() => setTagFilter("")}
            >All</button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-bold border ${tagFilter === tag ? "bg-purple-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-purple-700 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-900"}`}
                onClick={() => setTagFilter(tag)}
              >{tag}</button>
            ))}
          </div>
        )}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search tasks, tags, or subtasks..."
            className="w-full max-w-md p-3 rounded-xl border border-purple-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-purple-400 shadow-sm outline-none text-lg transition bg-white/80 dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
        {focusTasks.length > 0 && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-yellow-100 to-purple-100 dark:from-yellow-900/40 dark:to-purple-900/40 border-l-8 border-purple-400 shadow flex flex-col gap-2 animate-fade-in">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🔥</span>
              <span className="text-lg font-bold text-purple-800 dark:text-purple-200">Today's Focus</span>
            </div>
            <ul className="flex flex-col gap-2">
              {focusTasks.map(task => (
                <li key={task.id} className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">{task.title}</span>
                  {task.dueDate && (
                    <span className="ml-2 px-2 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/60 dark:text-orange-200">Due Today</span>
                  )}
                  {task.priority === 'High' && (
                    <span className="ml-2 px-2 py-1 rounded-full text-xs font-bold bg-red-600 text-white">High Priority</span>
                  )}
                </li>
              ))}
            </ul>
            <span className="text-sm text-gray-500 dark:text-gray-300 mt-2">Stay focused and make progress on what matters most!</span>
          </div>
        )}
        <ul className="flex flex-col gap-4 mt-2 animate-fade-in">
          {filteredTasks.length === 0 && (
            <li className="flex flex-col items-center justify-center py-16 text-center">
              <span className="text-6xl mb-4 text-purple-300 dark:text-purple-700">✨</span>
              <span className="text-xl font-bold text-gray-500 dark:text-gray-300 mb-2">No tasks found</span>
              <span className="text-base text-gray-400 dark:text-gray-500">Start by adding a new task, or try a different search or filter.<br/>“The secret of getting ahead is getting started.”</span>
            </li>
          )}
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={toggleComplete}
              onDelete={deleteTask}
              subtaskText={subtaskTexts[task.id] || ""}
              setSubtaskText={text => setSubtaskTexts(prev => ({ ...prev, [task.id]: text }))}
              onAddSubtask={() => handleAddSubtask(task.id)}
              onToggleSubtaskComplete={toggleSubtaskComplete}
              // Add fade-slide-in class for animation
              className="fade-slide-in"
            />
          ))}
        </ul>
      </div>
      <footer className="mt-10 mb-2 px-6 py-4 bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-gray-900/80 dark:to-gray-800/80 rounded-2xl shadow-lg flex flex-col items-center gap-2 border border-purple-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="font-semibold text-purple-700 dark:text-purple-300 text-base">Made by Sumit Jha</span>
          <a href="https://github.com/devlopersumit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-900/80 border border-purple-300 dark:border-purple-700 text-blue-700 dark:text-blue-300 font-semibold shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sumit-jha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-900/80 border border-purple-300 dark:border-purple-700 text-blue-700 dark:text-blue-300 font-semibold shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
            LinkedIn
          </a>
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-600 mt-1">&copy; {new Date().getFullYear()} Personal Task Manager. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default TaskManager;
