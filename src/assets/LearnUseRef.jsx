import React, { useRef, useState } from 'react'

const LearnUseRef = () => {

    const [name, setName] = useState('')
    const refElement = useRef('')
    console.log(refElement)

    const clearText = () => {
        setName("")
        refElement.current.focus()
    }
  return (
    <>
     <h1>Learn useRef</h1>
     <input type="text" ref={refElement} value={name}  onChange={(e)=>setName(e.target.value)}/>
     <button onClick={clearText}>Clear</button>
    </>
  )
}

export default LearnUseRef