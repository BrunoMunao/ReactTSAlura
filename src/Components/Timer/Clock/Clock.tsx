import ClockStyle from './Clock.module.scss';

const Clock = () => {
  return (
    <>
      <span className={ClockStyle.clockNumber}>0</span>
      <span className={ClockStyle.clockNumber}>0</span>
      <span className={ClockStyle.clockDots}>:</span>
      <span className={ClockStyle.clockNumber}>0</span>
      <span className={ClockStyle.clockNumber}>0</span>
    </>
  )
}

export default Clock