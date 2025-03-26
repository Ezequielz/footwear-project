import { gql } from "graphql-tag";
import { footwearTypeDefs } from "./footwear/footwearTypeDefs";

export const productsTypeDefs = gql`

  ${footwearTypeDefs}


`;