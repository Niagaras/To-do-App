import { useMutation } from "@tanstack/react-query";
import { useStyles } from "../styles/useStyles";
import { createTask } from "../libs/taskApi";
import { queryClient } from "../main";
import { useState } from "react";
import type { TaskStatus } from "../models";


export default function TaskForm() {
    const classes = useStyles();

    const addMutation = useMutation({
        mutationFn: createTask,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['tasks']}),
    })

    const handleSubmit =(e : React.FormEvent) => {
        e.preventDefault();
        if(!title) return;
        addMutation.mutate({
            title, 
            description,
            status: status as TaskStatus,
            date : date || new Date().toISOString(),
        })
    }
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');
    const [date, setDate] = useState('');

  return (
    <form action="" className = {classes.taskForm}>
        <input type="text" placeholder="Task Title" required onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Task Description" required onChange={(e) => setDescription(e.target.value)} />
        <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
          <option value="todo">to-do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>            
        </select>
        <label htmlFor="">Date : 
         <input type="date" onChange={(e) => setDate(e.target.value)} required />   
        </label>

        <div className={classes.actions}>
        <button type="submit"
         style={{backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}} 
         onClick={handleSubmit}>Add Task</button>
        <button type="submit" style={{backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}}>Cancel Task</button>               
        </div>
    </form>
  )
}
