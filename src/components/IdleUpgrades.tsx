import { useEffect, useState } from "react";

interface IdleIncomeProps {
    count: number,
    setCount: (count: number) => void;
}

function IdleUpgrades(props : IdleIncomeProps) {
    const [idleIncrementor, setIdleIncrementor] = useState<number>(() => {
        const initialIncrementor = parseInt(window.localStorage.getItem('idleIncrementor') || '1', 10);
        return initialIncrementor;
      });


      useEffect(() => {
        window.localStorage.setItem('idleIncrementor', idleIncrementor.toString());
      }, [idleIncrementor]);
      
    function handleButtonClick() {
        if (props.count >= 1000) {
            setIdleIncrementor(idleIncrementor + 1);
            props.setCount(props.count - 1000)
        }
      }

    useEffect(() => {
        const timeout = setTimeout(() => {
            props.setCount(props.count + idleIncrementor);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [idleIncrementor, props, props.count, props.setCount]);
    
    return (
        <div>
            <p>Idle Income: {idleIncrementor}</p>
            <button onClick={handleButtonClick}>Upgrade Idle Income by 1 (cost 1000)</button>
            <button onClick={() => {setIdleIncrementor(0)}}>Reset Idle</button>
        </div>
    );
}

export default IdleUpgrades;