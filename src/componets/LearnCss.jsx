import '../assets/css/style.css'
const LearnCss = () => {

    const style = {
        container : {
            backgroundColor:'red',
            height:'100px',
            width:'100px'
        },
        h2Text:{
            fontSize:'40px',
            color:'green'
        }
    }
  return (
    <>
    <style>
        {`
        .container{
        background-color:#434;
        height: 100px;
        width: 100px
        }
        `}
    </style>
    {/* InLine CSS */}
    <p style={{color:'red'}}>Hello world Welcome to here</p>

    <div style={style.container}>
    </div>
    <h2 style={style.h2Text}>Test H2 Element</h2><hr />

    {/* Internal CSS */} 
    <div className='container'></div><hr />

    {/* External CSS */}
    <div className='bluebox'></div>
    <h2 className='bluetext'>Test External Css</h2>

    </>
  )
}

export default LearnCss