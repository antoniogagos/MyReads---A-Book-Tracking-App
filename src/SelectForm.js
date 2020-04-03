import React, { Component } from 'react'

class SelectForm extends Component {

  onChangeShelf = (evt) => {
    this.props.onChangeSelect({ selectedShelf: evt.target.value });
  }

  render() {
    return (
      <select onChange={this.onChangeShelf} defaultValue={this.props.defaultSelectedShelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default SelectForm