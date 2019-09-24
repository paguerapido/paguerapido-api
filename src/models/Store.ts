import { Schema, model, Document } from 'mongoose'
import { Item } from './Item'
import { Sale } from './Sale'

export interface Store extends Document {
  name: string
  items: [Item]
  sales: [Sale]
}

const StoreSchema = new Schema<Store>({
  name: {
    type: String,
    unique: false,
    required: [true, 'Name is required'],
  },
  items: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item',
      },
    ],
    required: [false],
  },
  sales: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Sale',
      },
    ],
  },
})

export default model<Store>('Store', StoreSchema)
