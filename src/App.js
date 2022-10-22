import {Component} from "react";
import Header from './components/Header.jsx'
import Search from './components/Search/Search.jsx'
import ToDoList from './components/ToDo/ToDoList.jsx'
import Footer from './components/Footer.jsx'


export class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      toDoList: [],
      trim: '',
      status: 'all',
    }

  }

  componentDidMount(){
    const data = JSON.parse(localStorage.getItem('tasks'))
    const status = localStorage.getItem('status') || 'all'

    if (data){
      
      this.setState( prevState => {
        return {
          toDoList: data,
          status: status
        }
      }, this.enableDecoration)
    }
  }

  saveToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(this.state.toDoList))
  }

  toggleParam = (id, param) => {
    this.setState( prevState => {
      const newArray = prevState.toDoList.map( task => {
        return {
          ...task,
          [param]: task.id === id ? !task[param]: task[param]
        }
      })

      return {
        toDoList: newArray
      }
    }, this.saveToLocalStorage)
  }

  onImportantClick = (id) => {
    this.toggleParam(id, 'important')
  }

  onTaskClick = (id) => {
    this.toggleParam(id, 'done')
  }

  onDeleteTask = (id) => {
    this.setState( prevState => {
      const newToDoList = prevState.toDoList.filter( task => task.id !== id)
      
      return {
        toDoList: newToDoList
      }
    }, this.saveToLocalStorage)
  }

  appendTask = (taskText) => {
    this.setState( prevState => {
      
      let currentId = 0

      if ( this.state.toDoList.length > 0){
         currentId = this.state.toDoList.at(-1).id + 1
      }
  
      const newTask = {
        id: currentId,
        value: taskText,
        important: false,
        done: false,
      }

      prevState.toDoList.push(newTask)

      return {
        toDoList: prevState.toDoList
      }
    }, this.saveToLocalStorage)
  }

  searchText = () => {
    this.setState({
      trim: document.querySelector('#search-text').value
    })
  }

  searchTasks = () => {
    const searchText = this.state.trim.trim()
    let searchedTasks = this.state.toDoList

    if (searchText){
      searchedTasks = this.state.toDoList.filter( task => task.value.includes(searchText))
    }

    return searchedTasks
  }

  changeStatus = (e) => {
    const currentButton = document.querySelector(`#${this.state.status}`)
    currentButton.classList.remove('btn-primary')
    currentButton.classList.add('btn-ligth')

    const currentStatus = e.target.id
    localStorage.setItem('status', currentStatus)

    this.setState({
      status: currentStatus
    }, this.enableDecoration)
  }

  filterByStatus = (tasks, filter) => {
    switch (filter){
      case 'all':
        return tasks
      case 'active':
        return tasks.filter( task => task.done === false)
      case 'done':
        return tasks.filter( task => task.done === true)
      default: 
        return tasks
    }
  }

  enableDecoration = () => {
    const element = document.querySelector(`#${this.state.status}`)

    element.classList.remove('btn-light')
    element.classList.add('btn-primary')
  }


  render() {

    let visibleTasks = this.searchTasks()
    visibleTasks = this.filterByStatus(visibleTasks, this.state.status)

    return (
      <div className="todo-app p-5">
        <Header toDoList={this.state.toDoList}/>
        <Search searchText={this.searchText}
                changeStatus={this.changeStatus}/>
        <ToDoList toDoList={visibleTasks}
                  onImportantClick={this.onImportantClick}
                  onTaskClick={this.onTaskClick}
                  onDeleteTask={this.onDeleteTask}/>
        <Footer appendTask={this.appendTask}/>
      </div>
      );
    
  }
}

export default App


