import { Request, Response } from 'express';

import taskService from './task.service';
import response from '../../utils/response';

export async function getTasks(req: Request, res: Response): Promise<Response> {
  try {
    const tasks = await taskService.getAllTasks();
    return response.success(res, tasks);
  } catch (error) {
    return response.error(res, 'Error processing request', 400, error);
  }
}

export async function getTask(req: Request, res: Response): Promise<Response> {
  try {
    const task = await taskService.getTaskById(parseInt(req.params.id));
    return response.success(res, task || []);
  } catch (error) {
    return response.error(res, 'Error processing request', 400, error);
  }
}

export async function createTask(req: Request, res: Response): Promise<Response> {
  try {
    const task = await taskService.createTask(req.body);
    return response.success(res, task);
  } catch (error) {
    return response.error(res, 'Error processing request', 400, error);
  }
}

export async function updateTask(req: Request, res: Response): Promise<Response> {
  try {
    const task = await taskService.updateTaskById(parseInt(req.params.id), req.body);
    return response.success(res, task);
  } catch (error) {
    return response.error(res, 'Error processing request', 400, error);
  }
}

export async function deleteTask(req: Request, res: Response): Promise<Response> {
  try {
    const task = await taskService.deleteTaskById(parseInt(req.params.id));
    return response.success(res, task);
  } catch (error) {
    return response.error(res, 'Error processing request', 400, error);
  }
}
