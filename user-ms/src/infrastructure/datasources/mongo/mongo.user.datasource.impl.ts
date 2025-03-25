import { UserDataSource } from '../../../domain/datasources/user.datasource';
import { UserUpdateDTO } from '../../../domain/dtos/auth/user.dto';
import { UserEntity } from '../../../domain/entities/user/user.entity';
import { createUserEntityFromObject } from '../../../domain/entities/user/user.mapper';
import { UserModel } from '../../database/mongo/models/user.model';



export const mongoUserDataSource: UserDataSource = {
  async findAll() {
    const users = await UserModel.find();
    return users.map(user => createUserEntityFromObject(user));
  },

  async findById(id: string) {
    const user = await UserModel.findById(id);
    return user ?  createUserEntityFromObject(user) : null;
  },

  async findByEmail(email: string) {
    const user = await UserModel.findOne({ email });
    return user ?  createUserEntityFromObject(user) : null;
  },

  async save(user: UserEntity) {
    const newUser = new UserModel(user);
    await newUser.save();
    return createUserEntityFromObject(newUser);
  },

  async update(userUpdateDTO: UserUpdateDTO) {
    const userExist = await UserModel.findById(userUpdateDTO.id);
    if (!userExist) return null;
    
    const updatedUser = await UserModel.findByIdAndUpdate(
      userUpdateDTO.id,
      userUpdateDTO,
      { new: true }
    );

    return createUserEntityFromObject(updatedUser)
  },

  async delete(id: string) {
    const userDeleted = await UserModel.findByIdAndDelete(id);
    return userDeleted ? createUserEntityFromObject(userDeleted) : null;
  }
};
