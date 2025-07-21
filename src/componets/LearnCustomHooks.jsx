import React from 'react'
import UserCounter from '../hooks/useCouter'


const LearnCustomHooks = () => {

  const { count, increment, decrement, reset } = UserCounter();//custom hool

  return (
    <>
      <h1>Learn Custom Hooks</h1>
      <h1>Count {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default LearnCustomHooks