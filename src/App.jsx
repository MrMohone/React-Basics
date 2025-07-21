import HelloWorld from "./componets/HelloWorld"
import LearnReact from "./componets/LearnReact"
import LearnJSX from "./componets/LearnJSX"
import LearnProps from "./componets/LearnProps"
import LearnEvent from "./componets/LearnEvent";
import LearnLiftinStategUp from "./componets/LearnLiftinStategUp";
import LearnUseState from "./componets/LearnUseState";
import CounterApp from "./componets/CounterApp";
import LearnUseEffect from "./componets/LearnUseEffect";
import LearnUseMemo from "./componets/LearnUseMemo";
import ChildA from "./componets/ChildA";
import { createContext,useState } from "react";
import LearnUseRef from "./componets/LearnUseRef";
import LearnCustomHooks from "./componets/LearnCustomHooks";
import LearnConditionalRendering from "./componets/LearnConditionalRendering";
import LearnMap from "./componets/LearnMap";
import LearnCss from "./componets/LearnCss";

const StockContex = createContext() 
const UserContext = createContext()
function App() {
 
    // const price = 200;

    // const getStock = (data) => {
    //   console.log(data)
    // }

    // let stock= "Tesla"
    // let price= 200
    // const [user, setUser] = useState({name:'Mohammed', isLoggedin:'Yes'});

  return (
    <>
    {/* <h2>Learn Component</h2> */}
    
       {/* <HelloWorld /> */}
      {/*<LearnReact /> */}
      {/* <LearnJSX /> */}
      {/* <LearnProps stock="Apple" price={price}/> */}
      {/* <LearnEvent /> */}
      {/* <LearnLiftinStategUp getStock={getStock}/> */}

      {/* Hooks .... */}
      {/* <LearnUseState /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      
      {/* <StockContex.Provider value={{stock, price}}>
        <UserContext value={{user, setUser}}>
          <ChildA />
        </UserContext>
      </StockContex.Provider> */}
       
       {/* <LearnUseRef /> */}
       {/* <LearnCustomHooks /> */}
       {/* <LearnConditionalRendering /> */}
       {/* <LearnMap /> */}
       <LearnCss />
    </>
  )
}

export default App
export {StockContex, UserContext}