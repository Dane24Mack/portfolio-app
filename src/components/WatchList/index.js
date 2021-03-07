import React from 'react'

let watchList = [
    {
       id: 1,
       completed: true, 
       description: "The Mandalorian - Season 2"
    },
    {
       id: 2,
       completed: false, 
       description: "Cobra Kai - Season 3"
    },
    {
       id: 3,
       completed: false, 
       description: "Chaos Walking"
    },
    {
       id: 4,
       completed: true, 
       description: "Love and Monsters"
    },
    {
       id: 5,
       completed: false, 
       description: "WandaVision - Season 1"
    },
    {
       id: 6,
       completed: true, 
       description: "Avatar: The Last Airbender - Season 2"
    },
    {
       id: 7,
       completed: false, 
       description: "Star Wars Rebels - Season 1"
    },
    {
       id: 8,
       completed: true, 
       description: "Ant-Man and the Wasp"
    },
    {
       id: 9,
       completed: true, 
       description: "Jurassic World"
    },
    {
       id: 10,
       completed: true, 
       description: "The Goonies"
    },
 ]
 export default class WatchList extends React.Component {
    constructor(props) {
       super(props)
       let inputRef = React.createRef()
       let checkRef = React.createRef()
       let filterRef = React.createRef()
       this.state = {watchList, curId: watchList.length+1, inputRef, checkRef, filterRef, filtered: false}
    }
    watchedItem = (itemId) => {
       this.setState((prevState) => {
          let prevList = [...prevState.watchList]
          let itemIndex = prevList.findIndex((item) => item.id == itemId)
          prevList[itemIndex] = {...prevList[itemIndex], completed: !prevList[itemIndex].completed,}
          return {watchList: [...prevList]}
       })
    }
    handleKeyPress = (event) => {
       console.log("Pressed")
       console.log(event.key)
       if (event.key == "Enter") {
          this.addItem()
       }
    }
    addItem = () => {
       let prevValue = this.state.inputRef.current.value
       this.setState(prevState=>({
          watchList: [...prevState.watchList,
             {completed: false, description: prevValue, id: prevState.curId}],
          curId: prevState.curId+1
       }))
       this.state.inputRef.current.value = ""       
    }
    render() {
       let watchList = this.state.watchList
       if (this.state.filtered) {
          watchList = watchList.filter(item=>!item.completed)
       }         
         watchList = watchList.map((item) => (
          <div key={item.id}>
             <label>
                <input ref={this.state.checkRef} type= "checkbox" onChange={() => this.watchedItem(item.id)} defaultChecked={item.completed}></input>
                <span style={item.completed ? {textDecoration: "line-through"} : undefined}>{item.description}</span>
             </label>
          </div>
         )) 
       return ( 
       <>
          <h1>To Watch List - Film &amp; TV</h1>
             <label>
                <input ref={this.state.filterRef} type= "checkbox" onChange={() => this.setState((prev) => ({filtered: !prev.filtered}))} defaultChecked={false}></input>
                Filter By Watch Status
             </label>
                <hr></hr>
          <div style={{padding: "5px"}}>
             {watchList}
          </div>
                <hr></hr>
             <input onKeyPress={(event) => this.handleKeyPress(event)} ref={this.state.inputRef}></input>
             <button onClick={() => this.addItem()}>Add New Item</button>
       </>
       )
    }
 }

