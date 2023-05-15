import React, { useState, useEffect } from "react";
import { useTimer } from "react-use-precision-timer";

export default function AccurateTimer() {
    const [displayTimer, setDisplayTimer] = useState(0);
    const callback = React.useCallback(() => setDisplayTimer(prevTime => prevTime + 1), []);
    const timer = useTimer({ delay: 100 }, callback);

    useEffect(() => {
        timer.start();
    }, [timer]);

    return (
        <div>{displayTimer}</div>
    );
}