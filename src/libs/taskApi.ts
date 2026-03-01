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