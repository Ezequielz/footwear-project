import { userResolvers } from './users/userResolvers';

// Definir los resolvers
export const resolvers = {
  Query: {
    ...userResolvers.Query,
  },
};
