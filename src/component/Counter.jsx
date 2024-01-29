import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementHandler, incrementHandler } from '../redux/action/actionCreator'
let style1= {display:'flex', justifyContent:"center",alignItems:"center"}
function Counter() {
  let  {inc,dec}=  useSelector((item)=>{
        return item
    })
  let dispatch=  useDispatch()
    function incHandler()
    {
       dispatch(incrementHandler(5))
    }
    function decHandler()
    {
       dispatch(decrementHandler())
    }
 
  return (
   <>
   <div style={{height:"100vh",width:"100%"}}>
   <div style={style1}>
       <h6>INC:{inc}</h6>
       <h6>DEC:{dec}</h6>
       <hr/>
       <button onClick={incHandler}>INC</button>
       <button onClick={decHandler}>DEC</button>
   </div>
   </div>
   
   </>
  )
}

export default Counter