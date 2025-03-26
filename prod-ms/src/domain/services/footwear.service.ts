import { CustomError } from '../errors/custom.error';
import { FootwearRepositoryImpl } from '../../infrastructure/repositories/footwear.repository.imp';
import type { FootwearCreateDTO, FootwearUpdateDTO } from '../dtos/product/footwear.dto';


const getAll = async () => {

    try {

        const footwear = await FootwearRepositoryImpl.findAll();

        if (!footwear) throw CustomError.notFound('Error al encontrar los calzados');

        return {
            ok: true,
            products: footwear
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

};
const getById = async (id: string) => {

    try {

        const footwear = await FootwearRepositoryImpl.findById(id);

        if (!footwear) throw CustomError.notFound('Error al encontrar el calzado');

        return {
            ok: true,
            product: footwear
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

};
const update = async (footwearUpdateDTO: FootwearUpdateDTO) => {

    try {

        const footwear = await FootwearRepositoryImpl.update(footwearUpdateDTO);

        if (!footwear) throw CustomError.notFound('Error al actualizar el calzado');

        return {
            ok: true,
            footwear
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

};

const remove = async (id: string) => {

    try {

        const footwear = await FootwearRepositoryImpl.delete(id);

        if (!footwear) throw CustomError.notFound('Error al eliminar el producto');

        return {
            ok: true,
            product: footwear
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

};

const create = async ( footwearCreateDTO: FootwearCreateDTO ) => {
    try {
        console.log(footwearCreateDTO)
        const footwear = await FootwearRepositoryImpl.save(footwearCreateDTO);

        if (!footwear) throw CustomError.notFound('Error al crear el calzado');

        return {
            ok: true,
            footwear
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

}

export const FootwearService = {
    // Methods
    create,
    getAll,
    getById,
    update,
    remove,
};