import  {useContext} from 'react'
import { StockContex, UserContext } from '../App'

const ChildC = () => {

    const stockData = useContext(StockContex)
    const userData = useContext(UserContext)
  return (
     <>  
     {/* ----context API-----😒 */}
    {/* consumer can't accept more than one parameter
    <StockContex.Consumer>
        {
            ({stock,price}) => {
                return(
                   <UserContext.Consumer>
                    {({user})=>{
                        return(
                            <>
                        <h2>User: {user.name}</h2>
                        <h2>User: {user.isLoggedin}</h2>
                        <h2>ChildC - {stock} : {price} </h2>
                            </>
                        )
                    }}
                   </UserContext.Consumer>
                )
            }
        }
    </StockContex.Consumer> */}

    {/* -----useContext Hook--👌 */}
    <h2>ChildC - {stockData.stock}</h2>
    <h2>ChildC - {userData.user.name}</h2>
    <h2>ChildC - {userData.user.isLoggedin}</h2>
    </>
  )
}

export default ChildC