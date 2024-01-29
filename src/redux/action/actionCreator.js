import { DEC, INC } from "./actionconstant";

export function incrementHandler(data)
{
   return {type:INC,payload:data}
}
export function decrementHandler()
{
    return {type:DEC}
}