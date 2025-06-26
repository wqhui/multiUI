import { combineReducers } from 'redux'
import counter from './counter'
import designer from './designer'

export default combineReducers({
  counter,
  designer
})
