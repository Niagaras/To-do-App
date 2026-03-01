import type { Task } from "../models";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const fetchTasks = async (): Promise<Task[]> => {
    const res = await fetch(baseURL);
    if(!res.ok) throw new Error('Failed to fetch tasks');
    return res.json();
}

export const createTask = async (task: Omit<Task, 'id'>):Promise<Task> => {
    const res = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },'body': JSON.stringify(task),
    });
    if(!res.ok) throw new Error('Failed to create task');
    return res.json();
    };

export const deleteTask = async (id: number):Promise<void> => {
    await fetch(`${baseURL}/${id}`, {
        method: 'DELETE',
    });
}

export const updateTask = async(task: Task):Promise<Task> => {
    const res = await fetch(`${baseURL}/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(task),
    });
    if(!res.ok) throw new Error('Failed to update task');
    return res.json();
    }
        