import { eq } from 'drizzle-orm';

import { NewTasks, tasks, Tasks } from './schema';
import { db } from '../../database';


async function getAllTasks(): Promise<Tasks[]> {
  try {
    return await db.select().from(tasks);
  } catch (error) {
    throw new Error(`Error in getAllTasks: ${(error as Error).message}`);
  }
}

async function getTaskById(id: number): Promise<Tasks> {
  try {
    const result = await db.select().from(tasks).where(eq(tasks.id, id));
    return result[0];
  } catch (error) {
    throw new Error(`Error in getTaskById: ${(error as Error).message}`);
  }
}

async function createTask({ title, description, status, due_date }: NewTasks): Promise<Tasks> {
  try {
    const result = await db
      .insert(tasks)
      .values({
        title,
        description,
        status,
        due_date,
      })
      .returning();

    return result[0];
  } catch (error) {
    throw new Error(`Error in create: ${(error as Error).message}`);
async function updateTaskById(id: number, { title, description, status, due_date }: NewTasks): Promise<Tasks> {
  try {
    const result = await db.update(tasks)
      .set({ title, description, status, due_date })
      .where(eq(tasks.id, id))
      .returning();

    return result[0];
  } catch (error) {
    throw new Error(`Error in create: ${(error as Error).message}`);
  }
}

async function deleteTaskById(id: number): Promise<Tasks> {
  try {
    const result = await db.delete(tasks).where(eq(tasks.id, id)).returning();
    return result[0];
  } catch (error) {
    throw new Error(`Error in create: ${(error as Error).message}`);
  }
}

  }
}

export default {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
