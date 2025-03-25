import { bcryptAdapter } from "../../../config/bcrypt.adapter";
import { UserEntity } from "../../../domain/entities/user/user.entity";

interface SeedData {
    users: UserSeed[]
}

interface UserSeed extends Omit<UserEntity, 'id'> { }


export const seedData: SeedData = {
    users: [
        { name: 'admin', active: true, email: 'admin@admin.com', role: 'ADMIN', password: bcryptAdapter.hash('123456') },
        { name: 'Test 1', active: true, email: 'test1@gmail.com', password: bcryptAdapter.hash('123456') },
        { name: 'Test 2', active: true, email: 'test2@gmail.com', password: bcryptAdapter.hash('123456') },
        { name: 'Test 3', active: true, email: 'test3@gmail.com', password: bcryptAdapter.hash('123456') },
        { name: 'Test 4', active: true, email: 'test4@gmail.com', password: bcryptAdapter.hash('123456') },
        { name: 'Test 5', active: true, email: 'test5@gmail.com', password: bcryptAdapter.hash('123456') },
        { name: 'Test 6', active: false, email: 'inactive@inactive.com', password: bcryptAdapter.hash('123456') },
    ],
}