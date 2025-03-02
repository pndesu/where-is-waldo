import { useEffect, useState } from "react"

export const Timer = ({ characterList }) => {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        if (characterList.length === 0) {
            return;
        }
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000);
        return () => clearInterval(intervalId);
    }, [characterList.length]);
    return (
        <div className="timer">
            <button>Timer: {seconds} seconds</button>
        </div>
    )
}