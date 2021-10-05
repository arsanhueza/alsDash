import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Producto {
  readonly id: string;
  readonly tipo?: string;
  readonly hornada?: string;
  readonly calidad?: string;
  readonly nrobulto?: string;
  readonly peso?: string;
  readonly dimension?: string;
  readonly fechadespacho?: string;
  readonly fechaescaneo?: string;
  readonly horaescaneo?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Producto, ProductoMetaData>);
  static copyOf(source: Producto, mutator: (draft: MutableModel<Producto, ProductoMetaData>) => MutableModel<Producto, ProductoMetaData> | void): Producto;
}

export declare class Todo {
  readonly id: string;
  readonly nroguia?: string;
  readonly rutcliente?: string;
  readonly estado?: string;
  readonly pesototal?: string;
  readonly cliente?: string;
  readonly fechadespacho?: string;
  readonly nrobultos?: string;
  readonly producto?: string;
  readonly turno?: string;
  readonly nave?: string;
  readonly fechaescaneo?: string;
  readonly horaescaneo?: string;
  readonly puerto?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}