import { UserDocument } from '../models/User'

declare global {
  interface Context {
    user: UserDocument
  }

  namespace Express {
    interface User extends UserDocument {
      _id: string
    }
  }
}
