
import { useStyles } from '../styles/useStyles';
import TaskItem from './TaskItem';

export default function Column() {
        const classes = useStyles();
  return (
    <div className={classes.column}>
        <TaskItem task={{title: 'Task 1', description: 'Description for Task 1', date: '2024-06-01', status: 'In Progress'}} />
    </div>
  )
}
