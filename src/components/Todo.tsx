import React from 'react';

interface ToDoItemProps {
  id: number;
  task: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ id, task, completed, toggleComplete, deleteTask }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
      <div
        className={`cursor-pointer ${completed ? 'line-through' : ''}`}
        onClick={() => toggleComplete(id)}
      >
        {task}
      </div>
      <button
        className="text-red-500"
        onClick={() => deleteTask(id)}
      >
        <img className='w-6 h-6' src="./img/icons8-close.svg" alt="" />
      </button>
      
    </div>
  );
};

export default ToDoItem;
