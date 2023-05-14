import { useEffect, useState } from "react";

interface IdleIncomeProps {
    count: number,
    setCount: (count: number) => void;
}

function IdleIncome(props : IdleIncomeProps) {
    const [incrementor, setIncrementor] = useState(1);

    function handleButtonClick() {
        if (props.count >= 1000) {
            setIncrementor(incrementor + 1);
            props.setCount(props.count - 1000)
        }
      }

    useEffect(() => {
        const timeout = setTimeout(() => {
            props.setCount(props.count + incrementor);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [incrementor, props, props.count, props.setCount]);
    
    return (
        <div>
            <p>Idle Income: {incrementor}</p>
            <button onClick={handleButtonClick}>Upgrade Idle Income by 1 (cost 1000)</button>
        </div>
    );
}

export default IdleIncome;