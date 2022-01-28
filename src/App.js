import { useState, useEffect } from 'react';

import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';


import './Styles/main.css';
import './Styles/Container.css';



function App() {

      const [showAddTask, setShowForm] = useState(false)

      const [tasks, setTask] = useState([])


      useEffect (() => {

        const getTask = async () => {
          const tasksFromServer = await fetchTasks()
          setTask(tasksFromServer)
        }

        getTask()
      }, [])


      const fetchTasks = async () =>{
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
      }

      //updating Tasks
      const fetchTask = async (id) =>{
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
      }


    //Delete Task

    const deleteTask = async (id) => {
      // console.log('Delete Clicked on',id);

      await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'DELETE'
      })

      setTask(tasks.filter((task) => task.id !== id));
    }

    //Reminder Toggle
    const toggleReminder = async (id) => {
      // setTask{tasks.map((task) => task.id === id ? task : )}

      // setTask{tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task)}


      const taskToToggle = await fetchTask(id)
      const updateTask = { ...taskToToggle, reminder : !taskToToggle.reminder }

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updateTask),
      })

      const data = await res.json()

      setTask(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
    }

    //add Task
    const addTask = async (task) =>{
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      setTask([...tasks, data])


      // const id = Math.floor(Math.random() * 10000) + 1
      // const newTask = { id, ...task}
      // setTask([...tasks, newTask])
    }

  return (
    <div className="container">
      <Header title="TZ Tasker" onAdd={() => setShowForm(!showAddTask)}  showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>  : 'There is no task to show' }
    </div>
  );
}

export default App;
