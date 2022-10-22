import React, { Component } from 'react'

export class Header extends Component {
  render() {
    const toDoList = this.props.toDoList
    const doneTask =  toDoList.filter((item) => {
      return item.done
    })

    const info = `${toDoList.length - doneTask.length} осталось, ${doneTask.length}`

    return (
      <div className='header'>
        <h1 className="header-title">Список дел</h1>
        <span className="header-desc">{info}</span>
      </div>
    )
  }
}

export default Header