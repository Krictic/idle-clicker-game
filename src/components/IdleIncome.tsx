import { useEffect, useState } from "react";

interface IdleIncomeProps {
  count: number;
  setCount: (count: number) => void;
}

function IdleIncome(props: IdleIncomeProps) {
  const initialIdleIncrementor = 0;
  const [idleIncrementor, setIdleIncrementor] = useState<number>(() => {
    const initialIncrementor = parseInt(
      window.localStorage.getItem("incrementor") || "0",
      10
    );
    return initialIncrementor;
  });

  useEffect(() => {
    window.localStorage.setItem("incrementor", idleIncrementor.toString());
  }, [idleIncrementor]);

  function handleButtonClick() {
    if (props.count >= 1000) {
      setIdleIncrementor(idleIncrementor + 1);
      props.setCount(props.count - 1000);
    }
  }
  // temporary solution until I find a better one.
  function reset() {
    setIdleIncrementor(initialIdleIncrementor);
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
      <button onClick={handleButtonClick}>
        Upgrade Idle Income by 1 (cost 1000)
      </button>
      <button onClick={reset}>Reset Idle Income</button>
    </div>
  );
}

export default IdleIncome;
