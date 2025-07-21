import React, { useRef, useState } from 'react'

const LearnUseRef = () => {

    const [name, setName] = useState('')
    const refElement = useRef('')
    const previousName = useRef('')
    console.log(refElement)

    const clearText = () => {
        setName("")
        refElement.current.focus()
    }

    const handelInput = (e) => {
        previousName.current = name
        setName(e.target.value)
    }
  return (
    <>
     <h1>Learn useRef</h1>
     <input type="text" ref={refElement} value={name}  onChange={handelInput}/>
     <button onClick={clearText}>Clear</button>
        <h2>Previous Name: {previousName.current}</h2>
    </>
  )
}

export default LearnUseRef