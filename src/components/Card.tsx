// React imports
import { useState, useEffect } from "react";

// Component Imports
import DisplayCount from "./DisplayCount";
import Button from "./Buttons";
import Upgrades from "./ClickerUpgrades";
import IdleIncome from "./IdleIncome";

function Card() {
  const initialStateCount = 0;
  const initialStateIncrementor = 0;

  const [count, setCount] = useState<number>(() => {
    // Load the initial count state from localStorage, or default to 0 if not present.
    const initialCount = parseInt(
      window.localStorage.getItem("count") || "0",
      10
    );
    return initialCount;
  });

  const [incrementor, setIncrementor] = useState<number>(() => {
    const initialIncrementor = parseInt(
      window.localStorage.getItem("incrementor") || "1",
      10
    );
    return initialIncrementor;
  });

  useEffect(() => {
    window.localStorage.setItem("count", count.toString());
  }, [count]);
  useEffect(() => {
    window.localStorage.setItem("incrementor", incrementor.toString());
  }, [incrementor]);

  const reset = () => {
    setCount(initialStateCount);
    setIncrementor(initialStateIncrementor);
  };

  function handleButtonClick() {
    setCount(count + incrementor);
  }

  return (
    <div className="card">
      <DisplayCount count={count} />
      <Button
        count={count}
        incremmentor={incrementor}
        handleClick={handleButtonClick}
      />
      <Upgrades
        count={count}
        setCount={setCount}
        incrementor={incrementor}
        setIncrementor={setIncrementor}
      />
      <IdleIncome count={count} setCount={setCount} />
      <button onClick={reset}>Reset Clicker</button>
    </div>
  );
}

export default Card;
