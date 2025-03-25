import { Request, Response } from 'express';

import { handleError } from '../helpers/handleError';
import { AuthService } from '../../domain/services/auth.service';
import { tokenDto } from '../../domain/dtos/auth/token.dto';
import { userDTO } from '../../domain/dtos/auth/user.dto';

const registerUser = (req: Request, res: Response) => {

    const object = req.body;

    const [error, user] = userDTO.register({ object });
    if (error) {

        res.status(400).json({ ok: false, error });
        return;
    };


    AuthService.registerUser(user!)
        .then((user) => res.json(user))
        .catch((error) => handleError(error, res));


};


const loginUser = (req: Request, res: Response) => {
    const object = req.body;

    const [error, user] = userDTO.login({ object });
    if (error) {
        res.status(400).json({ ok: false, error });
        return;
    };

    AuthService.loginUser(user!)
        .then((user) => {
            res.json(user)
        })
        .catch((error) => {
            console.log({ 'error': error })
            handleError(error, res)
        });

};


const renewToken = async (req: Request, res: Response) => {

    const { user } = req.body

    const object = {
        id: user.id,
        email: user.email
    };
    const [error, token] = tokenDto.validate({ object });
    // // Generar JWT
    // const token = await generarJWT( uid, name );
    AuthService.renewToken(token!)
        .then((user) => {
            res.json(user)
        })
        .catch((error) => {
            console.log({ 'error': error })
            handleError(error, res)
        });
}



export const AuthController = {
    registerUser,
    loginUser,
    renewToken,
};