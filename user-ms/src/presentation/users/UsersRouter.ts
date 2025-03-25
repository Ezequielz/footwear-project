import { Router } from 'express';
import { UsersController } from './UsersController';

// UsersRouter
// /api/users

export const UsersRouter = (): Router => {
    const router = Router();

    const {
        getUsers,
        getUserById,
        updateUser,
        deleteUser
    } = UsersController;

    router.get('/', getUsers);
    router.get('/:id', getUserById);
    router.put('/:id', updateUser);
    router.delete('/:id', deleteUser);

    return router;
};