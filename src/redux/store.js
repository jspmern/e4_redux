import { createStore } from 'redux'

import { rootReducer } from './reducer'


export let store = createStore(rootReducer)