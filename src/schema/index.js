const { makeExecutableSchema } = require('graphql-tools');
import { resolvers } from "../resolvers";

// Define types
const typeDefs = `
  type User {
    id: ID! 
    email: String!
    ethereumAddress: String!
    hasConfirmedEmail: Boolean
    tokenCount: Int!
  }

  type TokenGift {
    id: ID! 
    transactionHash: String
    isForReferral: Boolean
  }

  type TokenCountPayload {
    count: Int!
  }

  type Query {
    User(id: ID): User
    TokenGift(id: ID): TokenGift
    allTokenGifts: [TokenGift]
    tokenCount: TokenCountPayload
    userTokenBalance(ethereumAddress: String!): TokenCountPayload
  }

  type ConfirmEmailPayload {
    id: ID!
    ethereumAddress: String
    email: String
  }

  type CreateUserPayload {
    id: ID!
    email: String
    ethereumAddress: String
  }

  type Transaction {
    id: ID!
  }

  type Mutation {
    confirmEmail(confirmationToken: String!): User
    createUser(email: String!, ethereumAddress: String!, referrerId: ID): CreateUserPayload
    payoutTokenGift(id: String!): TokenGift
    payoutNextTokenGifts: [TokenGift]
  }
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers });