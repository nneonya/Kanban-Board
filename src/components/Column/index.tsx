import React, { useState, useEffect } from "react";
import Task from "../Task"; 
import {
  ColumnContainer,
  ColumnHeader,
  TaskCount,
  AddButton,
  AddTaskButton,
} from "./styled"; 

interface TaskItem {
  id: string;
  title: string;
  description: string;
  priority?: "High" | "Medium" | "Low";
  isNew?: boolean; 
}

interface ColumnProps {
  title: string;
  color: string;
  columnId: string;
}

const Column: React.FC<ColumnProps> = ({ title, color, columnId }) => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem(`tasks_${columnId}`);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [columnId]);

  useEffect(() => {
    localStorage.setItem(`tasks_${columnId}`, JSON.stringify(tasks));
  }, [tasks, columnId]);

  const addTask = () => {
    const newTask: TaskItem = {
      id: Date.now().toString(),
      title: "New Task",
      description: "Task description",
      priority: "Medium",
      isNew: true, 
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId: string, title: string, description: string, priority?: "High" | "Medium" | "Low") => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, title, description, priority, isNew: false }
          : task
      )
    );
  };

  return (
    <ColumnContainer>
      <ColumnHeader color={color}>
        <TaskCount>{tasks.length}</TaskCount>
        <span>{title}</span>
        <AddButton onClick={addTask}>+</AddButton>
      </ColumnHeader>

      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          priority={task.priority}
          isNew={task.isNew}
          onDelete={() => deleteTask(task.id)}
          onEdit={editTask}
        />
      ))}
      <AddTaskButton color={color} onClick={addTask}>
        <span>Add task...</span>
      </AddTaskButton>
    </ColumnContainer>
  );
};

export default Column;
