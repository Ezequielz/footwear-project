
import { UserDataSource } from '../datasources/user.datasource';
import { mongoUserDataSource as dataSource } from '../../infrastructure/datasources/mongo/mongo.user.datasource.impl'
// import { postgresUserDataSource as dataSource } from '../../infrastructure/datasource/postgres.user.datasource.impl';
export const UserRepository: UserDataSource = dataSource;