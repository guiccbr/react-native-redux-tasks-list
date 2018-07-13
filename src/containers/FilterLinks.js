import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Footer from '../components/Footer'

const mapStateToProps = state => {
  return {
    activeFilter: state.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onFilterClicked: (filter) => dispatch(setVisibilityFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
