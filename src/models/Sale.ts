import { Schema, model, Document } from 'mongoose'

export interface Sale extends Document {
  address: String
  recipient: String
  email: String
}

const SaleSchema = new Schema<Sale>({
  address: {
    type: String,
    required: [true],
  },
  recipient: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
})

export default model<Sale>('Sale', SaleSchema)