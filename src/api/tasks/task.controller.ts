import { Request, Response } from 'express';

export async function getTasks(req: Request, res: Response): Promise<Response> {
  return res.send('getTasks');
}

export async function getTask(req: Request, res: Response): Promise<Response> {
  return res.send('getTask');
}

export async function createTask(req: Request, res: Response): Promise<Response> {
  return res.send('createTask');
}

export async function updateTask(req: Request, res: Response): Promise<Response> {
  return res.send('updateTask');
}

export async function deleteTask(req: Request, res: Response): Promise<Response> {
  return res.send('deleteTask');
}
