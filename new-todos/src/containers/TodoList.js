import React from 'react'
import { connect } from 'react-redux'
import { removeTodoById } from '../actions';

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
       <li key={todo.id}>
        <span onClick = {() => props.removeTodoById(todo.id)}>{todo.text}</span>
      </li>
    )}
  </ul>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchtoProps = (dispatch) => ({
  removeTodoById: (todoId) => dispatch(removeTodoById(todoId))
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(TodoList)
