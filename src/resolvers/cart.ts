import { IResolvers } from 'graphql-tools'
import Store from '../models/Store'
import Item from '../models/Item'
import Cart from '../models/Cart'

const verifyItem = (storeItems, item) => {
  return storeItems.includes(item)
}

export const root: IResolvers = {
  Cart: {
    items: root => root.items.map(itemId => Item.findById(itemId))
  }
}

export const query = {
  cart: (_, { cartId }) => Cart.findById(cartId),
}

export const mutation = {
  createCart: async (_, { storeId, items}) => {
    const store = await Store.findById(storeId)
    if (store === null) {
      return null
    }

    const verifyItems = items.reduce((isValid, item) => isValid && verifyItem(store.items, item), true)

    if (!verifyItems) {
      return Promise.reject("Invalid Item(s)")
    }

    return Cart.create({ store, items })
  },
  addItemOnCart: async (_, { cartId, itemId }) => {
    const cart = await Cart.findById(cartId)

    if (cart === null) {
      return null
    }

    cart.items.push(itemId)
    return cart.save()
  },
}