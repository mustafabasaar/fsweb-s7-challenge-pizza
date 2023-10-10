import React from "react";

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
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Artır (+)</button>
      <button onClick={handleDecrement} disabled={count === 1}>
        Azalt (-)
      </button>
    </div>
  );
}

export default Counter;
