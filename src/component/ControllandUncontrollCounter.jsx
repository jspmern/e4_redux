import React, { createRef, useRef, useState } from 'react'

function ControllandUncontrollCounter() {
    console.log('***************')
    let count=1;
    let count1=useRef(1)
    let count2=createRef(1)
    let [count3,setCount3]=useState(1)
    let [ref,setRef]=useState('')
     function submitHandler()
     {
        // console.log(count)
        // console.log(count1)
        // console.log(count2)
        // console.log(count3)
        // ++count
        // count1.current= ++count1.current
        // count2.current= ++count2.current
        setCount3(count3+1)
        // console.log('normal varible',count)
        // console.log('useRef',count1.current)
        // console.log('createRef',count2.current)
        setRef(count1)
      
     }
  return (
    <div> 
        { console.log(ref===count1)}
    <h1>value with normal varible {count}</h1>
    <h1>value with useRef {count1.current}</h1>
    <h1>value with createRef {count2.current}</h1>
    <h1>value with {count3}</h1>
    <button onClick={submitHandler}>inc</button>
    </div>
  )
}

export default ControllandUncontrollCounter