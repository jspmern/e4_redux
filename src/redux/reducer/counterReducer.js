let initalValue={inc:1,dec:10}
export function countReducer(state=initalValue,action)
{
   if(action.type=="INC")
   {
    return {...state,inc:state.inc+action.payload}
   }
   else if(action.type=="DEC")
   {
    return {...state,dec:state.dec-1}
   }
    return state
}