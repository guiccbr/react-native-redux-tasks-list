import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native';
import { styles } from '../styles'

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      Tasks List
    </Text>
  </View>
)

export default Header;
