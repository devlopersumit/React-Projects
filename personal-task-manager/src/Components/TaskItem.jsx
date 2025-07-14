import React from "react";
// If you have Heroicons installed, you can import them like this:
// import { TrashIcon, PlusIcon, CheckCircleIcon, ExclamationIcon } from '@heroicons/react/solid';

function TaskItem({
  task,
  onToggleComplete,
  onDelete,
  subtaskText,
  setSubtaskText,
  onAddSubtask,
  onToggleSubtaskComplete
}) {
  let dueDateStatus = "";
  let dueDateColor = "";
  let dueDateBg = "";
  if (task.dueDate) {
    const today = new Date();
    const due = new Date(task.dueDate);
    today.setHours(0,0,0,0);
    due.setHours(0,0,0,0);
    if (due < today) {
      dueDateStatus = "Overdue";
      dueDateColor = "text-red-700";
      dueDateBg = "bg-red-100";
    } else if (due.getTime() === today.getTime()) {
      dueDateStatus = "Due Today";
      dueDateColor = "text-orange-600";
      dueDateBg = "bg-orange-100";
    } else {
      dueDateStatus = "Upcoming";
      dueDateColor = "text-green-700";
      dueDateBg = "bg-green-100";
    }
  }
  let priorityColor = "";
  let priorityBg = "";
  if (task.priority === "High") {
    priorityColor = "text-white";
    priorityBg = "bg-red-600";
  } else if (task.priority === "Medium") {
    priorityColor = "text-black";
    priorityBg = "bg-yellow-300";
  } else if (task.priority === "Low") {
    priorityColor = "text-black";
    priorityBg = "bg-green-300";
  }

  // Subtask progress
  let percent = 0;
  if (task.subtasks && task.subtasks.length > 0) {
    const completed = task.subtasks.filter(st => st.completed).length;
    percent = Math.round((completed / task.subtasks.length) * 100);
  }

  return (
    <li className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 mb-4 flex flex-col gap-3 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition group relative">
      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <button
            className="focus:outline-none"
            onClick={() => onToggleComplete(task.id)}
            title={task.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {/* <CheckCircleIcon className={`w-6 h-6 ${task.completed ? 'text-green-500' : 'text-gray-300 group-hover:text-green-400'}`} /> */}
            <span className={`w-6 h-6 inline-block rounded-full border-2 ${task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 group-hover:border-green-400'} transition`}></span>
          </button>
          <span
            className={`text-xl font-semibold ${task.completed ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-800 dark:text-gray-100"}`}
          >
            {task.title}
          </span>
          {task.dueDate && (
            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${dueDateColor} ${dueDateBg} border border-transparent`}
              title={dueDateStatus}
            >
              {dueDateStatus}
            </span>
          )}
          {task.priority && (
            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${priorityColor} ${priorityBg} shadow`} title={`Priority: ${task.priority}`}>
              {task.priority}
            </span>
          )}
        </div>
        <button
          className="py-1 px-3 bg-red-500 text-white rounded-lg font-semibold shadow hover:bg-red-700 transition text-base focus:outline-none"
          onClick={() => onDelete(task.id)}
          title="Delete task"
        >
          {/* <TrashIcon className="w-5 h-5" /> */}
          &#128465;
        </button>
      </div>
      {/* Tags */}
      {task.tags && task.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1 ml-8">
          {task.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold border border-purple-200 shadow-sm">
              #{tag}
            </span>
          ))}
        </div>
      )}
      {/* Subtask Progress */}
      {task.subtasks && task.subtasks.length > 0 && (
        <div className="flex items-center gap-2 mt-2 ml-8">
          <div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-3 bg-blue-500"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{percent}%</span>
        </div>
      )}
      {/* Subtasks UI */}
      <div className="ml-8 mt-2">
        <ul className="mb-2">
          {task.subtasks && task.subtasks.length > 0 && task.subtasks.map((subtask) => (
            <li key={subtask.id} className="flex items-center gap-2 text-base">
              <button
                className="focus:outline-none"
                onClick={() => onToggleSubtaskComplete(task.id, subtask.id)}
                title={subtask.completed ? "Mark as incomplete" : "Mark as complete"}
              >
                <span className={`w-4 h-4 inline-block rounded-full border-2 ${subtask.completed ? 'bg-blue-500 border-blue-500' : 'border-gray-300 group-hover:border-blue-400'} transition`}></span>
              </button>
              <span className={subtask.completed ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-700 dark:text-gray-200"}>{subtask.title}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Add subtask..."
            value={subtaskText || ""}
            onChange={e => setSubtaskText(e.target.value)}
            className="flex-1 h-auto p-1 rounded-lg outline-none border border-gray-300 dark:border-gray-600 focus:border-blue-400 transition text-base shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          />
          <button
            type="button"
            onClick={onAddSubtask}
            className="py-1 px-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold transition focus:outline-none"
            title="Add subtask"
          >
            {/* <PlusIcon className="w-4 h-4" /> */}
            +
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
