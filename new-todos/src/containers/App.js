import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import EditLastTodo from './EditLastTodo';
import './App.css'
import InProgressList from './InProgressList';
import DoneList from './DoneList';

const App = () => (
  <div className="App">
    <div className="content">
      <div className = "left-content">
        <AddTodo />
        <EditLastTodo />
      </div>
      <div className = "container">
        <TodoList />
        <InProgressList />
        <DoneList />
      </div>
    </div>
  </div>
)

export default App
