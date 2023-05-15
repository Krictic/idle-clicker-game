import React, { useState, useEffect } from "react";
import { useTimer } from "react-use-precision-timer";

interface ATProps {
    setCount: (count: number) => void;
}

// This is for testing purposes only.
export default function SessionTimer(props : ATProps) {
    const [displayTimer, setDisplayTimer] = useState(0);
    const callback = React.useCallback(() => setDisplayTimer(prevTime => prevTime + 1), []);
    const timer = useTimer({ delay: 1000 }, callback);

    useEffect(() => {
        timer.start();
    }, [timer]);

    return (
        <>
        <div>Accurate Timer: {displayTimer}s</div>
        <button onClick={() => setDisplayTimer(0)}>Reset Timer Only</button>
        <button onClick={() => {setDisplayTimer(0), props.setCount(0)}}>Reset Timer and Count</button>
        </>
    );
}