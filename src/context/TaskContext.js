import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, { ...task, id: Date.now(), completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const updateTask = (taskId, newTitle) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? { ...task, title: newTitle } : task));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskCompletion, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}