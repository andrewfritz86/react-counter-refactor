import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [shmee, setShmee] = useState('andy');

  const increment = () => {
    // We can pass a func to our updating functino, it takes the state
    // var that it's bound to as its first arg, note that it doesn't get props for free
    setCount((fart) => fart + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const capName = () => {
    setShmee((oldName) => oldName.toUpperCase());
  };

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <p>{shmee}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={capName}>Cap name</button>
      </section>
    </div>
  );
};

export default Counter;
