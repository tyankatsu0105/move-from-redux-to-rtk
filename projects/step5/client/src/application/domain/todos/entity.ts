export type Todo = {
  id: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  isDone: boolean;
};

export type TodoEntities = Record<Todo["id"], Todo>;
