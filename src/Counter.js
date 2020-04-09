import React, { useState, useEffect, useRef } from 'react';

// custom hook for reading/writing state to locla storage
const useLocalStorage = (initialState, key) => {
  const get = () => {
    // get the item by the key ie {count: {value: 1}}
    const storage = localStorage.getItem(key);
    // return parsed items value or initial state
    if (storage) return JSON.parse(storage).value;
    return initialState;
  };

  const [value, setValue] = useState(get()); // set initial values
  // hooks for updating on value changes
  // set item {count: value: 0}
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);

  return [value, setValue];
};

const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, 'count');
  // Create a ref that carries over....
  const countRef = React.useRef();

  // Set the count ref's current property to be the count
  console.log(countRef.current); //log here BEFORE we reset it on the render
  countRef.current = count;

  const increment = () => {
    setCount((c) => {
      return c + 1;
    });
  };

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="Counter">
      <p>Current count {countRef.current}</p>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
