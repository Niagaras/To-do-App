import { useStyles } from "../styles/useStyles";


export default function Board() {
    const classes = useStyles();
  return (
    <div className={classes.container}>
        <div className={classes.column}>Todo</div>
        <div className={classes.column}>In Progress</div>
        <div className={classes.column}>Done</div>
    </div>
  )
}
