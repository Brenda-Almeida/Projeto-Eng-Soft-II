import { Router } from 'express';
import { SubjectsController } from "../controllers/SubjectsController";
import { TopicController } from '../controllers/TopicController';
import { UserController } from '../controllers/UserController';

const routes = Router();

const userController = new UserController();

routes.post("/user", userController.create);

const subjectsController = new SubjectsController();

routes.post("/subjects", subjectsController.create);

// =============== topic routes =================
const topicController = new TopicController();
routes.post("/create-topic", topicController.create);

 
export default routes;
