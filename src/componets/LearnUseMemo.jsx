import { useMemo, useState } from "react";

const LearnUseMemo = () => {
     const [count, setCount] = useState(0);
     const [number, setNumber] = useState(1000)

     const increaseCount = () => {
        if(count === 10){
            setNumber(999)
        }
        setCount(count + 1);
    }

    //useMemo save returned value, then it will give that when function called anytime
    const setOfNumbers = useMemo(() => {
        let sum = 0;
        for(let i=1; i<=number; i++){
            sum += i;
        }
        return sum;
     }, [number])//if only does exist change in "number", the function run again b/c the functiion there return diffrent value
    
    console.log(`Sum of number from 1 to ${number}`, setOfNumbers)

  return (
    <>
    <h1>Conut: {count}</h1>
    <button onClick={increaseCount}>Increase  Count</button>
    </>
  )
}

export default LearnUseMemo