import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editLastTodo} from '../actions'

class EditLastTodo extends Component {

    inputTodoName = ''
    inputRef

    todoNameHandler = name => {
        this.inputTodoName = name
    }

    editTodoHandler = () => {

        if(!this.inputRef.value.trim()) {
            return
        }
        this.props.editLastTodo(this.inputTodoName)
        this.inputRef.value = ''
    }

    render() {

        return (

            <div>
                <input
                    onChange = {(event) => this.todoNameHandler(event.target.value)}
                    ref = {(input) => this.inputRef = input}
                />
                <button onClick = {() => this.editTodoHandler()}>Edit Last Todo</button>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    editLastTodo: (text) => dispatch(editLastTodo(text)) 
})

export default connect (
    null,
    mapDispatchToProps
) (EditLastTodo)