import { ApolloServer, gql } from 'apollo-server-express'
import { importSchema } from 'graphql-import'

import directives from '../directives'
import resolvers from '../resolvers'

const schema = importSchema('./graphql/schema.graphql')
const typeDefs = gql(schema)

const server = new ApolloServer({
  resolvers,
  typeDefs,
  schemaDirectives: directives,
  context: ({ req }) => ({
    user: req.user,
  }),
})

export default {
  set: app => {
    server.applyMiddleware({ app })
  },
}
