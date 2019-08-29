import {
  root as userRoot,
  queries as userQueries,
  mutations as userMutations,
} from './user'

import { mutation as itemMutation, query as itemQuery } from './item'

import { 
  root as storeRoot,
  mutation as storeMutation, 
  query as storeQuery 
} from './store'

import {
  root as cartRoot,
  mutation as cartMutation,
  query as cartQuery
} from './cart'

import {
  mutation as shippingMutation
} from './shipping'

export default {
  ...userRoot,
  ...storeRoot,
  ...cartRoot,
  Query: {
    ...userQueries,
    ...itemQuery,
    ...storeQuery,
    ...cartQuery,
  },
  Mutation: {
    ...userMutations,
    ...itemMutation,
    ...storeMutation,
    ...cartMutation,
    ...shippingMutation,
  },
}
