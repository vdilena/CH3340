import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import EditLastTodo from './EditLastTodo';

const App = () => (
  <div>
    <AddTodo />
    <EditLastTodo />
    <TodoList />
  </div>
)

export default App
