import React from 'react'
import todoApp from '../reducers'
import Header from './Header'
import AddTask from '../containers/AddTask'
import VisibleTasksList from '../containers/VisibleTasksList'
import FilterLinks from '../containers/FilterLinks'
import { addTask, toggleTask, setVisibilityFilter } from '../actions'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { styles } from '../styles'
import { View, Text } from 'react-native'

const store = createStore(todoApp)

function handleAddTaskClicked(name) {
  if(!name) {
    return;
  }
  store.dispatch(addTask(name))
}

function handleFilterClicked(name) {
  if(!name) {
    return;
  }
  store.dispatch(setVisibilityFilter(id))
}

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <AddTask
        onAddTaskClicked={(name) => handleAddTaskClicked(name)}
      />
      <VisibleTasksList/>
      <FilterLinks />
    </View>
  </Provider>
)

export default App
