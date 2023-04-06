import { useEffect, useState } from "react";
import { timeToSec } from "../../Common/Utils/time";
import { ITask } from "../../Types/ITask";
import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import TimerStyle from "./Timer.module.scss";

const Timer = ({ selected, completeTask}: { selected: ITask | undefined, completeTask: () => void}) => {
    const [time, setTime] = useState<number>();
    useEffect(() => {
        if (selected?.time) setTime(timeToSec(selected.time));
    }, [selected]);

    const countdown = (count: number = 0) => {
      setTimeout(() => {
        if (count > 0)
        {
          setTime(count - 1)
          countdown(count -1)
        }
        completeTask()
      }, 1000)
    }

    return (
        <div className={TimerStyle.timer}>
            <p className={TimerStyle.title}>
                Escolha um card e inicie o Cronômetro
            </p>
            <div className={TimerStyle.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button text={"Start!"} type="button" onClick={() => countdown(time)}/>
        </div>
    );
};

export default Timer;
