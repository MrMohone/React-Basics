
const LearnConditionalRendering = () => {

    const isLoggedin = true
    const status = false
  return (
    <>
      <h1>Conditional Rendering</h1>
      { isLoggedin ? (<h2>Welcome User</h2>) : ( <h2>Please Login</h2>) }

      {status && <h2>Success</h2>}

    </>
  )
}

export default LearnConditionalRendering