import { Router } from 'express'
import 'graphql-import-node'
import bodyParser from 'body-parser'
import { ApolloServer } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { mutation as itemMutation,
         query as itemQuery } from '../resolvers/ItemResolver'
import { mutation as storeMutation,
         query as storeQuery } from '../resolvers/StoreResolver'
import typeDefs from '../../graphql/schema.graphql'

const router = Router()

const resolvers = {
  Mutation: {
    ...storeMutation,
    ...itemMutation,
  },
  Query: {
    ...itemQuery,
    ...storeQuery,
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// router.post('', bodyParser.json(), new ApolloServer({ typeDefs, resolvers }))

export default {typeDefs, resolvers};