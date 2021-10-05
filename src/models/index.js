// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Producto, Todo } = initSchema(schema);

export {
  Producto,
  Todo
};