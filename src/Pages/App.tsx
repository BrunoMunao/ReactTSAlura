import React from 'react';
import { useState } from "react"
import Form from '../Components/Form/Form';
import Timer from '../Components/Timer/Timer';
import TaskList from '../Components/TaskList/TaskList';
import AppStyle from './App.module.scss'
import { ITask } from '../Types/ITask';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([])

  return (
    <div className={AppStyle.App}>
      <Form setTasks={setTasks}/>
      <Timer />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
