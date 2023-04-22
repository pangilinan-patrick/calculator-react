import React, { Component } from "react";
import Panel from "./Panel";
import { FaBackspace } from "react-icons/fa";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { panelText: "", panelAns: " ", parentheses: 0 };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keybDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keybDown);
  }

  keybDown = (event) => {
    const key = event.key;
    if ((key >= "0" && key <= "9") || key === ".") {
      this.keybInputNum(key);
    } else if (key === "/" || key === "+" || key === "-") {
      this.keybInputNum(key);
    } else if (key === "x" || key === "*") {
      this.keybInputNum("x");
    } else if (key === "r" || key === "c") {
      this.clearInput();
    } else if (key === "=" || key === "Enter") {
      this.equalNums();
    } else if (key === "Backspace") {
      this.backInput();
    }
  };

  keybInputNum = (text) => {
    const pattern = /(\+\+|--|\.\.|\*\*|\/\/|xx)/g;
    this.setState((prevState) => {
      if (!pattern.test(prevState.panelText + text))
        return { panelText: prevState.panelText + text };
    });

    try {
      let ans = this.state.panelText + text;
      ans = ans.replace(/x/g, "*");
      this.setState({ panelAns: eval(ans) });
    } catch (err) {
      console.log(err);
    }
  };

  inputNum = (event) => {
    let text = event.target.textContent;
    const pattern = /(\+\+|--|\.\.|\*\*|\/\/|xx)/g;
    this.setState((prevState) => {
      if (!pattern.test(prevState.panelText + text))
        return { panelText: prevState.panelText + text };
    });

    try {
      let ans = this.state.panelText + text;
      ans = ans.replace(/x/g, "*");
      this.setState({ panelAns: eval(ans) });
    } catch (err) {
      console.log(err);
    }
  };

  inputParenthesis = () => {
    if (
      this.state.panelText.slice(-1) === "(" ||
      this.state.panelText.slice(-1) === ""
    ) {
      this.setState((prevState) => ({
        panelText: prevState.panelText + "(",
        parentheses: this.state.parentheses + 1,
      }));
    } else if (this.state.parentheses > 0) {
      this.setState((prevState) => ({
        panelText: prevState.panelText + ")",
        parentheses: this.state.parentheses - 1,
      }));
      console.log(this.state.parentheses);
    } else {
      this.setState((prevState) => ({
        panelText: prevState.panelText + "(",
        parentheses: this.state.parentheses + 1,
      }));
    }
  };

  clearInput = () => {
    this.setState({ panelText: "", panelAns: "", parentheses: 0 });
  };

  backInput = () => {
    if (this.state.panelText.slice(-1) === "(") {
      this.setState(() => ({
        parentheses: this.state.parentheses - 1,
      }));
      // console.log(this.state.parentheses);
    } else if (this.state.panelText.slice(-1) === ")") {
      this.setState(() => ({
        parentheses: this.state.parentheses + 1,
      }));
      // console.log(this.state.parentheses);
    }
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
    this.setState({ panelText: ans, panelAns: "", parentheses: 0 });
  };

  render() {
    return (
      <>
        <Panel
          panelText={this.state.panelText}
          panelAns={this.state.panelAns}
        />
        <div className="top-buttons-container">
          <div onClick={this.inputParenthesis} className="top-buttons">
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
