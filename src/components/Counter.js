import React from "react";
import "./Counter.css";

function Counter(props) {
  const { count, setCount } = props;

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <button onClick={handleIncrement}> +</button>
      <p className="counter-display">{count}</p>
      <button onClick={handleDecrement} disabled={count === 1}>
        -
      </button>
    </div>
  );
}

export default Counter;
