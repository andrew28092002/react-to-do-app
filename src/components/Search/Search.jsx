import React, { Component } from 'react'
import Input from './Input.jsx'
import StatusBar from './StatusBar.jsx'


export class Search extends Component {
  render() {
    const {searchText, changeStatus} = this.props

    return (
      <div className='search' role='group'>
          <Input searchText={searchText}/>
          <StatusBar changeStatus={changeStatus}/>
      </div>
    )
  }
}

export default Search