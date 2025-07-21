import { useState } from 'react';

const LearnUseState = () => {
    const [num, setNum] = useState(5);
    const [flag, setFlag] = useState(false);

    //useState with Object
    const  [stockPrice, setStockPrice] = useState({stock:'Apple', price: 100});
    console.log(stockPrice);

    const clickHandler = () => {
        setFlag(true)
        setNum(num + 10)
    }

    const updateStockPrice = () =>{
        setStockPrice({...stockPrice, price : 200})//Change only specific variable
    }
  return (
    <>
    <p>Number: {num}</p>
    <button onClick={clickHandler}>{flag ? "Already Clicked" : "Change the Number"}</button>
    <hr />
    <p>Stock: {stockPrice.stock} - Price: {stockPrice.price}</p>
    <button onClick={updateStockPrice}>UpdateStock Price</button>
    </>
  )
}

export default LearnUseState