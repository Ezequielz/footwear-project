import { envs } from '../../../config/envs';
import { postgresDatabase } from '../postgresDB/postgreDataBase';
import type { Database } from './database.d';

const databases: Record<string, Database> = {
  // mongo: mongoDB,
  postgres: postgresDatabase,
//   firebase: firebaseDatabase,
};

export const database: Database = databases[envs.DB_TYPE] ?? (() => { 
  throw new Error(`Unsupported database type: ${envs.DB_TYPE}`); 
})();
