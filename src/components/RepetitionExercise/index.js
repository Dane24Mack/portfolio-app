import React from "react"

export default class RepCounter extends React.Component {
  constructor(props) {
  super(props)
  this.state = { value: 0 }
  }
  addOne() {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }))
  }
  resetNum() {
    this.setState((prevState) => ({
      value: prevState.value = 0,
    }))
  }
  render() {
    return (
      <>
        <h2>My Repetition Exercise</h2>
        <p>Reps: {this.state.value}</p>
        <button onClick={() => this.addOne()}>Complete Rep</button>
        <button onClick={() => this.resetNum()}>Reset</button>
      </>
    )
  }
}
