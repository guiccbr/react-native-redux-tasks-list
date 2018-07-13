import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '../styles'
import { VisibilityFilters, VisibilityFiltersText } from '../actions'
import { Text, View, TouchableOpacity } from 'react-native';

const FooterButtons = (activeFilter, onFilterClicked) => {
  return Object.keys(VisibilityFilters).map((filter) => {
    const buttonStyle = (VisibilityFilters[filter] === activeFilter) ? styles.footerButtonActive : styles.footerButton;
    return (
      <View key={filter} style={styles.footerButtonContainer}>
        <TouchableOpacity style={buttonStyle} onPress={() => onFilterClicked(VisibilityFilters[filter])} >
          <Text style={styles.footerButtonText} >{VisibilityFiltersText[filter].toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    )});
};

const Footer = ({ activeFilter, onFilterClicked }) => (
  <View style={styles.footer}>
    {FooterButtons(activeFilter, onFilterClicked)}
  </View>
)

Footer.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onFilterClicked: PropTypes.func.isRequired,
}

export default Footer
