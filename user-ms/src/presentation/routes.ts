import { Router } from 'express';
import { AuthRouter } from './auth/AuthRouter';
import { UsersRouter } from './users/UsersRouter';

// AppRoutes
// /api

export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/auth', AuthRouter() );
    router.use('/users', UsersRouter() );
 
    return router;
  }


}