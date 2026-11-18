import React from 'react'
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));;
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (editId) {
      setTasks(tasks.map(task =>
        task.id === editId ? { ...task, text: inputValue } : task
      ));
      setEditId(null); 
    } else {
      const newTask = { id: Date.now(), text: inputValue };
      setTasks([...tasks, newTask]);
    }
    setInputValue('');
  };
  const handleEdit = (task) => {
    setInputValue(task.text);
    setEditId(task.id)
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto', color: '#fff' }} >
      <h2>React CRUD with LocalStorage</h2>

      <TaskForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
        editId={editId}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
        {tasks.length === 0 && <p style={{ color: '#aaa' }}>No tasks found. Add a new task!</p>}
      </div>
    </div>
  )
}

export default App