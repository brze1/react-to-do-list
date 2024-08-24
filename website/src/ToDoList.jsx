import React, {useState} from "react";

const ToDoList = () => {

    const [tasks,setTasks] = useState(['Find a To-Do List Web App']);
    const [newTask,setNewTask] = useState('');

    const handleInputChange = (event) =>{
        setNewTask(event.target.value)
    }

    const addTask = () => {
        if(newTask != ''){
            setTasks(t => [...t,newTask])
            setNewTask('')
        }
        

    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_,i) => i !== index)) // return array of tasks and filter out where the indexes match
    }
    
    const moveTaskUp = (index) => {
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = 
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    const moveTaskDown = (index) => {
        if (index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = 
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(<>
    <div className='to-do-list'>
        <h1>To-Do List</h1>
        <div>
            <input type='text' placeholder='Enter a task...' value={newTask} onChange={handleInputChange} maxLength={70}>
            </input><button className='add-button' onClick={addTask}>Add</button>
        </div>
        <div>
            <ol>
                {tasks.map((task,index) =>
                <li key={index}>   
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='move-button' onClick={() => moveTaskUp(index)}>Up</button>
                    <button className='move-button' onClick={() => moveTaskDown(index)}>Down</button>
                </li>)}
            </ol>
        </div>
    </div>
    </>);
}

export default ToDoList