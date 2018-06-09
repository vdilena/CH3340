import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo, removeLastTodo } from '../actions'

class AddTodo extends Component {
  
  inputTodoName = '';
  inputRef

  todoNameHandler = name => {
    this.inputTodoName = name
  }

  addTodoHandler = () => {
    this.props.addTodo(this.inputTodoName)
    this.inputRef.value = ''
    this.inputRef.focus()
  }

  addRemoveLastTodoHandler = () => {

    this.props.removeLastTodo()
  }

    render() {

      return (
        <div>
            <input 
              onChange = {(event) => this.todoNameHandler(event.target.value)} 
              ref = {(input) => this.inputRef = input}
            />
            <button onClick= {() => this.addTodoHandler()}>Add Todo</button>
            <button onClick= {() => this.addRemoveLastTodoHandler()}>Remove Last Todo</button>
        </div>
      )
  }

  
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  removeLastTodo: () => dispatch(removeLastTodo())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
