import React from 'react'

// const h2Element =  React.createElement('h2', null, 'Learn JSX');
const LearnJSX = () => {
    const stoke = "Apple Inc";
    const test={}
    
  return (
    <> 
      <h1>Jsx</h1>
      <h2>Price: {10 + 10}</h2>
      <h2>Stok Name: {stoke}</h2>
      <h2 className="bg-success">Class</h2>
      <h2 className={test}>Dynamic class</h2>
    </>
    
  )
}

export default LearnJSX