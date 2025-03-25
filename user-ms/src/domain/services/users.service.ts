import { UserRepositoryImpl } from "../../infrastructure/repositories/user.repository.imp";
import { CustomError } from "../errors/custom.error";
import { UserUpdateDTO } from '../dtos/auth/user.dto';


const getAll = async () => {

    try {

        const users = await UserRepositoryImpl.findAll();

        if (!users) throw CustomError.notFound('Error al encontrar los usuarios');

        return {
            ok: true,
            users
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

};
const getById = async (id: string) => {

    try {

        const user = await UserRepositoryImpl.findById(id);

        if (!user) throw CustomError.notFound('Error al encontrar el usuario');

        return {
            ok: true,
            user
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

};
const update = async (userUpdateDTO: UserUpdateDTO) => {

    try {

        const user = await UserRepositoryImpl.update(userUpdateDTO);

        if (!user) throw CustomError.notFound('Error al actualizar el usuario');

        return {
            ok: true,
            user
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

};

const remove = async (id: string) => {

    try {

        const user = await UserRepositoryImpl.delete(id);

        if (!user) throw CustomError.notFound('Error al eliminar el usuario');

        return {
            ok: true,
            user
        };

    } catch (error) {
        return CustomError.internalServer(`${error}`);
    };

};

export const UsersService = {
    // Methods
    getAll,
    getById,
    update,
    remove,
};