import Cart from '../models/Cart'
import Store from '../models/Store';

export const mutation = {
  shipping: async (_, { cartId, buyersData }) => {
    const cart = await Cart.findById(cartId)
     if (cart === null) {
       console.log("jasfkjafbaslfs")
       return
     }

     const store = await Store.findById(cart.store)
     console.log(store)
     store!.sales.push(buyersData)
     await store!.save()

     return cart
  }
}