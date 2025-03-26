import { gql } from "graphql-tag";

export const footwearQueries = gql`
  type Query {
    footwear: [Footwear]
    findFootwear(id: ID!): Footwear
  }
   

`;

