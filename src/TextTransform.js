
// 3) write class Component 
//     with render method display 
// 	1 textField and 2 Buttons
// 			upper case , small case 
// 	when you click the button display output 
// 	in console in UPPERCASE / lowercase 
//     (use event handling )


import React, { Component } from 'react';

class TextTransform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  toUpperCase = () => {
    console.log(this.state.text.toUpperCase());
  };

  toLowerCase = () => {
    console.log(this.state.text.toLowerCase());
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter text"
          onChange={this.handleChange}
        />
        <button onClick={this.toUpperCase}>UPPER CASE</button>
        <button onClick={this.toLowerCase}>lower case</button>
      </div>
    );
  }
}

export default TextTransform;
