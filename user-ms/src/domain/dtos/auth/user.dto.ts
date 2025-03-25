import { regexp } from '../../../config/regexp';
import { UserEntity } from '../../entities/user/user.entity';

interface Data {
    object : {[key: string]: any};
};

export interface LoginUserDTO {
    email: string;
    password: string;
};
export interface RegisterUserDTO {
    name: string;
    email: string;
    password: string;
};

export interface UserUpdateDTO extends  Partial<UserEntity>   {
    id: string;
};

const login = ( { object }: Data ): [string?, LoginUserDTO?] => {

    const { email, password } = object;

    if (!email) return ['Missing email'];
    if (!password) return ['Missing password'];
    if (!regexp.email.test(email)) return ['Email is not valid'];
    if (password.length < 6) return ['Password too short'];

    return [undefined, { email, password }];
};



const register = ({ object }: Data): [string?, RegisterUserDTO?] => {

    const {
        name,
        email,
        password,
    } = object;

    if (!name) return ['Missing nombre'];
    if (!email) return ['Missing email'];
    if (!regexp.email.test(email)) return ['Email is not valid'];
    if (!password) return ['Missing password'];
    if (password.length < 6) return ['Password too short'];

    return [undefined, {
        name,
        email,
        password,
    }];
};



const update = ( { object }: Data ): [string?, UserUpdateDTO?] => {

    const { id, email, name, img, active, password, address, age, passport, phone, role } = object;

    return [undefined, { id, email, active, name, img, password, address, age, passport, phone, role }];
};


export const userDTO = {
    login,
    register,
    update,
};
