import React from 'react'
import { connect } from 'react-redux'
import {moveTaskDoneToInProgress} from '../actions'

const DoneList = (props) => (
  <ul className = "containerTaskList">
    <li className = "containerTitle">Done</li>
    {props.done.map(doneTask =>
       <li className = "taskItem" key={doneTask.id}>
        <div>{doneTask.id} - {doneTask.text}</div>
        <div><button onClick= {() => props.moveToInprogress(doneTask)}>Move To In progress</button></div>
       </li>
    )}
  </ul>
)

const mapStateToProps = (state) => ({
    done: state.done
})

const mapDispatchtoProps = (dispatch) => ({
  moveToInprogress: (task) => dispatch(moveTaskDoneToInProgress(task))
})

export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(DoneList)
