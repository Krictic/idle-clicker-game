import { useState } from "react";
import DisplayCount from "./DisplayCount";
import Button from "./Buttons";
import Upgrades from "./ClickerUpgrades";
import IdleIncome from "./IdleIncome";

function Card() {
  const [count, setCount] = useState(0);
  const [incrementor, setIncrementor] = useState(1);

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
    </div>
  );
}

export default Card;
