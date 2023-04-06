import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import TimerStyle from './Timer.module.scss';

const Timer = () => {
  return (
    <div className={TimerStyle.timer}>
      <p className={TimerStyle.title}>Escolha um card e inicie o Cronômetro</p>
      <div className={TimerStyle.clockWrapper}>
        <Clock />
      </div>
      <Button text={"Start!"} type="button"/>
    </div>
  )
}

export default Timer