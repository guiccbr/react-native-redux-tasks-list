import { connect } from 'react-redux'
import { VisibilityFilters, toggleTask } from '../actions'
import TasksList from '../components/TasksList'

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return tasks
    case VisibilityFilters.SHOW_COMPLETED:
      return tasks.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return tasks.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => {
  return {
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskClicked: id => {
      dispatch(toggleTask(id))
    }
  }
}

const VisibleTasksList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList)

export default VisibleTasksList
