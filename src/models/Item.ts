import { Schema, model, Document } from 'mongoose'

export interface Item {
  name: String
  price: Number
}

export interface ItemDocument extends Item, Document {}

const ItemSchema = new Schema<ItemDocument>({
  name: {
    type: String,
    unique: false,
    required: [true, 'Name is required'],
  },
  price: {
    type: Number,
    required: [false],
  },
})

export default model<ItemDocument>('Item', ItemSchema)
