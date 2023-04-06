import Task from "./Task/Task"
import TaskStyle from "./TaskList.module.scss"
import { ITask } from "../../Types/ITask"


const TaskList = ({tasks}: {tasks: ITask[]}) => {
    return(
        <aside className={TaskStyle.taskList}>
            <ul>
                <h2>Tasks</h2>
                {tasks.map((task, index) => (<Task key={index} {...task}/>))}
            </ul>
        </aside>
    )
}

export default TaskList