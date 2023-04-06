import Task from "./Task/Task"
import TaskStyle from "./TaskList.module.scss"
import { ITask } from "../../Types/ITask"

interface Props {
    tasks: ITask[]
    selectTask: (selectedTask: ITask) => void;
}

const TaskList = ({tasks, selectTask}: Props) => {
    return(
        <aside className={TaskStyle.taskList}>
            <ul>
                <h2>Tasks</h2>
                {tasks.map((task) => (<Task key={task.id} selectedTask={selectTask} {...task}/>))}
            </ul>
        </aside>
    )
}

export default TaskList