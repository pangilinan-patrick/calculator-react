import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <>
        <div className="buttons-container">
          <div className="buttons">7</div>
          <div className="buttons">8</div>
          <div className="buttons">9</div>
          <div className="buttons">4</div>
          <div className="buttons">5</div>
          <div className="buttons">6</div>
          <div className="buttons">1</div>
          <div className="buttons">2</div>
          <div className="buttons">3</div>
          <div className="buttons">0</div>
          <div className="buttons">00</div>
          <div className="buttons">.</div>
        </div>
        <div className="side-buttons-container">
          <div className="side-buttons">+</div>
          <div className="side-buttons">-</div>
          <div className="side-buttons">/</div>
          <div className="side-buttons">x</div>
        </div>
      </>
    );
  }
}

export default Buttons;
