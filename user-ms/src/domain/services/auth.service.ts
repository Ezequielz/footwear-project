import { bcryptAdapter } from '../../config/bcrypt.adapter';
import { JwtAdapter } from '../../config/jwt.adapter';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository.imp';
import { LoginUserDTO, RegisterUserDTO } from '../dtos/auth/user.dto';
import { createUserEntityFromObject } from '../entities/user/user.mapper';
import { CustomError } from '../errors/custom.error';
import { TokenDTO } from '../dtos/auth/token.dto';


const registerUser = async (registerUserDto: RegisterUserDTO) => {

  const existUser = await UserRepositoryImpl.findByEmail(registerUserDto.email);

  if (existUser) throw CustomError.badRequest('Email already exist');

  try {

    registerUserDto.password = bcryptAdapter.hash(registerUserDto.password);

    const userSaved = await UserRepositoryImpl.save(registerUserDto);
    const { password, ...newUser } = createUserEntityFromObject(userSaved);

    const token = await JwtAdapter.generateToken({ id: newUser.id, email: newUser.email });
    if (!token) throw CustomError.internalServer('Error while creating JWT');

    return {
      ok: true,
      user: {
        ...newUser,
        token,
      },
    };

  } catch (error) {
    return CustomError.internalServer(`${error}`);
  };

};
const loginUser = async (loginUserDTO: LoginUserDTO) => {

  const user = await UserRepositoryImpl.findByEmail(loginUserDTO.email);

  if (!user) throw CustomError.badRequest('Invalid Credentials');

  const isMatching = bcryptAdapter.compare(loginUserDTO.password, user.password);
  if (!isMatching) throw CustomError.badRequest('Invalid Credentials');

  const { password, ...restUser } = createUserEntityFromObject(user);


  const token = await JwtAdapter.generateToken({ id: user.id, email: user.email });
  if (!token) throw CustomError.internalServer('Error while creating JWT');


  return {
    ok: true,
    user: {
      ...restUser,
      token,
    },
  }


};
const renewToken = async (tokenDTO: TokenDTO) => {

  const token = await JwtAdapter.generateToken({ id: tokenDTO.id, email: tokenDTO.email });
  if (!token) throw CustomError.internalServer('No se pudo renovar el token');

  return {
    ok: true,
    token
  };
};

export const AuthService = {
  // Methods
  registerUser,
  loginUser,
  renewToken,
};