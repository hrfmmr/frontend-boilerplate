/* @flow */
import { connect } from 'react-redux'

import { increment, incrementBy } from '../actions/counter'
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
    handleIncrementBy: () => {
      dispatch(incrementBy(10))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
