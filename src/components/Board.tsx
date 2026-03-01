import { useStyles } from "../styles/useStyles";
import Column from "./Column";
import { fetchTasks } from "../libs/taskApi";
import { useQuery } from "@tanstack/react-query";

export default function Board() {
    const classes = useStyles();
    const {data : tasks = []} = useQuery({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
    })
  return (
    <div className={classes.container}>
        <Column title="Todo" status="todo" tasks={tasks}/>
        <Column title="In Progress" status="in-progress" tasks={tasks}/>
        <Column title="Done" status="done" tasks={tasks}/>
    </div>
  )
}
