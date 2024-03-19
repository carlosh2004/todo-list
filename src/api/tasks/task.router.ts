import { Router } from 'express';
import { createTask, deleteTask, getTask, getTasks, updateTask } from './task.controller';
import { validate } from '../../middlewares/validate';
import { insertTaskSchema } from './schema';

const router = Router();

router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', validate(insertTaskSchema), createTask);
router.put('/:id', validate(insertTaskSchema.partial()), updateTask);
router.delete('/:id', deleteTask);

export default router;
