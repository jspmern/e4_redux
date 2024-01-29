import {createStore} from 'redux'
import { countReducer } from './reducer/counterReducer'
 

export let store= createStore(countReducer)