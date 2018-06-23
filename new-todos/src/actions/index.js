import {REMOVE_TODO_BY_ID, EDIT_LAST_TODO, EDIT_TODO_BY_ID
, TODO_TO_INPROGRESS, INPROGRESS_TO_TODO, INPROGRESS_TO_DONE,
DONE_TO_INPROGRESS} from '../constants'

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

export const editTodoById = (text, id) => ({
  type: EDIT_TODO_BY_ID,
  text,
  id
})

export const moveTaskTodoToInProgress = (task) => ({
  type: TODO_TO_INPROGRESS,
  task
})

export const moveTaskInProgressToTodo = (task, todos) => ({
  type: INPROGRESS_TO_TODO,
  task
})

export const moveTaskInProgressToDone = (task, todos) => ({
  type: INPROGRESS_TO_DONE,
  task
})

export const moveTaskDoneToInProgress = (task, todos) => ({
  type: DONE_TO_INPROGRESS,
  task
})