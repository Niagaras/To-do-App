export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    date?: string;
}

export interface Props{
    title: string;
    status: TaskStatus;
    tasks: Task[];
}