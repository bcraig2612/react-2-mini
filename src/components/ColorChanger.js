import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer"
       onChange={ event => this.props.update(event.target.value) } 
       disabled={ this.props.allowEdit === "false" }>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
        <option value="red"> Red </option>
        <option value="pink"> Pink </option>
        <option value="orange"> Orange </option>
        <option value="purple"> Purple </option>
        <option value="brown"> Brown </option>
        <option value="gold"> Gold </option>
        <option value="silver"> Silver </option>
        <option value="teal"> Teal </option>
      </select>
    );
  }
}
