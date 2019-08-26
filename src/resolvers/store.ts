import Store, { StoreDocument } from '../models/Store'
import Item from '../models/Item'

export const query = {
  store: (_: any, { id }: any) =>
    Store.findById(id)
      .exec()
      .then(store => store),
}

export const mutation = {
  createStore: (_: any, { name }: any) =>
    Store.create({ name }).then(document => document),
  addItem: (_: any, { item, storeId }: any) =>
    Store.findById(storeId)
      .exec()
      .then(store => {
        const { items } = store as StoreDocument
        return Item.findById(item)
          .exec()
          .then(data => {
            const updatedStore = {
              ...store,
              items: [...items, data],
            }
            return Store.update(null, updatedStore)
              .exec()
              .then(() => updatedStore)
          })
      }),
}
