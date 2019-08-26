import {
  root as userRoot,
  queries as userQueries,
  mutations as userMutations,
} from './user'

import { 
  mutation as itemMutation,
  query as itemQuery 
} from './item'
import { 
  mutation as storeMutation,
  query as storeQuery 
} from './store'

export default {
  ...userRoot,
  Query: {
    ...userQueries,
    ...itemQuery,
    ...storeQuery
  },
  Mutation: {
    ...userMutations,
    ...itemMutation,
    ...storeMutation
  },
}
