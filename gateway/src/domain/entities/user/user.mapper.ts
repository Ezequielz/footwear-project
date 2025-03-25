import { UserEntity } from './user.entity';

export const createUserEntityFromObject = (obj: any): UserEntity => ({
    id: obj.id || obj._id, 
    email: obj.email,
    password: obj.password,
    address: obj.address,
    active: obj.active,
    img: obj.img,
    name: obj.name,
    age: obj.age,
    passport: obj.passport,
    phone: obj.phone,
    role: obj.role
});

export const userEntitytoObject = (user: UserEntity) => ({ ...user });
