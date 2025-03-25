import { Router } from 'express';
import { FootwearRouter } from './products/FootwearRouter';


// AppRoutes
// /api

export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/products', FootwearRouter() );
  
 
    return router;
  }


}