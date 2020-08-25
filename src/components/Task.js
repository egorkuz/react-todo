import React, {useContext} from "react"
import {TaskListContext} from "../context/TaskListContext"

const Task = ({task}) => {
    const{removeTask,findItem,completeTask} = useContext(TaskListContext)
    return(
    <li className={!task.complete?"list-item":"list-item-complete"}>
        <span>{task.title}</span>
        {!task.complete?
        <div>
            <button onClick={()=>removeTask(task.id)} className="btn-delete task-btn">
                <i className="fas fa-trash-alt">
                </i>
            </button>
            <button onClick={()=>findItem(task.id)} className="btn-edit task-btn">
                <i className="fas fa-pen">
                </i>
            </button>
            <button onClick={()=>completeTask(task)} className="btn-complete task-btn">
                <i className="fas fa-check">
                </i>
            </button>
        </div>:
        <div>
          <button onClick={()=>removeTask(task.id)} className="btn-delete task-btn">
                <i className="fas fa-trash-alt">
                </i>
            </button>  
        </div>}
    </li>
    )
}


export default Task