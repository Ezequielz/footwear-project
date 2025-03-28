import { prisma } from './prisma';
import { Database } from '../connection/database.d';

export const postgresDatabase: Database = {
  connect: async () => {
    console.log('Connecting to PostgreSQL...');
    try {
      await prisma.$connect();
    console.log('Database PostgreSQL connected successfully');
    } catch (error) {
      console.error('Error connecting to PostgreSQL:', error);
    }
  },
  disconnect: async () => {
    console.log('Disconnecting from PostgreSQL...');
    try {
      await prisma.$disconnect();
      console.log('PostgreSQL disconnected.');
    } catch (error) {
      console.error('Error disconnecting from PostgreSQL:', error);
    }
  }
};


