import { Router } from 'express';
import { SubjectsController } from "../controllers/SubjectsController";

import usersRouter from './users.routes';

const routes = Router();

const subjectsController = new SubjectsController();

routes.use('/users', usersRouter);

routes.post("/subjects", subjectsController.create);
 
export default routes;
