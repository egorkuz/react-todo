import React from 'react';
import TaskList from "./TaskList"
import TaskForm from "./TaskForm"
import Header from "./Header"
import Profile from "./Profile"
import '../styles/App.css';
import TaskListContextProvider from "../context/TaskListContext"

const App = () => {
  return (
    <TaskListContextProvider>
    <div className="container">
      <div className="app-wrapper">
          <Header/>
        <div className="main">
          <TaskForm/>
          <TaskList/>
        </div>
      </div>
      <aside>
        <Profile/>
      </aside>
    </div>
    </TaskListContextProvider>
  );
}

export default App;
