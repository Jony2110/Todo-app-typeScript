import React, { useState, useEffect } from 'react';
import ToDo from './components/Todo';

interface ToDo {
  id: number;
  task: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ToDo[]>([]);
  const [newTask, setNewTask] = useState('');

  // Загрузка задач из localStorage при монтировании компонента
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Сохранение задач в localStorage при каждом изменении списка задач
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newToDo = {
        id: tasks.length + 1,
        task: newTask,
        completed: false,
      };
      setTasks([...tasks, newToDo]);
      setNewTask('');
    }
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">ToDo App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 flex-1"
          placeholder="Enter todo..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 ml-2 rounded"
        >
          ADD
        </button>
      </div>

      {tasks.map(task => (
        <ToDo
          key={task.id}
          id={task.id}
          task={task.task}
          completed={task.completed}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default App;
