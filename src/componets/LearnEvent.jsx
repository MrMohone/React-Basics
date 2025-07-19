import React from 'react'

const LearnEvent = () => {
    const handleClick = () => {
        alert("Button Clicked!");
        console.log("Button Clicked!");
    }
    
    const handleClickAgain = (param) => {
        console.log(param);
        }
    

  return (
    <>
     <button onClick={handleClick}>Click Here</button>
     <button onClick={()=>handleClickAgain("Clicked again")} >Clicke Again</button>
    </>
  )
}

export default LearnEvent