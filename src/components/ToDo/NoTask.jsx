import React, { Component } from 'react'

export class NoTask extends Component {
  render() {
    return (
        <ul className="todo-item">
            <li className="todo-item justify-content-center">
                <span className="todo-item-text">Список дел пуст</span>
            </li>
        </ul>
    )
  }
}

export default NoTask