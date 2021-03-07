import React from "react"
import WatchList from "../WatchList"
import RepCounter from "../RepetitionExercise"
import GroceryList from "../GroceryList"

const MENU = "menu"
const WATCH_SCREEN = "watch_screen"
const REP_SCREEN = "rep_screen"
const SHOP_SCREEN = "shop_screen"

export default class StartScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentScreen: MENU}
  }
  render() {

    let screen
    switch (this.state.currentScreen) {
      case MENU:
        screen = (
        <>
          <h2>Welcome to the App Zone!</h2>
          <h3>Select A Feature:</h3>
          <ul>
                <li>
                  <button onClick={() => this.setState({currentScreen: WATCH_SCREEN})}>Going To Watch List</button>
                </li>
                <li>
                  <button onClick={() => this.setState({currentScreen: REP_SCREEN})}>Repetition Exercise</button>
                </li>
                <li>
                  <button onClick={() => this.setState({currentScreen: SHOP_SCREEN})}>Simple Grocery List</button>
                </li>
          </ul>
        </>
      )
      break
    case WATCH_SCREEN:
      screen = (
      <>
        <WatchList {...this.state.selectedItem}></WatchList>
        <button onClick={() => this.setState({currentScreen: MENU})}>Return</button>
      </>
      )
      break;
    case REP_SCREEN:
      screen = (
      <>
        <RepCounter {...this.state.selectedItem}></RepCounter>
        <button onClick={() => this.setState({currentScreen: MENU})}>Return</button>
      </>
      )
      break;
    case SHOP_SCREEN:
      screen = (
      <>
        <GroceryList {...this.state.selectedItem}></GroceryList>
        <button onClick={() => this.setState({currentScreen: MENU})}>Return</button>
      </>
      )
      break;
  }
    return screen
  }
}
