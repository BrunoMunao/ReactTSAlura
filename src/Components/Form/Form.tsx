import { useState } from "react"
import FormStyle from "./Form.module.scss";
import Button from "../Button/Button";
import { ITask } from "../../Types/ITask";
import React from "react";
import {v4 as uuidv4} from 'uuid';

const Form = ({setTasks}: {setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}) => {

    const [text, setText] = useState<string>('')
    const [time, setTime] = useState<string>('')

    const saveTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setTasks(tasks => [...tasks, {task: text, time: time, selected: false, completed: false, id: uuidv4()}])
        setText('')
        setTime('')
    }

    return (
        <form className={FormStyle.newTask} onSubmit={saveTask}>
            <div className={FormStyle.inputContainer}>
                <label>Task</label>
                <input type="text" id="task" onChange={(event) => setText(event.target.value)} value={text}></input>
            </div>
            <div className={FormStyle.inputContainer}>
                <label>Time</label>
                <input type="time" id="time" step="2" onChange={(event) => setTime(event.target.value)} value={time}></input>
            </div>
                <Button text="Add" type="submit"/>
        </form>
    );
};

export default Form;
