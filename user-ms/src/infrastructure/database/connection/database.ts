
import { envs } from '../../../config/envs';
import { mongoDB } from '../mongo/mongoDB';
import type { Database } from './database.d';

const databases: Record<string, Database> = {
  mongo: mongoDB,
//   postgres: postgresDatabase,
//   firebase: firebaseDatabase,
};

export const database: Database = databases[envs.DB_TYPE] ?? (() => { 
  throw new Error(`Unsupported database type: ${envs.DB_TYPE}`); 
})();
