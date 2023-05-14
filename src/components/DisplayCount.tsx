interface DisplayCountProps {
  count: number;
}

function DisplayCount(props: DisplayCountProps) {
  return (
    <div>
      <p>{props.count}</p>
    </div>
  );
}

export default DisplayCount;
