import { Router } from 'express';

import * as taskCrtl from '../controllers/taskController';

const router = Router();

router.get('/', taskCrtl.findAllTasks);

router.get('/done', taskCrtl.findAllDoneTasks);

router.post('/', taskCrtl.createTask);

router.get('/:id', taskCrtl.findOneTask);

router.put('/:id', taskCrtl.updateTask);

router.delete('/:id', taskCrtl.deleteTask);

export default router;