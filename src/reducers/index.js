import { combineReducers } from 'redux'
import tasks from './tasks'
import visibilityFilter from './visibilityFilters'

export default combineReducers({
  tasks,
  visibilityFilter
})
