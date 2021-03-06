import { ApolloServer, gql } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import UserModel from '../models/User'
import * as jwt from 'jsonwebtoken'

import directives from '../directives'
import resolvers from '../resolvers'

const schema = importSchema('./graphql/schema.graphql')
const typeDefs = gql(schema)
const secret = process.env.JWT_SECRET || 'not-secret'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  schemaDirectives: directives,
  cacheControl: {
    defaultMaxAge: 60,
  },
  context: async ({ req }) => {
    if (!req.headers.authorization) {
      return {}
    }
    const token = req.headers.authorization!.split(" ")[1]
    const decoded = jwt.verify(token, secret)
    const { _id } = decoded
    return UserModel.findOne({ _id } )
      .exec().then(user => {
        return ({ user })
      })
  },
})

export default {
  set: app => {
    server.applyMiddleware({ app })
  },
}
