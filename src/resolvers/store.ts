import Store, { StoreDocument } from '../models/Store'

export const query = {
  store: (_, { id }) => Store.findById(id),
  stores: () => Store.find()
}

export const mutation = {
  createStore: (_, { name }) =>
    Store.create({ name }).then(document => document),
  addItem: (_, { item, storeId }) =>
    Store.findById(storeId)
      .then(store => {
        const { items } = store as StoreDocument
        return Store.update(null, {
          ...store,
          item: [...items, item]
        })
      })
}
