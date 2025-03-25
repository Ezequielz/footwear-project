import { RegisterUserDTO, UserUpdateDTO } from "../dtos/auth/user.dto";
import { UserEntity } from "../entities/user/user.entity";

export interface UserDataSource {
  findAll(): Promise<UserEntity[] | null>;
  findById(id: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  save(user: RegisterUserDTO): Promise<UserEntity | null>;
  update(userUpdateDTO: UserUpdateDTO): Promise<UserEntity | null>;
  delete(id: string): Promise<UserEntity | null>;
}