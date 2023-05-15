// React imports
import { useState, useEffect } from 'react';

// Component Imports
import DisplayCount from "./DisplayCount";
import Button from "./Buttons";
import Upgrades from "./ClickerUpgrades";
import IdleUpgrades from "./IdleUpgrades";
import AccurateTimer from './AccurateTimer';

function Card() {
  const [count, setCount] = useState<number>(() => {
    // Load the initial count state from localStorage, or default to 0 if not present.
    const initialCount = parseInt(window.localStorage.getItem('count') || '0', 10);
    return initialCount;
  });

  const [incrementor, setIncrementor] = useState<number>(() => {
    const initialIncrementor = parseInt(window.localStorage.getItem('incrementor') || '1', 10);
   return initialIncrementor;
  });

  useEffect(() => {
    window.localStorage.setItem('count', count.toString());
  }, [count]);
  useEffect(() => {
    window.localStorage.setItem('incrementor', incrementor.toString());
  }, [incrementor]);


  function handleButtonClick() {
    setCount(count + incrementor);
  }

  return (
    <div className="card">
      <AccurateTimer setCount={setCount}/>
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
      <IdleUpgrades count={count} setCount={setCount} setIncrementor={setIncrementor} />
    </div>
  );
}

export default Card;
