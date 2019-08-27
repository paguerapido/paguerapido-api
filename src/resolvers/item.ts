import Item from '../models/Item'
import Store, { StoreDocument } from '../models/Store'

export const query = {
  item: (_, { id }) => Item.findById(id),
  items: (_, { storeId }) => Store.findById(storeId)
    .then(store => {
      const { items } = store as StoreDocument
      return items.map(itemId => Item.findById(itemId))
    })
}

export const mutation = {
  createItem: (_, { name, price }) =>
    Item.create({ name, price }).then(document => document),
}
