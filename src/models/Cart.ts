import { Schema, model, Document } from 'mongoose'
import { Item } from './Item';

interface Cart extends Document {
  store: String
  items: [Item]
}

const CartSchema = new Schema<Cart>({
  store: {
    type: Schema.Types.ObjectId,
    ref: 'Store',
    required: [true],
  },
  items: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item',
      },
    ],
    required: [true],
  },
})

export default model<Cart>('Cart', CartSchema)
