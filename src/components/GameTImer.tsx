import React, { useEffect, useState } from "react";
import { useTimer } from "react-use-precision-timer";

export default function GameTimer() {
    // Its too bad I couldn´t figure out a way of pulling this state up to Cards, but this should work for now.
    // I just noticed this only worked as long as the client is open, so this entire thing is useless.
    // Todo: refactor this to use unixEpoch.
    const [gameTimerDisplay, setGameTimerDisplay] = useState<number>(() => {
        const initialTImer = parseInt(window.localStorage.getItem("gameTimer") || "0", 10);
        return initialTImer;
      })
  
    const callback = React.useCallback(() => {
      setGameTimerDisplay(gameTimerDisplay + 1);
    }, [gameTimerDisplay, setGameTimerDisplay]);
  
    const timer = useTimer({ delay: 1000 }, callback);

    useEffect(() => {
        window.localStorage.setItem('gameTimer', gameTimerDisplay.toString());
      }, [gameTimerDisplay]);
  
    useEffect(() => {
      timer.start();
      return () => {
        timer.stop();
      };
    }, [timer]);
  
    return <div>Persistent Game Timer: {gameTimerDisplay}s</div>;
  }