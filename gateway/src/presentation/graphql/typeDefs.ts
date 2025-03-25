import { gql } from "graphql-tag";
import { userTypeDefs } from "./users/userTypeDefs";

export const typeDefs = gql`
 
  ${userTypeDefs}

`;