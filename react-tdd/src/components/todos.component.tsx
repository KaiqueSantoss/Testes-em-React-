import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react';
import { Todo} from '../interfaces/todos';
import { v4 as uuid } from 'uuid'
import { useForm } from 'react-hook-form';
const Todos = (): JSX.Element => {

  const { register , handleSubmit, resetField } = useForm<{title:string}>()
  const [tasks, setTasks] = useState<Todo[]>([])

  const  handleClick = (data:{title:string})=>{
      console.log('submit')
      setTasks((prev)=> [...prev,{ id: uuid(), task: data.title, isCompleted: false}]);
      resetField('title')
      console.log(tasks)
  } 

  const handleDelete = (id:{id:string})=>{

      const filterTasks = [...tasks].filter(task=> task.id !== id)
      setTasks(filterTasks)

  }



return (
<div className="w-screen h-screen bg-gray-950 flex justify-center items-center"> 
  
  <div className="flex justify-center items-center flex-col gap-6 p-6 bg-gray-700 rounded-md">
    <h1 className="text-gray-50 text-2xl"> All Tasks </h1>

    <div className=" flex items-center gap-4">
        <input 
        className="rounded-md  p-3 text-gray-50 bg-gray-800" 
        type="text" placeholder="Digit for a new task..."  {...register('title',{required:true})}/>
      <button aria-label='Add Task' onClick={()=> handleSubmit(handleClick)()}> 
        <AiOutlinePlus className='text-gray-50' size={18}/>
      </button>
    </div>

   
        {tasks.map(task=> 
        <div  key={task.id}
         className=' flex items-center gap-4 w-full justify-between'>
          <p className='text-gray-50 rounded-md p-3 bg-gray-600 w-full'> 
          {task.task} </p>
            <button aria-label={`Delete task ${task.task}`} onClick={()=>handleDelete(task.id)}>
              <AiOutlineDelete className='text-red-700' size={18}/>
            </button>
        </div>
        
        )}
 

</div>  


</div>);

};


export default Todos;
