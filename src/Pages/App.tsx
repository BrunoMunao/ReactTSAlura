import React from "react";
import { useState } from "react";
import Form from "../Components/Form/Form";
import Timer from "../Components/Timer/Timer";
import TaskList from "../Components/TaskList/TaskList";
import AppStyle from "./App.module.scss";
import { ITask } from "../Types/ITask";

function App() {
    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [selected, setSelected] = useState<ITask>();
    const selectTask = (selectedTask: ITask) => {
        setSelected(selectedTask);
        setTasks((tasks) =>
            tasks.map((task) => ({
                ...task,
                selected: task.id === selectedTask.id ? true : false,
            }))
        );
    };

    const finishTask = () => {
        if (selected) {
            setSelected(undefined);
            setTasks((oldTasks) =>
                oldTasks.map((task) => {
                    if (task.id === selected.id) {
                        return {
                            ...task,
                            selected: false,
                            completed: true,
                        };
                    }
                    return task;
                })
            );
        }
    };

    return (
        <div className={AppStyle.App}>
            <Form setTasks={setTasks} />
            <Timer selected={selected} completeTask={finishTask}/>
            <TaskList tasks={tasks} selectTask={selectTask} />
        </div>
    );
}

export default App;
