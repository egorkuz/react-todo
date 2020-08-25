import React, {createContext,useState,useEffect,useReducer} from "react"
import { v4 as uuidv4 } from 'uuid'
export const TaskListContext = createContext()

const TaskListContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('tasks'))||[]
    const[tasks,setTasks] = useState(initialState)
    const[completed,setCompleted] = useState(tasks.filter(task=>task.complete===true).length)
    const[completedPercent,setCompletedPercent] = useState(0)
    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks))
        setCompletedPercent(() => {
            if (tasks.length===0) return 0
            const percent = (completed/tasks.length)*100
            if (percent%1!==0) return percent.toFixed(2)
            else return percent
        })
    },[tasks])
    const[name,setName] = useState("Enter your name...")
    const[editItem,setEditItem] = useState(null)
    //According to ES6 if property and value have the same name we can only write title
    //instead of title: title
    const addTask = title => {
        setTasks([...tasks,{title, complete: false, id: uuidv4()}])
    }
    const removeTask = id => {
        for (let t of tasks) {
            if (t.id===id&&t.complete===true) setCompleted(completed-1)
        }
        setTasks(tasks.filter(
            task=>task.id!==id
            ))
    }
    const clearList = () => {
        if (tasks.length > 0) {
            setTasks([])
            setCompleted(0)
        }
    }
    const findItem = id => {
        const item = tasks.find(task=>task.id===id)
        setEditItem(item)
    }
    const editTask = (title,id) => {
        const newTasks = tasks.map(task=>(task.id===id?{title,id}:task))
        setTasks(newTasks)
        setEditItem(null)
    }
    const completeTask = completedTask => {
        const newTasks = tasks.map(
            task=>{
                return task.id===completedTask.id?{...completedTask,complete: true}:task})
        setCompleted(completed+1)
        setTasks(newTasks)
    }
    return (
        <TaskListContext.Provider value={{tasks,addTask,removeTask,clearList,findItem,editTask,editItem,setEditItem,completeTask,name,completedPercent}}>
        {props.children}
        </TaskListContext.Provider>
    )
}
export default TaskListContextProvider