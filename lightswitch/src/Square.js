import React, { Component } from 'react'
import "./App.css"

class Square extends Component{
    constructor(props){
        super(props)
        this.state = {
            switch: false,
            color: "white"
        }
    }

    printChange = () => {
        if (this.state.switch === false){
            return "Off"
        } else if (this.state.switch === true){
            return "On"
        }
    }

    handleChange = () => {
        let newSwitch = false
        let newColor = "white"
        if (this.state.switch === false){
            newSwitch = true;
            newColor = "yellow"
        } else if (this.state.switch === true){
            newSwitch = false;
            newColor = "white"
        }
        this.setState({switch: newSwitch, color: newColor});
    }

  render(){
    return(
        <div id="buttonLayout">
            <button
                id="physicalButton"
                className = {{ yellowBackground: this.state.color === "yellow", blueBackground: this.state.color === "white"

                }}
                style={{backgroundColor: this.state.color}}
                onClick ={this.handleChange}
            >
                {this.printChange()}
            </button>
        </div>
    )
  }
}
export default Square
