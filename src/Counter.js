import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [shmee, setShmee] = useState('andy');

  useEffect(() => {
    // Use effect is intended to handle any side effects of a render method
    // If we think of functional components as pure, they should simply take
    // props or state changes and render them in a a pure way. Anything else that might
    // need to happen at the same time is a side effect, and should be handled here
    console.log('running use effect');
    // second arg is a list of dependencies. If anything in the list changes, run the hook
    // empty list = run on mount
    document.title = count;
  }, [count]);

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
