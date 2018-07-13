import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '../styles'
import { connect } from 'react-redux'
import { addTask } from '../actions'
import { View, TextInput, Button } from 'react-native'

const AddTask = ({ onAddTaskClicked }) => {
  let input;

  return (
    <View style={styles.addTask}>
      <TextInput
        onChangeText={(text) => input = text}
        placeholder='Task name...'
      />
      <Button
        onPress={() => onAddTaskClicked(input)}
        title='Add Task'
      />
    </View>
  );
}

AddTask.propTypes = {
  onAddTaskClicked: PropTypes.func.isRequired,
}

export default AddTask
