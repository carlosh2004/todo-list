import { Router } from 'express';
import taskRoutes from '../api/tasks/task.router';

const router = Router();

router.use('/api/tasks', taskRoutes);

export default router;
