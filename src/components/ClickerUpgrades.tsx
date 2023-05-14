import "../styles/upgrades.css";

interface Upgrade {
  cost: number;
  incrementor: number;
  key: number;
}

interface UpgradesProps {
  count: number;
  incrementor: number;
  setIncrementor: (count: number) => void;
  setCount: (count: number) => void;
}

function Upgrades(props: UpgradesProps) {
  const count = props.count;
  const upgradeTiers: Upgrade[] = [
    { cost: 10, incrementor: 1, key: 1 },
    { cost: 100, incrementor: 10, key: 2 },
    { cost: 1000, incrementor: 25, key: 3 },
    { cost: 10000, incrementor: 100, key: 4 },
  ];

  function upgradeIncrementor(upgradeCost: number, incrementor: number) {
    if (count >= upgradeCost) {
      props.setIncrementor(props.incrementor + incrementor);
      props.setCount(count - upgradeCost);
    }
  }

  return (
    <div>
      {upgradeTiers.map((tier) => {
        return (
          <button
            key={tier.key}
            onClick={() => upgradeIncrementor(tier.cost, tier.incrementor)}
          >
            Upgrade Button ({tier.cost})
          </button>
        );
      })}
    </div>
  );
}

export default Upgrades;
