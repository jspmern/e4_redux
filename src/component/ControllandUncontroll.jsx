import React, { useRef, useState } from 'react'

function ControllandUncontroll() {
    console.log('***********************************************')
   let [input,setInput]= useState('')
   let username=useRef()
   function setTextHandler(e)
   {
       setInput(e.target.value)
   }
   //this is for the submit handler
   function submitHandler()
   {
    username.current.focus()
    console.log(username.current.value)
   }
  return (
    <>
    <input type="text" placeholder='controll' onChange={setTextHandler} value={input}/>
    <br/>
    <input type='text' placeholder='uncontroll' ref={username}/>
    <button onClick={submitHandler}>submit</button>
    <h1>controll {input}</h1>
    <h1>uncontroll:</h1>
    </>
  )
}

export default ControllandUncontroll