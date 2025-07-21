
const LearnMap = () => {
    const names = [1,2,3,4,5,6,7,8,9,10]

  return (
    <>
      <h1>Map Function</h1>
      <ul>
        {
           names.map((name, index) => {
            return(<li key={index}> {name} </li>)
           }) 
        }
      </ul>
    </>
  )
}

export default LearnMap