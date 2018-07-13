import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import { styles } from '../styles';
import { FlatList, Text } from 'react-native';

const TasksList = ({ tasks, onTaskClicked }) => {
  return (
  <FlatList style={styles.tasksList}
    data={tasks}
    renderItem={({item, key}) => (
      <Task
        text={item.text}
        completed={item.completed}
        onClick={() => {
          onTaskClicked(item.id)
        }}
      />
    )}
    keyExtractor={item => item.id.toString()}
  />
  )
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTaskClicked: PropTypes.func.isRequired
}

export default TasksList
