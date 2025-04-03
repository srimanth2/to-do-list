import { useContext, useState } from 'react'; 
import { TaskContext } from "../context/TaskContext"; 
import { ListItem, ListItemText, IconButton, Checkbox, TextField } from '@mui/material'; 
import DeleteIcon from '@mui/icons-material/Delete';

export default function Task({ task }) {
  const { deleteTask, toggleTaskCompletion, updateTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing && newTitle.trim()) {
      updateTask(task.id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListItem secondaryAction={
      <>
        <IconButton onClick={() => handleEdit()} edge="end" aria-label="edit">
          {isEditing ? "✔️" : "✏️"}
        </IconButton>
        <IconButton onClick={() => deleteTask(task.id)} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </>
    }>
      <Checkbox checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
      {isEditing ? (
        <TextField value={newTitle} onChange={(e) => setNewTitle(e.target.value)} size="small" />
      ) : (
        <ListItemText primary={task.title} sx={{ textDecoration: task.completed ? "line-through" : "none" }} />
      )}
    </ListItem>
  );
}