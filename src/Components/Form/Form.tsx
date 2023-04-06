import { useState } from "react"
import FormStyle from "./Form.module.scss";
import Button from "../Button/Button";
import { ITask } from "../../Types/ITask";
import React from "react";

const Form = ({setTasks}: {setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}) => {

    const [text, setText] = useState('')
    const [time, setTime] = useState('')

    const saveTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setTasks(tasks => [...tasks, {task: text, time: time}])
    }

    return (
        <form className={FormStyle.newTask} onSubmit={saveTask}>
            <div className={FormStyle.inputContainer}>
                <label>Task</label>
                <input type="text" id="task" onChange={(event) => setText(event.target.value)} value={text}></input>
            </div>
            <div className={FormStyle.inputContainer}>
                <label>Time</label>
                <input type="time" id="time" onChange={(event) => setTime(event.target.value)} value={time}></input>
            </div>
                <Button text="Add" type="submit"/>
        </form>
    );
};

export default Form;
