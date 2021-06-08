import { Router } from 'express';
import { SubjectsController } from '../controllers/SubjectsController';
import { TopicController } from '../controllers/TopicController';
import { UserController } from '../controllers/UserController';
import sessionsRouter from './sessions.routes';

const routes = Router();

const userController = new UserController();

routes.post('/user', userController.create);

routes.use('/sessions', sessionsRouter);

const subjectsController = new SubjectsController();

routes.post('/subjects', subjectsController.create);

// =============== topic routes =================
const topicController = new TopicController();
routes.post('/topics', topicController.create);

export default routes;
