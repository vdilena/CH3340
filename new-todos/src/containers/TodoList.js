import React from 'react'
import { connect } from 'react-redux'
import { removeTodoById, moveTaskTodoToInProgress } from '../actions';

const TodoList = (props) => (
  <ul className = "containerTaskList">
    <li className = "containerTitle">To Do</li>
    {props.todos.map(todo =>
       <li className = "taskItem" key={todo.id}>
        <div onClick = {() => props.removeTodoById(todo.id)}>{todo.id} - {todo.text}</div>
        <div><button onClick= {() => props.moveToInProgress(todo)}>Move In Progress</button></div>
      </li>
    )}
  </ul>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchtoProps = (dispatch) => ({
  removeTodoById: (todoId) => dispatch(removeTodoById(todoId)),
  moveToInProgress: (task) => dispatch(moveTaskTodoToInProgress(task) )
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(TodoList)
