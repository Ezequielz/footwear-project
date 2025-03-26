import { productResolvers } from './products/productResolvers';
import { userResolvers } from './users/userResolvers';

// Definir los resolvers
export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
  },
  Mutation: {
    ...productResolvers.Mutation, 
  },
};
