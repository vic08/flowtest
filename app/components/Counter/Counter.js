// @flow

import React, {Component} from 'react';
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../../actions';
import type {State} from '../../reducers/index'


type Props = {
  dispatch: (action: Object) => void,
  counterValue: number
}

class Counter extends Component<Props> {

  incrementCounter(value: number): void {
    this.props.dispatch(incrementCounter(value))
  }

  decrementCounter(value: number): void {
    this.props.dispatch(decrementCounter(value))
  }

  render() {
    return (
      <div className="counter">
        <h1>Counter</h1>

        <div className="vlaue">
          {this.props.counterValue}
        </div>

        <div className="action-buttons">
          <button onClick={this.incrementCounter.bind(this, 3)}>Increment value</button>
          <button onClick={this.decrementCounter.bind(this, 4)}>Decrement counter</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state: State): Object {
  return {counterValue: state.counterValue};
}

export default connect(mapStateToProps)(Counter);
