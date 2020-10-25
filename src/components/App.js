import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleright = this.handleright.bind(this);
  }

  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }
  handleright(event) {
    let prevPos = this.state.ballPosition.left.slice(0, -2);
    let curPos = Number(prevPos) + 5;
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState({
        ballPosition: { left: `${curPos}px` }
      });
    }
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    document.body.addEventListener("keydown", this.handleright);
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
