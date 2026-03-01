import { useStyles } from "../styles/useStyles";
import Column from "./Column";


export default function Board() {
    const classes = useStyles();
  return (
    <div className={classes.container}>
        <Column title="Todo" status="todo" tasks={[]}/>
        <Column title="In Progress" status="in-progress" tasks={[]}/>
        <Column title="Done" status="done" tasks={[]}/>
    </div>
  )
}
