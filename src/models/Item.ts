import { Schema, model, Document } from 'mongoose'

export interface Item extends Document {
  name: string
  price: number
}
const ItemSchema = new Schema<Item>({
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

export default model<Item>('Item', ItemSchema)
