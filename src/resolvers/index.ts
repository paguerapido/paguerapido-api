import {
  root as userRoot,
  queries as userQueries,
  mutations as userMutations,
} from './user'

export default {
  ...userRoot,
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
}
