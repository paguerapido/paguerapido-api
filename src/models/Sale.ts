import { Schema, model, Document } from 'mongoose'

export interface Sale {
  address: String
  recipient: String
  email: String
}

export interface SaleDocument extends Sale, Document {}

const SaleSchema = new Schema<SaleDocument>({
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

export default model<SaleDocument>('Sale', SaleSchema)