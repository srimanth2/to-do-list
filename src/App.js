import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskLists';
import { CssBaseline, Container, Typography } from '@mui/material';

function App() {
  return (
    <TaskProvider> {/* ✅ Removed extra space */}
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" gutterBottom> 
          Task Manager 
        </Typography>
        <TaskForm />
        <TaskList />
      </Container>
    </TaskProvider>
  );
}

export default App;
