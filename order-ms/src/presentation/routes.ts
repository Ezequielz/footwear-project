import { Router } from 'express';
import { OrdersRouter } from './orders/OrdersRouter';


// AppRoutes
// /api

export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/orders', OrdersRouter() );
  
 
    return router;
  }


}