import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Task from "./Task";

interface TaskItem {
  id: string;
  title: string;
  description: string;
  priority?: "High" | "Medium" | "Low";
}

interface ColumnProps {
  title: string;
  color: string;
  columnId: string;
}

const ColumnContainer = styled.div`
  background: #f8f8f8;
  border-radius: 12px;
  padding: 16px;
  width: 300px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ColumnHeader = styled.div<{ color: string }>`
  display: flex;
  max-height: 46px;
  justify-content: space-between;
  align-items: center;
  border-radius: 46px;
  background-color: ${({ color }) => color};
  color: white;
  font-weight: normal;
  padding: 10px;
`;

const TaskCount = styled.div`
  width: 32px;
  height: 32px;
  background: white;
  color: #666;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const TaskInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const PrioritySelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const AddTaskInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AddTaskButton = styled.button`
  background: white;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 46px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
`;

const Column: React.FC<ColumnProps> = ({ title, color, columnId }) => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState<"High" | "Medium" | "Low" | undefined>(undefined);
  const [isAddingTask, setIsAddingTask] = useState(false);

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
    if (!newTaskTitle.trim()) return;
    const newTask: TaskItem = {
      id: Date.now().toString(),
      title: newTaskTitle,
      description: newTaskDescription,
      priority: newTaskPriority,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
    setNewTaskPriority(undefined);
    setIsAddingTask(false);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId: string, title: string, description: string, priority?: "High" | "Medium" | "Low") => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, title, description, priority }
          : task
      )
    );
  };

  return (
    <ColumnContainer>
      <ColumnHeader color={color}>
        <HeaderContent>
          <TaskCount>{tasks.length}</TaskCount>
          <span>{title}</span>
        </HeaderContent>
        <AddButton onClick={() => setIsAddingTask(true)}>+</AddButton>
      </ColumnHeader>

      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          priority={task.priority}
          onDelete={() => deleteTask(task.id)}
          onEdit={editTask}
        />
      ))}

      {isAddingTask ? (
        <AddTaskInput>
          <TaskInput
            type="text"
            placeholder="Task title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <TaskInput
            type="text"
            placeholder="Add description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <PrioritySelect
            value={newTaskPriority}
            onChange={(e) => setNewTaskPriority(e.target.value as "High" | "Medium" | "Low")}
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </PrioritySelect>
          <AddTaskButton onClick={addTask}>Save</AddTaskButton>
        </AddTaskInput>
      ) : (
        <AddTaskButton onClick={() => setIsAddingTask(true)}>Add task...</AddTaskButton>
      )}
    </ColumnContainer>
  );
};

export default Column;
