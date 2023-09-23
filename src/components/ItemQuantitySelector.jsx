import React from 'react';
import { useState } from 'react';

const ItemQuantitySelector=()=> {
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn me-2 btn-outline-primary"  onClick={decrease}>-</button>
      <button className="btn me-2 btn-outline-primary"  onClick={increase}>+</button>
    </div>
  );
};
export default ItemQuantitySelector;