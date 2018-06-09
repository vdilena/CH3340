import {REMOVE_TODO_BY_ID, EDIT_LAST_TODO} from '../constants'

let nextTodoId = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const removeLastTodo = () => ({
  type: 'REMOVE_LAST_TODO'
})

export const removeTodoById = (todoId) => ({
  type: REMOVE_TODO_BY_ID,
  todoId
})

export const editLastTodo = text => ({
  type: EDIT_LAST_TODO,
  text
})