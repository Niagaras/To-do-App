
import type { Task } from "../models";
import { useStyles } from "../styles/useStyles";

interface Props {
    task: Task;
}

export default function TaskItem({task}: Props) {
    const classes = useStyles();
  return (
    <div className={classes.taskItem}>
        <h3 className={classes.taskTitle}>{task.title}</h3>
        <div className={classes.taskDesc}>{task.description}</div>
        <div className={classes.taskDate}>{task.date}</div>
        <span className={classes.taskStatus}>{task.status}</span>
        <div className={classes.actions}>
          <button style={{backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}}>Delete</button>
          <button style={{backgroundColor: 'yellow', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}}>Edit</button>
        </div>
    </div>
  )
}
