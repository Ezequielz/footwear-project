import mongoose from 'mongoose';
import { envs } from '../../../config/envs';
import type { Database } from '../connection/database.d';

export const mongoDB: Database = {
  connect: async () => {
    console.log('Connecting to MongoDB...');
    try {
      await mongoose.connect(envs.MONGO_URL, { dbName: envs.MONGO_DB_NAME });
      console.log('Database MongoDB connected successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  },
  disconnect: async () => {
    try {
      await mongoose.disconnect();
      console.log('MongoDB disconnected.');
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error);
    }
  }
};
