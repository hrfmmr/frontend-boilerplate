import { connect } from 'react-redux'

import { increment, decrement } from '../actions/counter'
import Counter from '../components/Counter'

function mapStateToProps(state) {
  return {
    count: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleIncrement: () => {
      dispatch(increment())
    },
    handleDecrement: () => {
      dispatch(decrement())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
