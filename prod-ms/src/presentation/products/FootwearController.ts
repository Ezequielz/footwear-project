import { Request, Response } from 'express';
import { handleError } from '../helpers/handleError';
import { FootwearService } from '../../domain/services/footwear.service';
import { footwearDTO } from '../../domain/dtos/product/footwear.dto';

const getAll = (req: Request, res: Response) => {


    FootwearService.getAll()
        .then((footwear) => res.json(footwear))
        .catch((error) => handleError(error, res));


};
const getById = (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {

        res.status(400).json({ ok: false, error: 'id is required' });
        return;
    };
    FootwearService.getById(id!)
        .then((footwear) => res.json(footwear))
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

   
    FootwearService.update(footwear!)
        .then((footwear) => res.json(footwear))
        .catch((error) => handleError(error, res));
};

const remove = (req: Request, res: Response) => {

    const { id } = req.params;
    if (!id) {

        res.status(400).json({ ok: false, error: 'id is required' });
        return;
    };

    FootwearService.remove(id!)
        .then((footwear) => res.json(footwear))
        .catch((error) => handleError(error, res));
};

const create= (  req: Request, res: Response) => {
    const object = req.body;

    const [error, footwear] = footwearDTO.create(object);
    if (error) {

        res.status(400).json({ ok: false, error });
        return;
    };

    FootwearService.create(footwear!)
        .then((footwear) => res.json(footwear))
        .catch((error) => handleError(error, res));

}


export const FootweearController = {
    create,
    getAll,
    getById,
    update,
    remove,
};