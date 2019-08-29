import { IResolvers } from 'graphql-tools'
import Store from '../models/Store'
import Item from '../models/Item'
import Cart from '../models/Cart'

export const root: IResolvers = {
  Cart: {
    store: root => Store.findById(root._id),
    items: root => root.items.map(itemId => Item.findById(itemId))
  }
}

export const query = {
  getCart: (_, { cartId }) => Cart.findById(cartId),
}

export const mutation = {
  createCart: async (_, { storeId, items}) => Cart.create({ store: storeId, items }),
  addItemOnCart: async (_, { cartId, itemId }) => {
    const cart = await Cart.findById(cartId)

    if (cart === null) {
      return null
    }

    cart.items.push(itemId)
    return cart.save()
  },
}