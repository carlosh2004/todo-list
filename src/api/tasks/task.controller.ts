import { Request, Response } from 'express';
import taskService from './task.service';

export async function getTasks(req: Request, res: Response): Promise<Response> {
  try {
    const tasks = await taskService.getAllTasks();
    return res.send(tasks);
  } catch (error) {
    return res.send(error);
  }
}

export async function getTask(req: Request, res: Response): Promise<Response> {
  try {
    const task = await taskService.getTaskById(parseInt(req.params.id));
    return res.send(task);
  } catch (error) {
    return res.send(error);
  }
}

export async function createTask(req: Request, res: Response): Promise<Response> {
  try {
    const task = await taskService.createTask(req.body);
    return res.send(task);
  } catch (error) {
    return res.send(error);
  }
}

export async function updateTask(req: Request, res: Response): Promise<Response> {
  try {
    const task = await taskService.updateTaskById(parseInt(req.params.id), req.body);
    return res.send(task);
  } catch (error) {
    return res.send(error);
  }
}

export async function deleteTask(req: Request, res: Response): Promise<Response> {
  try {
    const task = await taskService.deleteTaskById(parseInt(req.params.id));
    return res.send(task);
  } catch (error) {
    return res.send(error);
  }
}
