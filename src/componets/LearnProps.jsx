import React from 'react'

// const LearnProps = (props) => {
//   return (
//     <>
//       <h3>Stok Name: {props.stock}</h3>
//       <h3>Stok Name: {props.price}</h3>
//     </>
//   )
// }

const LearnProps = ({stock, price}) => {
  return (
    <>
      <h3>Stok Name: {stock}</h3>
      <h3>Stok Name: {price}</h3>
    </>
  )
}

export default LearnProps