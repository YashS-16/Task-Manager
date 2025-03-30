import React, { useState } from 'react'

function AddTaskForm(props) {
  const [task, setTask] = useState("");
  const [taskList, settaskList] = useState([])

  function handleTask(event){
        setTask(event.target.value)
  }
  function getTask(){
    settaskList([...taskList, task])
    setTask("")
  }
  function deleteTask(index){
    settaskList(taskList.filter((_, i) => i !== index))
  }
    return (
        <>
         <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="bg-yellow-100 p-6 rounded-xl shadow-lg w-96 text-center">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">📝 Task Manager</h1>
        
        <div className="flex gap-2">
          <input
            className="w-full p-2 border rounded-lg"
            value={task}
            onChange={handleTask}
            placeholder="Enter task"
          />
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            onClick={getTask}
          >
            Add Task
          </button>
        </div>
             <ul className="mt-4 text-left">
                {taskList.map((task, index)=>(
                    <li key={index}
                     className="flex justify-between p-2 bg-gray-100 rounded-lg mt-2">
                        {task} 
                     <button 
                     onClick={()=>deleteTask(index)}
                     className="text-red-500 hover:text-red-700">🗑️</button>
                    </li> 
                ))
                }
             </ul>
        </div>
        </div>
        </>
    )
}

export default AddTaskForm