import { useState } from "react";
import Button from "./Button";
import axios from "axios";

 interface Task{
    id:string,
    title:string
}

const Task = () => {

    const [ tasks, setTasks ] = useState<Task[]>([])

    const handleClick = async ()=>{

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTasks(data)
    } 
    

    return (  
        <>
            <h1>Tasks from API</h1>
            <Button disable={false} onClick={handleClick}>Get Tasks from API</Button>

            {tasks.map(task=> <p id={task.id}> {task.title} </p>)}
        </>
    );


}
 
export default Task;