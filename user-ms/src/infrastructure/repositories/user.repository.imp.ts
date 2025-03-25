import { UserEntity } from '../../domain/entities/user/user.entity';
import { createUserEntityFromObject } from '../../domain/entities/user/user.mapper';
import { RegisterUserDTO, UserUpdateDTO } from '../../domain/dtos/auth/user.dto';
import { UserDataSource } from '../../domain/datasources/user.datasource';
import { UserRepository } from '../../domain/repositories/user.repository';

export const UserRepositoryImpl: UserDataSource = {
    async findAll(): Promise<UserEntity[] | null> {
        const users = await UserRepository.findAll();
        return users ? users.map(user => createUserEntityFromObject(user)) : null;
    },
    async findById(id: string): Promise<UserEntity | null> {
        const user = await UserRepository.findById(id);
        return user ? createUserEntityFromObject(user) : null;
    },

    async findByEmail(email: string): Promise<UserEntity | null> {
    
        const user = await UserRepository.findByEmail(email);
        return user ? createUserEntityFromObject(user) : null;
    },

    async save(registerUserDTO: RegisterUserDTO): Promise<UserEntity> {
        const newUser = await UserRepository.save(registerUserDTO);
        return createUserEntityFromObject(newUser);
    },

    async delete(id: string): Promise<UserEntity> {
        const userDeleted = await UserRepository.delete(id);
        return createUserEntityFromObject(userDeleted)
    },
    async update(userUpdateDTO: UserUpdateDTO): Promise<UserEntity> {
        const userUpdated = await UserRepository.update(userUpdateDTO);
        return createUserEntityFromObject(userUpdated);
    },

};
