import { useState } from "react";


function UserCounter(intialValue=0){
    const [count, setCount] = useState(intialValue);

    const increment = () => {setCount(count + 1)}
    const decrement = () => {setCount(count - 1)}
    const reset = () => {setCount(intialValue)}

    return {count, increment, decrement, reset}
}
export default UserCounter;
