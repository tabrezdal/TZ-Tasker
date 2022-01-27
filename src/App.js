import { useState } from 'react';

import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask'


function App() {

      const [showAddTask, setShowForm] = useState(false)

      const [tasks, setTask] = useState([
        {
            id: 1,
            sub: 'UI Design',
            day: '26 Jan 2020 2pm',
            reminder: 'true'
        },
        {
            id: 2,
            sub: 'Web Layout Design',
            day: '28 Jan 2020 10am',
            reminder: 'true'
        },
        {
            id: 3,
            sub: 'Developement',
            day: '04 Feb 2020 12:30pm',
            reminder: 'false'
        }
    ])

    //Delete Task

    const deleteTask = (id) => {
      // console.log('Delete Clicked on',id);
      setTask(tasks.filter((task) => task.id !== id));
    }

    //Reminder Toggle
    const toggleReminder = (id) => {
      // setTask{tasks.map((task) => task.id === id ? task : )}

      // setTask{tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task)}

      setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    //add Task
    const addTask = (task) =>{
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task}
      setTask([...tasks, newTask])
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
