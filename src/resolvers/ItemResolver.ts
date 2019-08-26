import Item from '../models/Item';

export const query = {
  item: (_:any, { id }: any) => Item.findById(id).exec().then(document => document),
}  

export const mutation = {
  createItem: (_:any, { name, price }: any) => Item.create({ name, price}).then(document => document),
}

