import { Item } from '../models'
import { Store } from '../models'

export const query = {
  item: (_, { id }) => Item.findById(id),
}

export const mutation = {
  createItem: async (_, { storeId, item }) => {
    const store = await Store.findById(storeId)
    if (store === null) {
      return null
    }
    
    const createdItem =  await Item.create(item)
    store.items.push(createdItem)
    await store.save()

    return createdItem
  },
}
