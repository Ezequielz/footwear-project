import { UserModel } from "../mongo/models/user.model";
import { mongoDB } from "../mongo/mongoDB";
import { seedData } from "./seedData";



(async () => {
    await mongoDB.connect()

    await main();


    await mongoDB.disconnect();
})();


async function main() {

    // 0. Borrar todo!
    await Promise.all([
        UserModel.deleteMany(),
    ])


    // 1. Crear usuarios
    console.log('CREATING USERS');
    const users = await UserModel.insertMany(seedData.users);
    console.log('USERS SEEDED ', users.length + ' USERS created');

    console.log('---------------------');
    console.log('SEEDED SUCCESSFULLY');
    console.log('---------------------');


}