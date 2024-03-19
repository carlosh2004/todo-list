import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  status: text('status', { enum: ['completed', 'in progress', 'cancelled'] })
    .notNull()
    .default('in progress'),
  due_date: timestamp('due_date').defaultNow().notNull(),
  createAt: timestamp('create_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const insertTaskSchema = createInsertSchema(tasks);
export const selectTaskSchema = createSelectSchema(tasks);
export type Tasks = z.infer<typeof selectTaskSchema>;
export type NewTasks = z.infer<typeof insertTaskSchema>;
