import TaskStyle from './Task.module.scss'

const Task = (props: {task: string, time: string}) => {
    return(
        <li className={TaskStyle.item}>
            <h3>{props.task}</h3>
            <span>{props.time}</span>
        </li>
    )
}

export default Task