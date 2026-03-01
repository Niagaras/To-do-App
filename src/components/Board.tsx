import { useStyles } from "../styles/useStyles";
import Column from "./Column";


export default function Board() {
    const classes = useStyles();
  return (
    <div className={classes.container}>
        <Column />
        <Column />
        <Column />
    </div>
  )
}
