import { Request, Response } from 'express';
import { handleError } from '../helpers/handleError';
import { UsersService } from '../../domain/services/users.service';
import { userDTO } from '../../domain/dtos/auth/user.dto';

const getUsers = (req: Request, res: Response) => {


    UsersService.getAll()
        .then((users) => res.json(users))
        .catch((error) => handleError(error, res));


};
const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {

        res.status(400).json({ ok: false, error: 'id is required' });
        return;
    };
    UsersService.getById(id!)
        .then((user) => res.json(user))
        .catch((error) => handleError(error, res));
};

const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const object = req.body;

    const [error, user] = userDTO.update({ id, ...object });
    if (error) {

        res.status(400).json({ ok: false, error });
        return;
    };
    UsersService.update(user!)
        .then((user) => res.json(user))
        .catch((error) => handleError(error, res));
};

const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;
    if (!id) {

        res.status(400).json({ ok: false, error: 'id is required' });
        return;
    };

    UsersService.remove(id!)
        .then((user) => res.json(user))
        .catch((error) => handleError(error, res));
};




export const UsersController = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};