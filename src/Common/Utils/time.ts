export function timeToSec(time: string)
{
    const [hrs = '0', min = '0', sec = '0'] = time.split(":")

    const hrsInSec = Number(hrs) * 3600;
    const minsInSec = Number(min) * 60;
    return hrsInSec + minsInSec + Number(sec)
}
