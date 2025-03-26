import { Router } from 'express';
import { FootweearController } from './FootwearController';


// UsersRouter
// /api/products

export const FootwearRouter = (): Router => {
    const router = Router();

    const {
        create,
        getAll,
        getById,
        update,
        remove,
    } = FootweearController;

    router.post('/footwear', create);
    router.get('/footwear', getAll);
    router.get('/footwear/:id', getById);
    router.patch('/footwear/:id', update);
    router.delete('/footwear/:id', remove);

    return router;
};