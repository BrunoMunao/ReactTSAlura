import { ITask } from "../../../Types/ITask";
import TaskStyle from "./Task.module.scss";

interface Props extends ITask {
    selectedTask: (selectedTask: ITask) => void;
}

const Task = ({ task, time, selected, completed, id, selectedTask }: Props) => {
    return (
        <li
            className={`${TaskStyle.item} ${
                selected ? TaskStyle.itemSelected : ""
            } ${completed ? TaskStyle.itemCompleted : ""} `}
            onClick={() => !completed &&
                selectedTask({ task, time, selected, completed, id })
            }
        >
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    );
};

export default Task;
