import type { Task } from "../models";

interface Props {
    task: Task;
}

export default function TaskItem({task}: Props) {
    
  return (
    <div>
        <h3>{task.title}</h3>
        <div>{task.description}</div>
        <div>{task.date}</div>
        <div>{task.status}</div>
    </div>
  )
}
