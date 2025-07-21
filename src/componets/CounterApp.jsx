import React from 'react'

const CounterApp = () => {
  const [count, setCount] = React.useState(0);

  const increaseCount = () =>{
    setCount(count + 1);
  } 
  const decreaseCount = () =>{
    setCount(count - 1);
  } 
  const resetCount = () =>{
    setCount(0);
  } 

  return (
    <>
    <h1>Conuter App</h1>
    <h2>Count: {count} </h2>
    <button onClick={increaseCount}>Increment</button><br />
    <button onClick={decreaseCount}>Decrement</button><br />
    <button onClick={resetCount}>Reset</button>
    </>
  )
}

export default CounterApp