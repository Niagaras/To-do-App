import { useMutation } from "@tanstack/react-query";
import { useStyles } from "../styles/useStyles";
import { createTask, updateTask } from "../libs/taskApi";
import { queryClient } from "../main";
import { useEffect, useState } from "react";
import type { Task, TaskStatus } from "../models";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { setEditingTask } from "../features/editSlice";


export default function TaskForm() {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');
    const [date, setDate] = useState('');

    const dispatch = useDispatch();
    const slice = useSelector((state :RootState) => state.editingTask);
    const editingTask: Task | null = slice?.editingTask ?? null;

    useEffect(() => {
        if(editingTask){
            setTitle(editingTask.title);
            setDescription(editingTask.description);
            setStatus(editingTask.status);
            setDate(editingTask.date ?? '');
        }else{
            setTitle('');
            setDescription('');
            setStatus('todo');
            setDate('');
        }
    }
    , [editingTask])

    const addMutation = useMutation({
        mutationFn: createTask,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['tasks']}),
    })

    const updateMutation = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['tasks']});
            dispatch(setEditingTask(null));
        }
    })

    const handleSubmit =(e : React.FormEvent) => {
        e.preventDefault();
        if(!title) return;
        const payload = {
            title,
            description,
            status: status as TaskStatus,
            date : date || new Date().toISOString(),
        };
        if(editingTask) updateMutation.mutate({...payload, id: editingTask.id});
        else addMutation.mutate(payload);
    }

  return (
    <form className={classes.taskForm} onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="Task Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          placeholder="Task Description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="todo">to-do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <label htmlFor="">Date : 
         <input
           value={date}
           type="date"
           onChange={(e) => setDate(e.target.value)}
           required
         />   
        </label>

        <div className={classes.actions}>
        <button
          type="submit"
          style={{backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}}
        >
          {editingTask ? 'Save' : 'Add'}
        </button>
        <button
          type="button"
          style={{backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}}
          onClick={() => dispatch(setEditingTask(null))}
        >
          Cancel Task
        </button>
        </div>
    </form>
  )
}
