import { Schema, model, Document } from 'mongoose'
import { Store } from './Store';
import { Item } from './Item';

export interface Cart {
  store: Store
  items: [Item]
}

export interface CartDocument extends Cart, Document {}

const CartSchema = new Schema<CartDocument>({
  store: {
    type: Schema.Types.ObjectId,
    ref: 'Store',
    required: [true]
  },
  items: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ],
    required: [true]
  }
})

export default model<CartDocument>('Cart', CartSchema)