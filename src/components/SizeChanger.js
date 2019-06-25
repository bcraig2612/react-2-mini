import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer" 
      onChange={ event => this.props.update( parseInt(event.target.value) ) } 
      disabled={ this.props.allowEdit === "false" }>
      <option value="15"> 15 </option>
      <option value="16"> 16 </option>
      <option value="17"> 17 </option>
      <option value="18"> 18 </option>
      <option value="19"> 19 </option>
      <option value="20"> 20 </option>
      </select>
    );
  }
}
