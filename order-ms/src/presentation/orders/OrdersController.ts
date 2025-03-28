import { Request, Response } from 'express';
import { handleError } from '../helpers/handleError';

import { footwearDTO } from '../../domain/dtos/product/footwear.dto';
import { OrdersService } from '../../domain/services/orders.service';

const getAll = (req: Request, res: Response) => {


    OrdersService.getAll()
        .then((orders) => res.json(orders))
        .catch((error) => handleError(error, res));


};
const getById = (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {

        res.status(400).json({ ok: false, error: 'id is required' });
        return;
    };
    OrdersService.getById(id!)
        .then((order) => res.json(order))
        .catch((error) => handleError(error, res));
};

const update = (req: Request, res: Response) => {
    const { id } = req.params;
    const object = req.body;
  
    const [error, footwear] = footwearDTO.update({ id, ...object });
    if (error) {

        res.status(400).json({ ok: false, error });
        return;
    };

   
    OrdersService.update(footwear!)
        .then((footwear) => res.json(footwear))
        .catch((error) => handleError(error, res));
};

const remove = (req: Request, res: Response) => {

    const { id } = req.params;
    if (!id) {

        res.status(400).json({ ok: false, error: 'id is required' });
        return;
    };

    OrdersService.remove(id!)
        .then((order) => res.json(order))
        .catch((error) => handleError(error, res));
};

const create= (  req: Request, res: Response) => {
    const object = req.body;

    const [error, footwear] = footwearDTO.create(object);
    if (error) {

        res.status(400).json({ ok: false, error });
        return;
    };

    OrdersService.create(footwear!)
        .then((order) => res.json(order))
        .catch((error) => handleError(error, res));

}


export const OrdersController = {
    create,
    getAll,
    getById,
    update,
    remove,
};