import { combineReducers } from 'redux'
import {REMOVE_TODO_BY_ID, EDIT_LAST_TODO, EDIT_TODO_BY_ID
, TODO_TO_INPROGRESS, INPROGRESS_TO_TODO, INPROGRESS_TO_DONE,
DONE_TO_INPROGRESS} from '../constants'

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

const editTodoById = (todos, text, id) => {

  let filteredTodos = todos.filter(todo => {

      if(todo.id.toString() === id) {
        todo.text = text
      }

      return true
  })

  return [...filteredTodos]
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
      console.log('paso por REMOVE_TODO_BY_ID: ' + action.todoId)
      return todos.filter(todo => todo.id !== action.todoId)
    case EDIT_LAST_TODO:
      return editLastTodo(todos, action.text)
    case EDIT_TODO_BY_ID:
      return editTodoById(todos, action.text, action.id)
    case TODO_TO_INPROGRESS:
      return todos.filter(todo => todo.id !== action.task.id)
    case INPROGRESS_TO_TODO:
      return [
        ...todos,
        {
          id: action.task.id,
          text: action.task.text
        }
      ]
    default:
      return todos
  }
}

const inprogress = (inprogress = [], action) => {
  switch (action.type) {
    case TODO_TO_INPROGRESS:
      return [
        ...inprogress,
        {
          id: action.task.id,
          text: action.task.text
        }
      ]
    case INPROGRESS_TO_TODO:
      return inprogress.filter(task => task.id !== action.task.id)
    case INPROGRESS_TO_DONE:
      return inprogress.filter(task => task.id !== action.task.id)
    case DONE_TO_INPROGRESS:
      return [
        ...inprogress,
        {
          id: action.task.id,
          text: action.task.text
        }
      ]
    default:
      return inprogress
  }
}

const done = (done = [], action) => {
  switch (action.type) {
    case INPROGRESS_TO_DONE:
      return [
        ...done,
        {
          id: action.task.id,
          text: action.task.text
        }
      ]
    case DONE_TO_INPROGRESS:
      return done.filter(task => task.id !== action.task.id)
    default:
      return done
  }
}

export default combineReducers({
  todos,
  inprogress,
  done
})
