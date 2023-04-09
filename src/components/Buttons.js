import React, { Component } from "react";
import Panel from "./Panel";
import { FaBackspace } from "react-icons/fa";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { panelText: "", panelAns: " " };
  }

  inputNum = (event) => {
    let text = event.target.textContent;
    this.setState((prevState) => ({ panelText: prevState.panelText + text }));

    try {
      let ans = this.state.panelText + text;
      ans = ans.replace(/x/g, "*");
      this.setState({ panelAns: eval(ans) });
    } catch (err) {
      console.log(err);
    }
  };

  clearInput = () => {
    this.setState({ panelText: "", panelAns: "" });
  };

  backInput = () => {
    this.setState({
      panelText: this.state.panelText.slice(0, -1),
    });
    try {
      this.setState({
        panelAns: eval(this.state.panelText.slice(0, -1)),
      });
    } catch (err) {
      console.log(err);
    }
  };

  equalNums = () => {
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
        <div className="top-buttons-container">
          <div onClick={this.inputNum} className="top-buttons">
            ()
          </div>
          <div onClick={this.clearInput} className="top-buttons">
            C
          </div>
          <div onClick={this.backInput} className="top-buttons">
            <FaBackspace />
          </div>
        </div>
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
