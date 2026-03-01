

export default function TaskItem({task}: {task: any}) {
  return (
    <div>
        <h3>{task.title}</h3>
        <div>{task.description}</div>
        <div>{task.date}</div>
        <div>{task.status}</div>
    </div>
  )
}
