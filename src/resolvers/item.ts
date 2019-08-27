import { Item } from '../models'

export const query = {
  item: (_, { id }) => Item.findById(id),
}

export const mutation = {
  createItem: (_, { name, price }) =>
    Item.create({ name, price }).then(document => document),
}
