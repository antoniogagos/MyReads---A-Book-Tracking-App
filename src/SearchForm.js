import React, { Component } from 'react'


class SearchForm extends Component {

  state = {
    query: ''
  }

  onChangeQuery = (evt) => {
    const query = evt.target.value;
    this.setState({ query });
    this.props.onChangeQuery({ query });
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search by title or author"
        value={this.state.query}
        onChange={this.onChangeQuery}
      />
    )
  }
}

export default SearchForm;