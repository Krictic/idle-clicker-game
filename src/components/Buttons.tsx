

interface ButtonProps {
    count: number,
    incremmentor: number,
    handleClick: () => void
}

function Button(props : ButtonProps) {
  const handleClick =  props.handleClick
  const incremmentor = props.incremmentor;
  

  return (
    <div>
      <button onClick={handleClick}>
        Click Me (by {incremmentor})
      </button>
    </div>
  )
}

export default Button;
