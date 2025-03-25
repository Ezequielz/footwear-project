import { Router } from 'express';
import { FootweearController } from './FootwearController';


// UsersRouter
// /api/products

export const FootwearRouter = (): Router => {
    const router = Router();

    const {
        getAll,
        getById,
        update,
        remove,
    } = FootweearController;

    router.get('/footwear', getAll);
    router.get('/footwear/:id', getById);
    router.put('/footwear/:id', update);
    router.delete('/footwear/:id', remove);

    return router;
};