import { Schema, model, Document } from 'mongoose'
import { Item } from './Item';

export interface Store {
  name: String
  items: [Item]
}

export interface StoreDocument extends Store, Document {}

const StoreSchema = new Schema<StoreDocument>({
  name: {
    type: String,
    unique: false,
    required: [true, 'Name is required'],
  },
  items: {
    type: Array,
    required: [false],
  },
})

export default model<StoreDocument>('Store', StoreSchema)
