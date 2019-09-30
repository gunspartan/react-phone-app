import React from "react";
import "../styles/App.css";
import { Button } from "./Buttons";
import { Input } from "./Input";
import { Call } from "./Call";
import { Backspace } from "./Backspace";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      call: false
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  render() {
    return (
      <div className="App">
        <div className="phone-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>*</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>#</Button>
          </div>
          <div className="row">
            <Call handleCall={() => this.setState({ call: true })}></Call>
            <Backspace
              handleBackspace={() =>
                this.setState({
                  input: this.state.input.slice(0, this.state.input.length - 1)
                })
              }
            ></Backspace>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
