import React from 'react';
import { useState } from 'react';
import '../Styles/Form.css';

const AddTask = ({ onAdd }) => {

    const [sub, setSub] = useState('')
    const [day, setDateTime] = useState('')
    const [reminder, setReminder] = useState(false)
    

    const onSubmit = (e) => {
        e.preventDefault()

        if(!sub) {    
            alert('Please Enter Valid Input!')
            return
        }

        onAdd ( { sub, day, reminder})

        setSub('')
        setDateTime('')
        setReminder(false)
    }

    
  return (
      <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
              <label>Task Name</label>
              <input type='text' placeholder='Enter task name' value={sub} onChange={(e) => setSub(e.target.value)}/>
          </div>
          <div className='form-control'>
              <label>Date Time</label>
              <input type='text' placeholder='Enter Date and Time' value={day} onChange={(e) => setDateTime(e.target.value)}/>
          </div>
          <div className='form-control form-control-check'>
              <label>Set Reminder</label>
              <input type='checkbox' 
              checked={reminder}
              value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
          </div>

          <input type='submit' className='btn btn-block' value='Save Task'/>
          
      </form>
  );
};

export default AddTask;
