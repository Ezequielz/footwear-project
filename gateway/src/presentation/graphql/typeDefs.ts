import { gql } from "graphql-tag";
import { userTypeDefs } from "./users/userTypeDefs";
import { productsTypeDefs } from "./products/productTypeDefs";


export const typeDefs = gql`
 
  ${userTypeDefs}
  ${productsTypeDefs}

`;