import { createStore , combineReducers } from 'redux'
import {home} from './reducers/home'
import {dashboard} from './reducers/dashboard'

var r = combineReducers({home,dashboard});
export const store = createStore(r);