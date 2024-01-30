import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Todo() {
    let { text, todo, edit } = useSelector((item) => {
        return item.todo
    })
    console.log(todo)

    let dispatch = useDispatch()
    //this is for the handling the text
    function textHandler(e) {
        dispatch({ type: "SET", payload: e.target.value })
    }
    //this handler for add data inot array
    function submitHandler()
    {
        dispatch({type:"SUBMIT"})
    }
    //this is for delete
    function deleteHandler(id)
    {
         dispatch({type:"DEL",payload:id})
    }
    //this is for the edit handler
    function editHandler(id)
    {
        dispatch({type:"EDIT",payload:id})
    }
    return (
        <div className="container">
            <div className="row justify-content-start align-items-center">
                <div className="col">
                    <h1 className='m-3'>TODO</h1>
                    <hr />
                    <input type='text' placeholder='enter your text' onChange={textHandler} value={text} />
                    <button className='btn btn-primary' onClick={submitHandler}>ADD</button>
                    <hr />

                </div>
            </div>
            <div className="row d-flex justify-content-start">
                {todo.length==0 && <h1 className='text-center'>no data</h1>}
                {todo.length>0 && todo.map((item)=>{
                    return  (
                        <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h6>{item.text}</h6>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-primary' onClick={()=>{
                                    editHandler(item.id)
                                }}>edit</button>
                                <button className='btn btn-danger' onClick={()=>{
                                    deleteHandler(item.id)
                                }}>delete</button>
                            </div>
                        </div>
                    </div>
                    )
                })}
               
            </div>
        </div>
    )
}

export default Todo