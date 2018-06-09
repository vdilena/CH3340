import { combineReducers } from 'redux'
import {REMOVE_TODO_BY_ID, EDIT_LAST_TODO} from '../constants'

const removeLastTodo = (todos) => {

  let newTodos = [...todos]
  newTodos.pop()
  return [...newTodos]
}

const editLastTodo = (todos, newText) => {

  let newTodos = [...todos]
  let ultimo  = newTodos.pop()
  ultimo.text = newText

  return [...newTodos, ultimo]
}

const todos = (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: action.id,
          text: action.text
        }
      ]
    case 'REMOVE_LAST_TODO':
      return removeLastTodo(todos)
    case REMOVE_TODO_BY_ID: 
      return todos.filter(todo => todo.id !== action.todoId)
    case EDIT_LAST_TODO:
      return editLastTodo(todos, action.text)
    default:
      return todos
  }
}

export default combineReducers({
  todos,
})
