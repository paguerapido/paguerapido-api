import { IResolvers } from 'graphql-tools'
import { Store, Item } from '../models'

export const root: IResolvers = {
  Store: {
    items: root => Promise.all(root.items.map(id => Item.findById(id))),
  },
}

export const query = {
  store: (_, { id }) => Store.findById(id),
  stores: () => Store.find(),
  searchItem: async (_, { name, storeId }) => {
    const store = await Store.findById(storeId).populate('items')

    if (store === null) {
      return null
    }

    return store.items.filter(item => item.name.includes(name))
  },
}

export const mutation = {
  createStore: (_, { name }) =>
    Store.create({ name }).then(document => document),
}
