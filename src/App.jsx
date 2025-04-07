import { useState, useEffect } from 'react'
import './App.css'
// Components
import AppTitle from './components/AppTitle'
import NewToDo from './components/NewToDo'
import Tasks from './components/Tasks'

function App() {
  
  const[tasks, setTasks] = useState([]);
  
  useEffect(() => {
    tasks
  }, [tasks])

  return (
    <>
      <AppTitle />
      <NewToDo setTasks={setTasks}/>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
