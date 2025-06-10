
//tolearn how class components will work with lifecycle methods so that we can learn how the same can be done with useEffect hook in functional components.

import React, { Component } from 'react'

 class ClassCounter1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    document.title= `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }
  
  render() {
    return (
      <div>
        <button onClick={() => this.setState({count: this.state.count +1})}>Click {this.state.count} times</button>
        
      </div>
    )
  }
}

export default ClassCounter1

