import React, { Component } from 'react'

export class ThereTask extends Component {
  constructor(props) {
    super(props)
  
    this.onImportantClick = this.props.onImportantClick.bind(this, this.props.task.id)
    this.onTaskClick = this.props.onTaskClick.bind(this, this.props.task.id)
    this.onDeleteTask = this.props.onDeleteTask.bind(this, this.props.task.id)
    this.value = this.props.task.value
  }


  render() {
    let classNames = 'todo-item'

    if (this.props.task.important) {
      classNames += ' important'
    }

    if (this.props.task.done) {
      classNames += ' done'
    }
    
    return (
      <li className={classNames} >
        <span className="todo-item-text" onClick={this.onTaskClick}>{this.value}</span>
        <div className="btn-group">
          <button className="btn btn-outline-dark btn-sm" onClick={this.onImportantClick}>Важное</button>
          <button className="btn btn-outline-danger btn-sm" onClick={this.onDeleteTask}>Удалить</button>
        </div>
      </li>
    )
  }
}

export default ThereTask