import { CustomError } from '../errors/custom.error';
import { FootwearRepositoryImpl } from '../../infrastructure/repositories/footwear.repository.imp';
import type { FootwearCreateDTO, FootwearUpdateDTO } from '../dtos/product/footwear.dto';


const getAll = async () => {

    try {

        const calzado = await FootwearRepositoryImpl.findAll();

        if (!calzado) throw CustomError.notFound('Error al encontrar los calzados');

        return {
            ok: true,
            products: calzado
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

};
const getById = async (id: string) => {

    try {

        const calzado = await FootwearRepositoryImpl.findById(id);

        if (!calzado) throw CustomError.notFound('Error al encontrar el calzado');

        return {
            ok: true,
            product: calzado
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

        const calzado = await FootwearRepositoryImpl.delete(id);

        if (!calzado) throw CustomError.notFound('Error al eliminar el producto');

        return {
            ok: true,
            product: calzado
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

};

const create = async ( footwearCreateDTO: FootwearCreateDTO ) => {
    try {

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