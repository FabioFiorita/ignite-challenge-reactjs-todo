import { v4 } from "uuid"

import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Empty } from "./components/Empty";
import { Task } from "./components/Task";

import styles from "./App.module.css"

import "./global.css";
import { useState } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
export interface TaskType {
  id: string;
  title: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [newTask, setNewTask] = useState("")
  const noTasksCreated = tasks.length == 0;

  function handleToggleSelected(taskToToggle: TaskType) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskToToggle.id) {
        task.completed = !task.completed
        return task
      }
      return task
    })

    setTasks(updatedTasks)
  }

  function handleDelete(taskToDelete: TaskType) {
    const tasksWithoutDeleted = tasks.filter(task => task.id != taskToDelete.id);
    setTasks(tasksWithoutDeleted);
  }

  function handleAddNewTask() {
    if (!newTask) {
      return
    }
    const task: TaskType = {
      id: v4(),
      title: newTask,
      completed: false
    }

    setTasks([...tasks, task])
    setNewTask("")
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.newTask}>
          <Input value={newTask} onChange={e => setNewTask(e.target.value)} />
          <Button onClick={handleAddNewTask} />
        </div>
        <Info tasks={tasks} />
        {noTasksCreated ? <Empty /> :
          tasks.map(task => {
            return <Task key={task.id} task={task} onToggleSelected={handleToggleSelected} onDelete={handleDelete} />
          })
        }
      </div>
    </>
  )
}