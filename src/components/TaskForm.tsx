import { useStyles } from "../styles/useStyles";


export default function TaskForm() {
    const classes = useStyles();
  return (
    <form action="" className = {classes.taskForm}>
        <input type="text" placeholder="Task Title" required />
        <textarea placeholder="Task Description" required></textarea>
        <select name="" id="">
          <option value="to-do">to-do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>            
        </select>
        <label htmlFor="">Date : 
         <input type="date" required />   
        </label>
        <div className={classes.actions}>
        <button type="submit" style={{backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}}>Add Task</button>
        <button type="submit" style={{backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}}>Cancel Task</button>               
        </div>
    </form>
  )
}
