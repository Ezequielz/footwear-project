
import { footwearResolvers } from "./footwear/footwearResolvers";

export const productResolvers = {
  Query: {
    ...footwearResolvers.Query,
  },
  Mutation: {
    ...footwearResolvers.Mutation,
  },
};

