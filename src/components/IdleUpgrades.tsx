import { useEffect, useState } from "react";

interface IdleIncomeProps {
    count: number,
    setCount: (count: number) => void,
    setIncrementor: any, // Please dont judge, I know this is heresy.
}


// This is temporary until i figure out how to pull the state up to Card
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
            <button onClick={() => {setIdleIncrementor(1), props.setIncrementor(1), props.setCount(0)}}>Hard Reset</button>
        </div>
    );
}

export default IdleUpgrades;