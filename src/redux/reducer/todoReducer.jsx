let intialState={todo:[],text:'',edit:''}
function todoReducer(state=intialState,action)
{
     switch (action.type) {
        case "SET":
             return{...state,text:action.payload} 
        case "SUBMIT":
            if(state.text)
            {
                if(state.edit)
                {
                    let editData=state.todo.map((item)=>{
                        if(item.id===state.edit.id)
                        {
                            let newtext=state.text
                             return {...item,text:newtext}
                        }
                          else{
                            return item
                        }
                    })
                    return {...state,todo:editData,edit:'',text:''}
                }
                else{
                    let obj={id:Math.trunc(Math.random()*10000),
                        text:state.text }
               return {...state,todo:[...state.todo,obj],text:''}
                }
                 
            } 
           
            else{
                return state
            }
            case "DEL":
                let temp=[...state.todo]
                temp=temp.filter((item)=>{
                    return item.id !=action.payload
                })
                return{...state,todo:temp}
           case "EDIT":
            let findData=state.todo.find((item)=>{
                return item.id==action.payload
            })
            return {...state,edit:findData,text:findData.text}
        default:
             return state
     }
}
export default todoReducer