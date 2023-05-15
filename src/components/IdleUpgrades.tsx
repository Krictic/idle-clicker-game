import { useEffect } from "react";

interface IdleIncomeProps {
    count: number,
    setCount: (count: number) => void,
    idleIncrementor: number,
    setIdleIncrementor: (idleIncrementor: number) => void,
}


// This is temporary until i figure out how to pull the state up to Card
function IdleUpgrades(props : IdleIncomeProps) {

      useEffect(() => {
        window.localStorage.setItem('idleIncrementor', props.idleIncrementor.toString());
      }, [props.idleIncrementor]);
      
    function handleButtonClick() {
        if (props.count >= 1000) {
            props.setIdleIncrementor(props.idleIncrementor + 1);
            props.setCount(props.count - 1000)
        }
      }

    useEffect(() => {
        const timeout = setTimeout(() => {
            props.setCount(props.count + props.idleIncrementor);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [props.idleIncrementor, props, props.count, props.setCount]);
    
    return (
        <div>
            <p>Idle Income: {props.idleIncrementor}</p>
            <button onClick={handleButtonClick}>Upgrade Idle Income by 1 (cost 1000)</button>
        </div>
    );
}

export default IdleUpgrades;