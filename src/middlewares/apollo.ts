import { ApolloServer, gql } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import UserModel from '../models/User'
import { jwt } from 'jsonwebtoken'

import directives from '../directives'
import resolvers from '../resolvers'

const schema = importSchema('./graphql/schema.graphql')
const typeDefs = gql(schema)

const server = new ApolloServer({
  resolvers,
  typeDefs,
  schemaDirectives: directives,
  context: async ({ req }) => {
    const token = req.headers.authorization!.split(" ")[1] || ''
    const decoded = jwt.verify(token);
    return UserModel.findOne(decoded.id, 'muitosegredocaralho') // store secret at env var
      .exec().then(user => { user })
  },
})

export default {
  set: app => {
    server.applyMiddleware({ app })
  },
}
