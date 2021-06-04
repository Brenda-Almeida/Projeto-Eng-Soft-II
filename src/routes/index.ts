import { Router } from 'express';
import { SubjectsController } from "../controllers/SubjectsController";
import { TopicController } from '../controllers/TopicController';

import usersRouter from './users.routes';

const routes = Router();

const subjectsController = new SubjectsController();

routes.use('/users', usersRouter);
routes.post("/subjects", subjectsController.create);

// =============== topic routes =================
const topicController = new TopicController();
routes.post("/create-topic", topicController.create);

 
export default routes;
