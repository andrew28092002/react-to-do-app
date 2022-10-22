import React, { Component } from 'react'

export class Input extends Component {
  render() {
    return (
        <input onChange={this.props.searchText}
               id='search-text'
               type="text"
               placeholder="введите фразу для поиска" 
               className="form-control me-2">
        </input>
    )
  }
}

export default Input