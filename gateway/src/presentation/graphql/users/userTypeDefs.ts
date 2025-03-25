import { gql } from 'graphql-tag';

export const userTypeDefs = gql`
 type Query {
    users: [User]
    findUser(id: ID!): User
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    active: Boolean!
    address: String
    age: String
    img: String
    passport: String
    phone: String
    role: Rol!
  }

  enum Rol {
    ADMIN
    USER
  }
`;
