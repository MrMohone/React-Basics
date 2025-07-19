import HelloWorld from "./componets/HelloWorld"
import LearnReact from "./componets/LearnReact"
import LearnJSX from "./componets/LearnJSX"
import LearnProps from "./componets/LearnProps"
import LearnEvent from "./componets/LearnEvent";
import LearnLiftinStategUp from "./componets/LearnLiftinStategUp";

function App() {
 
    // const price = 200;

    const getStock = (data) => {
      console.log(data)
    }

  return (
    <>
    <h2>Learn Component</h2>
    
       {/* <HelloWorld /> */}
      {/*<LearnReact /> */}
      {/* <LearnJSX /> */}
      {/* <LearnProps stock="Apple" price={price}/> */}
      {/* <LearnEvent /> */}
      <LearnLiftinStategUp getStock={getStock}/>
    </>
  )
}

export default App
