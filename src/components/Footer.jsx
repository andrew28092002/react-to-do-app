import { Component } from 'react'

export class Footer extends Component {
  constructor(props){
    super(props)

    this.state = {
      task: ''
    }

    this.appendTask = this.props.appendTask.bind(this)
  }

  clearInput = (e) => {
    document.querySelector('#task-input').value = ''
    this.setState( prevState => {
      return {
        task: ''
      }
    })
  }

  onInputChange = (e) => {
    this.setState({
        task: e.target.value
      })
  }

  submitForm = (e) => {
    e.preventDefault()
    if (this.state.task.trim()){
    this.appendTask(this.state.task)
    this.clearInput()}
  }

  render() {
    return (
    <form onSubmit={this.submitForm} className="footer">
      <input onChange={this.onInputChange}
             type="text" 
             placeholder="Что необходимо сделать"
             className="form-control me-2" 
             id='task-input'/>
      <button type="submit" className="btn btn-primary">Добавить</button>
	  </form>
    )
  }
}

export default Footer