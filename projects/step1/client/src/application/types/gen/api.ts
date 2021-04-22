import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * ISO 8601準拠 YYYY-MM-DDTHH:mm:ss.sssZ
   * ex: 2011-10-05T14:48:00.000Z
   */
  DateTime: string;
};

export type CreateTodoInput = {
  id: Scalars['ID'];
  description: Scalars['String'];
};

export type CreateTodoPayload = {
  todo?: Maybe<Todo>;
};


export type Mutation = {
  createTodo: CreateTodoPayload;
  updateTodo: UpdateTodoPayload;
  removeTodo: RemoveTodoPayload;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};


export type MutationRemoveTodoArgs = {
  input: RemoveTodoInput;
};

export type Query = {
  todos: Array<Maybe<Todo>>;
};

export type RemoveTodoInput = {
  id: Scalars['ID'];
};

export type RemoveTodoPayload = {
  todo?: Maybe<Todo>;
};

export type Todo = {
  id: Scalars['ID'];
  isDone: Scalars['Boolean'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UpdateTodoInput = {
  id: Scalars['ID'];
  isDone: Scalars['Boolean'];
};

export type UpdateTodoPayload = {
  todo?: Maybe<Todo>;
};

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = { createTodo: { todo?: Maybe<Pick<Todo, 'id' | 'description' | 'isDone' | 'createdAt' | 'updatedAt'>> } };

export type RemoveTodoMutationVariables = Exact<{
  input: RemoveTodoInput;
}>;


export type RemoveTodoMutation = { removeTodo: { todo?: Maybe<Pick<Todo, 'id' | 'description' | 'isDone' | 'createdAt' | 'updatedAt'>> } };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { todos: Array<Maybe<Pick<Todo, 'id' | 'description' | 'isDone' | 'createdAt' | 'updatedAt'>>> };

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { updateTodo: { todo?: Maybe<Pick<Todo, 'id' | 'description' | 'isDone' | 'createdAt' | 'updatedAt'>> } };


export const CreateTodoDocument = gql`
    mutation createTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    todo {
      id
      description
      isDone
      createdAt
      updatedAt
    }
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const RemoveTodoDocument = gql`
    mutation removeTodo($input: RemoveTodoInput!) {
  removeTodo(input: $input) {
    todo {
      id
      description
      isDone
      createdAt
      updatedAt
    }
  }
}
    `;
export type RemoveTodoMutationFn = Apollo.MutationFunction<RemoveTodoMutation, RemoveTodoMutationVariables>;
export type RemoveTodoMutationResult = Apollo.MutationResult<RemoveTodoMutation>;
export type RemoveTodoMutationOptions = Apollo.BaseMutationOptions<RemoveTodoMutation, RemoveTodoMutationVariables>;
export const TodosDocument = gql`
    query todos {
  todos {
    id
    description
    isDone
    createdAt
    updatedAt
  }
}
    `;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;
export function refetchTodosQuery(variables?: TodosQueryVariables) {
      return { query: TodosDocument, variables: variables }
    }
export const UpdateTodoDocument = gql`
    mutation updateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    todo {
      id
      description
      isDone
      createdAt
      updatedAt
    }
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;