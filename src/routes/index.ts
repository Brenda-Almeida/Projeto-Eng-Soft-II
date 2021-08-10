import { Router } from 'express';
import { SubjectsController } from '../controllers/SubjectsController';
import { TopicController } from '../controllers/TopicController';
import { UserController } from '../controllers/UserController';
import sessionsRouter from './sessions.routes';
import { RegisteredController } from '../controllers/RegisteredController';
import { ContentController } from '../controllers/ContentController';

const routes = Router();

const userController = new UserController();

routes.post('/user', userController.create);

const registeredController = new RegisteredController();

routes.post('/registered', registeredController.create);
routes.get('/registered', registeredController.getRegistered);


routes.use('/sessions', sessionsRouter);

const subjectsController = new SubjectsController();

routes.get('/subjects', subjectsController.index);

routes.post('/createSubjects', subjectsController.create);

// =============== topic routes =================
const topicController = new TopicController();
routes.post('/topics', topicController.create);
routes.get('/topics', topicController.getTopics);

// =============== content routes =================
const contentController = new ContentController();
routes.post('/content', contentController.create);
routes.get('/content', contentController.getContent);

export default routes;
