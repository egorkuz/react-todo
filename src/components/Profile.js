import React,{useContext} from "react"
import {TaskListContext} from '../context/TaskListContext'

const Profile = () => {
    const {name,setName,completedPercent} = useContext(TaskListContext)
    return (
        <div className="profile">
            <h1>Profile</h1>
            {/* <span>{name}</span> */}
            <span className="completed">Completed: {completedPercent}%</span>
        </div>
    )
}

export default Profile