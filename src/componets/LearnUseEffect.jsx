import { useState,useEffect } from "react"


const LearnUseEffect = () => {

    const [count, setCount] = useState(0);
    const [randeomNum, setRandomNum] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }
    const generateRadomNum = () => {
        const random = Math.floor(Math.random() * 100);
        setRandomNum(random);
    }

    useEffect(() => {
        //useEffect logic
        console.log("UseEffect called");

        return (()=>{
            console.log("Cleanup function called")
        })
    }, [count]);


  return (
    <>
    <h1>Conut: {count}</h1>
    <button onClick={increaseCount}>Increase  Count</button><hr />
    <h1>Random Number: {randeomNum}</h1>
    <button onClick={generateRadomNum}>Generate Random Number</button>
    </>
  )
}

export default LearnUseEffect