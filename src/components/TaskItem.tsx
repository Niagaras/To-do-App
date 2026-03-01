
import { useMutation } from "@tanstack/react-query";
import type { Task } from "../models";
import { useStyles } from "../styles/useStyles";
import { queryClient } from "../main";
import { deleteTask } from "../libs/taskApi";
import { useDispatch } from "react-redux";
import { setEditingTask } from "../features/editSlice";

interface Props {
    task: Task;
}

export default function TaskItem({task}: Props) {
    const classes = useStyles();

    const deleteMutation = useMutation({
      mutationFn : deleteTask,
      onSuccess: () => queryClient.invalidateQueries({queryKey: ['tasks']}),
    });

    const dispatch = useDispatch();

  return (
    <div className={classes.taskItem}>
        <h3 className={classes.taskTitle}>{task.title}</h3>
        <div className={classes.taskDesc}>{task.description}</div>
        <div className={classes.taskDate}>{task.date}</div>
        <span className={classes.taskStatus}>{task.status}</span>
        <div className={classes.actions}>
          <button 
          style={{backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}}
          onClick={() => deleteMutation.mutate(task.id)}>Delete</button>
          <button style={{backgroundColor: 'yellow', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}} onClick={() => dispatch(setEditingTask(task))}>Edit</button>
        </div>
    </div>
  )
}
