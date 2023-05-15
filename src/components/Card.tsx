// React imports
import { useState, useEffect } from 'react';

// Component Imports
import DisplayCount from "./DisplayCount";
import Button from "./Buttons";
import Upgrades from "./ClickerUpgrades";
import IdleUpgrades from "./IdleUpgrades";
import SessionTimer from './AccurateTimer';

function Card() {
  // States
  const [count, setCount] = useState<number>(() => {
    // Load the initial count state from localStorage, or default to 0 if not present.
    const initialCount = parseInt(window.localStorage.getItem('count') || '0', 10);
    return initialCount;
  });

  const [incrementor, setIncrementor] = useState<number>(() => {
    const initialIncrementor = parseInt(window.localStorage.getItem('incrementor') || '1', 10);
   return initialIncrementor;
  });

  const [idleIncrementor, setIdleIncrementor] = useState<number>(() => {
    const initialIncrementor = parseInt(window.localStorage.getItem('idleIncrementor') || '1', 10);
    return initialIncrementor;
  });

  // Effects
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
      <SessionTimer setCount={setCount}/>
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
      <IdleUpgrades count={count} setCount={setCount} idleIncrementor={idleIncrementor} setIdleIncrementor={setIdleIncrementor}/>
      <button onClick={() => {setIdleIncrementor(1), setIncrementor(1), setCount(0)}}>Hard Reset</button>
    </div>
  );
}

export default Card;
