import { Router } from 'express';
import { AuthController } from './AuthController';

// AuthRouter
// /api/auth 

export const AuthRouter = (): Router => {
    const router = Router();

    const {
        loginUser,
        registerUser,
        renewToken,
    } = AuthController;

    router.post('/register', registerUser);
    router.post('/login' , loginUser);
    router.get('/renew', renewToken);

    return router;
};