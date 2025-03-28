import { gql } from "graphql-tag";


export const footwearMutations = gql`
  type Mutation {
    updateFootwear(footwearUpdateDTO: FootwearUpdateDTO!): Footwear
    
    createFootwear(footwearCreateDTO: FootwearCreateDTO!): Footwear
  }
`;
