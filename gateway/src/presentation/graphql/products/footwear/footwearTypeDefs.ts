import { gql } from 'graphql-tag';
import { footwearQueries } from './footwear.queries';
import { footwearMutations } from './footwear.mutations';

export const footwearTypeDefs = gql`


  ${footwearQueries}
  ${footwearMutations}  

  type Footwear {
    id: ID!
    title: String!
    description: String!
    gender: Gender!
    modelNumber:  String!
    slug: String!
    price: Int!
    sizes: [Size]!
    color: String!
    image: String!
    hoverImage: String!
  }
  type Size {
    sku: String!
    stock: Int!
    status: AvailabilityStatus!
    size: String!
  }

  enum Gender {
    KID
    WOMAN
    MEN
    UNISEX
  }

  enum AvailabilityStatus {
    IN_STOCK
    NOT_AVAILABLE
  }
 

  input FootwearUpdateDTO {
    id: ID!
    title: String
    description: String
    gender: Gender
    modelNumber: String
    slug: String
    price: Int
    sizes: [SizeDTO]
    color: String
    image: String
    hoverImage: String
  }

  input FootwearCreateDTO {
    title: String!
    description: String!
    gender: Gender!
    modelNumber: String!
    slug: String!
    price: Int!
    sizes: [SizeDTO]
    color: String!
    image: String!
    hoverImage: String!
  }

  
  input SizeDTO {
    sku: String!
    stock: Int!
    status: AvailabilityStatus!
    size: String!
  }
 
`;


