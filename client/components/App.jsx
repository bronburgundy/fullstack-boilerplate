import React from 'react'
import {getKicks} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      kicks: []
    }
  }

  componentDidMount () {
    getKicks()
      .then(kicks => {
        this.setState({kicks})
      })
  }

  render () {
    return (
      <div>
        <h1>Kicks ow</h1>
        <ul>
          {this.state.kicks.map(kick => {
            return <li key={kick.brand}>{kick.brand}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App
