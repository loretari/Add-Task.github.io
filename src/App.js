import React, { useEffect, useState}from 'react';
import NewTask from './components/NewTask/NewTask'

function App() {
// const [tasks, setTasks] = useState([]);

const fetchTasks = async (taskText) => {
    try {
        const response = await fetch(
            "https://react-http-cd156-default-rtdb.firebaseio.com/tasks.json"
        )

        const data = await response.json()
    } catch (err) {

    }
}

    const taskAddHandler = (task) => {

    }

    return (
       <React.Fragment>
           <NewTask onAddTask = {taskAddHandler}/>
       </React.Fragment>
    )
}

export default App;