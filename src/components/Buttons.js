import React, { Component } from "react";
import Panel from "./Panel";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { panelText: "", panelAns: "" };
  }

  inputNum = (event) => {
    const text = event.target.textContent;
    this.setState((prevState) => ({ panelText: prevState.panelText + text }));

    try {
      const ans = this.state.panelText + text;
      this.setState({ panelAns: eval(ans) });
    } catch (err) {
      console.log(err);
    }
  };

  equalNums = (event) => {
    const ans = this.state.panelAns;
    this.setState({ panelText: ans, panelAns: "" });
  };

  render() {
    return (
      <>
        <Panel
          panelText={this.state.panelText}
          panelAns={this.state.panelAns}
        />
        <div className="buttons-container">
          <div onClick={this.inputNum} className="buttons">
            7
          </div>
          <div onClick={this.inputNum} className="buttons">
            8
          </div>
          <div onClick={this.inputNum} className="buttons">
            9
          </div>
          <div onClick={this.inputNum} className="buttons">
            4
          </div>
          <div onClick={this.inputNum} className="buttons">
            5
          </div>
          <div onClick={this.inputNum} className="buttons">
            6
          </div>
          <div onClick={this.inputNum} className="buttons">
            1
          </div>
          <div onClick={this.inputNum} className="buttons">
            2
          </div>
          <div onClick={this.inputNum} className="buttons">
            3
          </div>
          <div onClick={this.inputNum} className="buttons">
            0
          </div>
          <div onClick={this.inputNum} className="buttons">
            .
          </div>
          <div onClick={this.equalNums} className="buttons">
            =
          </div>
        </div>

        <div className="side-buttons-container">
          <div onClick={this.inputNum} className="side-buttons">
            +
          </div>
          <div onClick={this.inputNum} className="side-buttons">
            -
          </div>
          <div onClick={this.inputNum} className="side-buttons">
            /
          </div>
          <div onClick={this.inputNum} className="side-buttons">
            x
          </div>
        </div>
      </>
    );
  }
}

export default Buttons;
