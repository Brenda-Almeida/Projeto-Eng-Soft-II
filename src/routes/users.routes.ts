import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
    return response.json({
        sucesso: true,
    });
});

export default usersRouter;
