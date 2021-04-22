import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  __typename?: 'CreateTodoPayload';
  todo?: Maybe<Todo>;
};


export type Mutation = {
  __typename?: 'Mutation';
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
  __typename?: 'Query';
  todos: Array<Maybe<Todo>>;
};

export type RemoveTodoInput = {
  id: Scalars['ID'];
};

export type RemoveTodoPayload = {
  __typename?: 'RemoveTodoPayload';
  todo?: Maybe<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
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
  __typename?: 'UpdateTodoPayload';
  todo?: Maybe<Todo>;
};

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: (
    { __typename?: 'CreateTodoPayload' }
    & { todo?: Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'description' | 'isDone' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type RemoveTodoMutationVariables = Exact<{
  input: RemoveTodoInput;
}>;


export type RemoveTodoMutation = (
  { __typename?: 'Mutation' }
  & { removeTodo: (
    { __typename?: 'RemoveTodoPayload' }
    & { todo?: Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'description' | 'isDone' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = (
  { __typename?: 'Query' }
  & { todos: Array<Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'description' | 'isDone' | 'createdAt' | 'updatedAt'>
  )>> }
);

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoInput;
}>;


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & { updateTodo: (
    { __typename?: 'UpdateTodoPayload' }
    & { todo?: Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'description' | 'isDone' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  CreateTodoInput: CreateTodoInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateTodoPayload: ResolverTypeWrapper<CreateTodoPayload>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RemoveTodoInput: RemoveTodoInput;
  RemoveTodoPayload: ResolverTypeWrapper<RemoveTodoPayload>;
  Todo: ResolverTypeWrapper<Todo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  UpdateTodoInput: UpdateTodoInput;
  UpdateTodoPayload: ResolverTypeWrapper<UpdateTodoPayload>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  CreateTodoInput: CreateTodoInput;
  ID: Scalars['ID'];
  String: Scalars['String'];
  CreateTodoPayload: CreateTodoPayload;
  DateTime: Scalars['DateTime'];
  Mutation: {};
  Query: {};
  RemoveTodoInput: RemoveTodoInput;
  RemoveTodoPayload: RemoveTodoPayload;
  Todo: Todo;
  Boolean: Scalars['Boolean'];
  UpdateTodoInput: UpdateTodoInput;
  UpdateTodoPayload: UpdateTodoPayload;
}>;

export type CreateTodoPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTodoPayload'] = ResolversParentTypes['CreateTodoPayload']> = ResolversObject<{
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createTodo?: Resolver<ResolversTypes['CreateTodoPayload'], ParentType, ContextType, RequireFields<MutationCreateTodoArgs, 'input'>>;
  updateTodo?: Resolver<ResolversTypes['UpdateTodoPayload'], ParentType, ContextType, RequireFields<MutationUpdateTodoArgs, 'input'>>;
  removeTodo?: Resolver<ResolversTypes['RemoveTodoPayload'], ParentType, ContextType, RequireFields<MutationRemoveTodoArgs, 'input'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  todos?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType>;
}>;

export type RemoveTodoPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveTodoPayload'] = ResolversParentTypes['RemoveTodoPayload']> = ResolversObject<{
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDone?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateTodoPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTodoPayload'] = ResolversParentTypes['UpdateTodoPayload']> = ResolversObject<{
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  CreateTodoPayload?: CreateTodoPayloadResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RemoveTodoPayload?: RemoveTodoPayloadResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  UpdateTodoPayload?: UpdateTodoPayloadResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
