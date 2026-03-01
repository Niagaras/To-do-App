import type { Props } from '../models';
import { useStyles } from '../styles/useStyles';
import TaskItem from './TaskItem';

export default function Column({title, status, tasks}: Props) {
        const classes = useStyles();
        const filteredTasks = tasks.filter(
            (t) => t.status === status
        )
  return (
    <div className={classes.column}>
        <div className={classes.columnHeader}>
            <h3 style={{margin: '0', textAlign: 'center'}}>{title}</h3>
        </div>
        <div className={classes.scrollable}>
        {filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
        ))}            
        </div>
    </div>
  )
}
