
export interface UserEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    active: boolean;
    address?: string;
    age?: Date;
    img?: string;
    passport?: string;
    phone?: string;
    role?: Rol;
}

type Rol = 'ADMIN' | 'USER';