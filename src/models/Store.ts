import { Schema, model, Document } from 'mongoose'
import { Item } from './Item'
import { Sale } from './Sale';

export interface Store {
  name: string
  items: [Item]
  sales: [Sale]
}

export interface StoreDocument extends Store, Document {}

const StoreSchema = new Schema<StoreDocument>({
  name: {
    type: String,
    unique: false,
    required: [true, 'Name is required'],
  },
  items: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ],
    required: [false],
  },
  sales: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Sale'
      }
    ]
  }
})

export default model<StoreDocument>('Store', StoreSchema)
