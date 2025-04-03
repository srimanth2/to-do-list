import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext'; // ✅ Fixed case sensitivity
import { Button, TextField } from '@mui/material';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title });
      setTitle("");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ display: 'flex', justifyContent: 'center', padding: 20 }}
    >
      <TextField
        label="New Task"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // ✅ Fixed event name
        fullWidth
        style={{ marginRight: 10 }}
      />
      <Button type="submit" color="primary" variant="contained">
        Add Task
      </Button>
    </form>
  );
}
