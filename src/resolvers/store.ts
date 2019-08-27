import { IResolvers } from 'graphql-tools'
import { Store, Item } from '../models'
import { StoreDocument } from '../models/Store'

export const root: IResolvers = {
  Store: {
    items: root => Promise.all(root.items.map(id => Item.findById(id))),
  },
}

export const query = {
  store: (_, { id }) => Store.findById(id),
  stores: () => Store.find()
}

export const mutation = {
  createStore: (_, { name }) =>
    Store.create({ name }).then(document => document),
  addItem: (_, { itemId, storeId }) =>
    Store.findById(storeId)
      .then(store => {
        store = store as StoreDocument
        store.items.push(itemId)
        return store.save()
      })
}
