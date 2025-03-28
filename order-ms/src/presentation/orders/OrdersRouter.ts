import { Router } from 'express';
import { OrdersController } from './OrdersController';



// UsersRouter
// /api/orders

export const OrdersRouter = (): Router => {
    const router = Router();

    const {
        create,
        getAll,
        getById,
        update,
        remove,
    } = OrdersController;

    router.post('/', create);
    router.get('/', getAll);
    router.get('/:id', getById);
    router.patch('/:id', update);
    router.delete('/:id', remove);

    return router;
};