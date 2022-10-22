import React, { Component } from 'react'

export class StatusBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            value: 'all'
        }

        this.buttonsInfo = [
            {id: 'all', value: 'Все'},
            {id: 'active', value: 'Активные'},
            {id: 'done', value: 'Выполненные'}
        ]
    }


    render() {
        const buttons = this.buttonsInfo.map( button => {
            return <button  className="btn btn-light"
                            key={button.id}
                            id={button.id}
                            type='button'
                            onClick={(e) => this.props.changeStatus(e)}>{button.value}</button>
        })

        return (
        <div id='status-bar' className="btn-group" role="group">
            {buttons}
        </div>
        )
    }
}

export default StatusBar