import ClockStyle from './Clock.module.scss';

const Clock = ({time = 0}: {time: number | undefined}) => {
  const min = Math.floor(time / 60)
  const seg = time % 60
  const [minDezena, minUnidade] = String(min).padStart(2, '0')
  const [segDezena, segUnidade] = String(seg).padStart(2, '0')

  return (
    <>
      <span className={ClockStyle.clockNumber}>{minDezena}</span>
      <span className={ClockStyle.clockNumber}>{minUnidade}</span>
      <span className={ClockStyle.clockDots}>:</span>
      <span className={ClockStyle.clockNumber}>{segDezena}</span>
      <span className={ClockStyle.clockNumber}>{segUnidade}</span>
    </>
  )
}

export default Clock