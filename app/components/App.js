// @flow

import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Counter from './Counter/Counter'

type Props = {}

class App extends Component<Props> {
  render() {
    return(
      <div className="container">
        <h1>test app</h1>
        <Counter/>
      </div>
    )
  }
}


export default App