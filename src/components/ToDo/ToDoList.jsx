import React, { Component } from 'react'
import ThereTask from './ThereTask'
import NoTask from './NoTask'

export class ToDoList extends Component {

  render() {
    const {onDeleteTask, onImportantClick, onTaskClick} = this.props

    // Если в списке есть задачи, то выполняем действия
    if (this.props.toDoList.length > 0){
      
      // Создаем новый список для вывода задач
      const toDoList = this.props.toDoList.map( toDo => {
          return <ThereTask onImportantClick={onImportantClick}
                            onTaskClick={onTaskClick}
                            onDeleteTask={onDeleteTask}
                            key={toDo.id} 
                            task={toDo}
                            />
      })

      return (
        <ul className="todo-list">
          {toDoList}
        </ul>
      )
    } else {
      return (
        <NoTask />
      )
    }
  }
}

export default ToDoList