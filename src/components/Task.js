import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '../styles'
import {Text} from 'react-native';

const Task = ({ onClick, completed, text }) => (
  <Text
    style={completed ? styles.taskTextCompleted : styles.taskText}
    onPress={onClick}
  >
    {text}
  </Text>
)

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Task
