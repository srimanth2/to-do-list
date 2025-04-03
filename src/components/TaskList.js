import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "../components/Task";
import { List, Typography } from "@mui/material";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <>
      <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
        {completedTasks} / {totalTasks} Tasks Completed
      </Typography>
      <List sx={{ maxWidth: 360, mx: "auto" }}>
        {tasks?.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </List>
    </>
  );
}
