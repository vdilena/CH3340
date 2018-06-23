import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editTodoById} from '../actions'

class EditLastTodo extends Component {

    inputTodoName = ''
    inputTodoId = ''
    inputRef
    inputRefId

    todoNameHandler = name => {
        this.inputTodoName = name
    }

    editTodoHandler = () => {

        if(!this.inputRef.value.trim() 
            && !this.inputRefId.value.trim()) {
            return
        }
        //console.log(this.inputTodoName, this.inputTodoId)
        this.props.editTodoById(this.inputTodoName, this.inputTodoId)
        this.inputRef.value = ''
        this.inputRefId.value = ''
    }

    todoIdHandler = id => {

        this.inputTodoId = id
    }

    render() {

        return (

            <div>
                <input className = "inputIdEditTask"
                    onChange = {(event) => this.todoIdHandler(event.target.value)} 
                    ref = {(input) => this.inputRefId = input}
                />
                <input className = "inputNameEditTask"
                    onChange = {(event) => this.todoNameHandler(event.target.value)}
                    ref = {(input) => this.inputRef = input}
                />
                <button onClick = {() => this.editTodoHandler()}>Edit Todo</button>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    editTodoById: (text, id) => dispatch(editTodoById(text, id)) 
})

export default connect (
    null,
    mapDispatchToProps
) (EditLastTodo)