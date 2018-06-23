import React from 'react'
import { connect } from 'react-redux'
import {moveTaskInProgressToTodo, 
  moveTaskInProgressToDone} from '../actions'

const InProgressList = (props) => (
  <ul className = "containerTaskList">
    <li className = "containerTitle">In Progress</li>
    {props.inprogress.map(inprogressTask =>
       <li className = "taskItem" key={inprogressTask.id}>
        <div>{inprogressTask.id} - {inprogressTask.text}</div>
        <div><button onClick= {() => props.moveToToDo(inprogressTask)}>Move To Do</button></div>
        <div><button onClick= {() => props.moveToDone(inprogressTask)}>Move Done</button></div>
       </li>
    )}
  </ul>
)

const mapStateToProps = (state) => ({
    inprogress: state.inprogress
})

const mapDispatchtoProps = (dispatch) => ({
  moveToToDo: (task) => dispatch(moveTaskInProgressToTodo(task)),
  moveToDone: (task) => dispatch(moveTaskInProgressToDone(task) )
})

export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(InProgressList)
