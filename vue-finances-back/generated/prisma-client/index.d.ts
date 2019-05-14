// Code generated by Prisma (prisma@1.28.5). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  account: (where?: AccountWhereInput) => Promise<boolean>;
  category: (where?: CategoryWhereInput) => Promise<boolean>;
  record: (where?: RecordWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  account: (where: AccountWhereUniqueInput) => AccountPromise;
  accounts: (
    args?: {
      where?: AccountWhereInput;
      orderBy?: AccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Account>;
  accountsConnection: (
    args?: {
      where?: AccountWhereInput;
      orderBy?: AccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => AccountConnectionPromise;
  category: (where: CategoryWhereUniqueInput) => CategoryPromise;
  categories: (
    args?: {
      where?: CategoryWhereInput;
      orderBy?: CategoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Category>;
  categoriesConnection: (
    args?: {
      where?: CategoryWhereInput;
      orderBy?: CategoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CategoryConnectionPromise;
  record: (where: RecordWhereUniqueInput) => RecordPromise;
  records: (
    args?: {
      where?: RecordWhereInput;
      orderBy?: RecordOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Record>;
  recordsConnection: (
    args?: {
      where?: RecordWhereInput;
      orderBy?: RecordOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => RecordConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAccount: (data: AccountCreateInput) => AccountPromise;
  updateAccount: (
    args: { data: AccountUpdateInput; where: AccountWhereUniqueInput }
  ) => AccountPromise;
  updateManyAccounts: (
    args: { data: AccountUpdateManyMutationInput; where?: AccountWhereInput }
  ) => BatchPayloadPromise;
  upsertAccount: (
    args: {
      where: AccountWhereUniqueInput;
      create: AccountCreateInput;
      update: AccountUpdateInput;
    }
  ) => AccountPromise;
  deleteAccount: (where: AccountWhereUniqueInput) => AccountPromise;
  deleteManyAccounts: (where?: AccountWhereInput) => BatchPayloadPromise;
  createCategory: (data: CategoryCreateInput) => CategoryPromise;
  updateCategory: (
    args: { data: CategoryUpdateInput; where: CategoryWhereUniqueInput }
  ) => CategoryPromise;
  updateManyCategories: (
    args: { data: CategoryUpdateManyMutationInput; where?: CategoryWhereInput }
  ) => BatchPayloadPromise;
  upsertCategory: (
    args: {
      where: CategoryWhereUniqueInput;
      create: CategoryCreateInput;
      update: CategoryUpdateInput;
    }
  ) => CategoryPromise;
  deleteCategory: (where: CategoryWhereUniqueInput) => CategoryPromise;
  deleteManyCategories: (where?: CategoryWhereInput) => BatchPayloadPromise;
  createRecord: (data: RecordCreateInput) => RecordPromise;
  updateRecord: (
    args: { data: RecordUpdateInput; where: RecordWhereUniqueInput }
  ) => RecordPromise;
  updateManyRecords: (
    args: { data: RecordUpdateManyMutationInput; where?: RecordWhereInput }
  ) => BatchPayloadPromise;
  upsertRecord: (
    args: {
      where: RecordWhereUniqueInput;
      create: RecordCreateInput;
      update: RecordUpdateInput;
    }
  ) => RecordPromise;
  deleteRecord: (where: RecordWhereUniqueInput) => RecordPromise;
  deleteManyRecords: (where?: RecordWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  account: (
    where?: AccountSubscriptionWhereInput
  ) => AccountSubscriptionPayloadSubscription;
  category: (
    where?: CategorySubscriptionWhereInput
  ) => CategorySubscriptionPayloadSubscription;
  record: (
    where?: RecordSubscriptionWhereInput
  ) => RecordSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AccountOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type Operation = "DEBIT" | "CREDIT";

export type CategoryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "description_ASC"
  | "description_DESC"
  | "operation_ASC"
  | "operation_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type RecordOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "amount_ASC"
  | "amount_DESC"
  | "type_ASC"
  | "type_DESC"
  | "date_ASC"
  | "date_DESC"
  | "description_ASC"
  | "description_DESC"
  | "tags_ASC"
  | "tags_DESC"
  | "note_ASC"
  | "note_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export type AccountWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface AccountUpdateDataInput {
  user?: UserUpdateOneInput;
  description?: String;
}

export interface AccountUpdateManyMutationInput {
  description?: String;
}

export interface AccountUpdateOneRequiredInput {
  create?: AccountCreateInput;
  update?: AccountUpdateDataInput;
  upsert?: AccountUpsertNestedInput;
  connect?: AccountWhereUniqueInput;
}

export interface UserUpdateDataInput {
  name?: String;
  email?: String;
  password?: String;
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  connect?: UserWhereUniqueInput;
}

export interface RecordSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: RecordWhereInput;
  AND?: RecordSubscriptionWhereInput[] | RecordSubscriptionWhereInput;
  OR?: RecordSubscriptionWhereInput[] | RecordSubscriptionWhereInput;
  NOT?: RecordSubscriptionWhereInput[] | RecordSubscriptionWhereInput;
}

export interface RecordUpdateInput {
  user?: UserUpdateOneRequiredInput;
  account?: AccountUpdateOneRequiredInput;
  category?: CategoryUpdateOneRequiredInput;
  amount?: Float;
  type?: Operation;
  date?: DateTimeInput;
  description?: String;
  tags?: String;
  note?: String;
}

export interface AccountSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: AccountWhereInput;
  AND?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
  OR?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
  NOT?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  password?: String;
}

export interface CategoryCreateOneInput {
  create?: CategoryCreateInput;
  connect?: CategoryWhereUniqueInput;
}

export interface CategoryWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  user?: UserWhereInput;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  operation?: Operation;
  operation_not?: Operation;
  operation_in?: Operation[] | Operation;
  operation_not_in?: Operation[] | Operation;
  AND?: CategoryWhereInput[] | CategoryWhereInput;
  OR?: CategoryWhereInput[] | CategoryWhereInput;
  NOT?: CategoryWhereInput[] | CategoryWhereInput;
}

export interface AccountCreateOneInput {
  create?: AccountCreateInput;
  connect?: AccountWhereUniqueInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
}

export interface RecordCreateInput {
  user: UserCreateOneInput;
  account: AccountCreateOneInput;
  category: CategoryCreateOneInput;
  amount: Float;
  type: Operation;
  date: DateTimeInput;
  description: String;
  tags?: String;
  note?: String;
}

export interface CategoryUpsertNestedInput {
  update: CategoryUpdateDataInput;
  create: CategoryCreateInput;
}

export interface CategoryUpdateManyMutationInput {
  description?: String;
  operation?: Operation;
}

export interface CategoryUpdateDataInput {
  user?: UserUpdateOneInput;
  description?: String;
  operation?: Operation;
}

export interface AccountUpsertNestedInput {
  update: AccountUpdateDataInput;
  create: AccountCreateInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface AccountCreateInput {
  user?: UserCreateOneInput;
  description: String;
}

export type CategoryWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface CategoryUpdateInput {
  user?: UserUpdateOneInput;
  description?: String;
  operation?: Operation;
}

export interface AccountWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  user?: UserWhereInput;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  AND?: AccountWhereInput[] | AccountWhereInput;
  OR?: AccountWhereInput[] | AccountWhereInput;
  NOT?: AccountWhereInput[] | AccountWhereInput;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
}

export type RecordWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface CategoryCreateInput {
  user?: UserCreateOneInput;
  description: String;
  operation: Operation;
}

export interface UserUpdateOneInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface AccountUpdateInput {
  user?: UserUpdateOneInput;
  description?: String;
}

export interface CategoryUpdateOneRequiredInput {
  create?: CategoryCreateInput;
  update?: CategoryUpdateDataInput;
  upsert?: CategoryUpsertNestedInput;
  connect?: CategoryWhereUniqueInput;
}

export interface RecordUpdateManyMutationInput {
  amount?: Float;
  type?: Operation;
  date?: DateTimeInput;
  description?: String;
  tags?: String;
  note?: String;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface CategorySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CategoryWhereInput;
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput;
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput;
  NOT?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput;
}

export interface RecordWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  user?: UserWhereInput;
  account?: AccountWhereInput;
  category?: CategoryWhereInput;
  amount?: Float;
  amount_not?: Float;
  amount_in?: Float[] | Float;
  amount_not_in?: Float[] | Float;
  amount_lt?: Float;
  amount_lte?: Float;
  amount_gt?: Float;
  amount_gte?: Float;
  type?: Operation;
  type_not?: Operation;
  type_in?: Operation[] | Operation;
  type_not_in?: Operation[] | Operation;
  date?: DateTimeInput;
  date_not?: DateTimeInput;
  date_in?: DateTimeInput[] | DateTimeInput;
  date_not_in?: DateTimeInput[] | DateTimeInput;
  date_lt?: DateTimeInput;
  date_lte?: DateTimeInput;
  date_gt?: DateTimeInput;
  date_gte?: DateTimeInput;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  tags?: String;
  tags_not?: String;
  tags_in?: String[] | String;
  tags_not_in?: String[] | String;
  tags_lt?: String;
  tags_lte?: String;
  tags_gt?: String;
  tags_gte?: String;
  tags_contains?: String;
  tags_not_contains?: String;
  tags_starts_with?: String;
  tags_not_starts_with?: String;
  tags_ends_with?: String;
  tags_not_ends_with?: String;
  note?: String;
  note_not?: String;
  note_in?: String[] | String;
  note_not_in?: String[] | String;
  note_lt?: String;
  note_lte?: String;
  note_gt?: String;
  note_gte?: String;
  note_contains?: String;
  note_not_contains?: String;
  note_starts_with?: String;
  note_not_starts_with?: String;
  note_ends_with?: String;
  note_not_ends_with?: String;
  AND?: RecordWhereInput[] | RecordWhereInput;
  OR?: RecordWhereInput[] | RecordWhereInput;
  NOT?: RecordWhereInput[] | RecordWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface CategoryEdge {
  node: Category;
  cursor: String;
}

export interface CategoryEdgePromise
  extends Promise<CategoryEdge>,
    Fragmentable {
  node: <T = CategoryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CategoryEdgeSubscription
  extends Promise<AsyncIterator<CategoryEdge>>,
    Fragmentable {
  node: <T = CategorySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CategoryConnection {
  pageInfo: PageInfo;
  edges: CategoryEdge[];
}

export interface CategoryConnectionPromise
  extends Promise<CategoryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CategoryEdge>>() => T;
  aggregate: <T = AggregateCategoryPromise>() => T;
}

export interface CategoryConnectionSubscription
  extends Promise<AsyncIterator<CategoryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CategoryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCategorySubscription>() => T;
}

export interface AccountConnection {
  pageInfo: PageInfo;
  edges: AccountEdge[];
}

export interface AccountConnectionPromise
  extends Promise<AccountConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AccountEdge>>() => T;
  aggregate: <T = AggregateAccountPromise>() => T;
}

export interface AccountConnectionSubscription
  extends Promise<AsyncIterator<AccountConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AccountEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAccountSubscription>() => T;
}

export interface Category {
  id: ID_Output;
  description: String;
  operation: Operation;
}

export interface CategoryPromise extends Promise<Category>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  description: () => Promise<String>;
  operation: () => Promise<Operation>;
}

export interface CategorySubscription
  extends Promise<AsyncIterator<Category>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  description: () => Promise<AsyncIterator<String>>;
  operation: () => Promise<AsyncIterator<Operation>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateAccount {
  count: Int;
}

export interface AggregateAccountPromise
  extends Promise<AggregateAccount>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAccountSubscription
  extends Promise<AsyncIterator<AggregateAccount>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface Account {
  id: ID_Output;
  description: String;
}

export interface AccountPromise extends Promise<Account>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  description: () => Promise<String>;
}

export interface AccountSubscription
  extends Promise<AsyncIterator<Account>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  description: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRecord {
  count: Int;
}

export interface AggregateRecordPromise
  extends Promise<AggregateRecord>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRecordSubscription
  extends Promise<AsyncIterator<AggregateRecord>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AccountSubscriptionPayload {
  mutation: MutationType;
  node: Account;
  updatedFields: String[];
  previousValues: AccountPreviousValues;
}

export interface AccountSubscriptionPayloadPromise
  extends Promise<AccountSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AccountPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AccountPreviousValuesPromise>() => T;
}

export interface AccountSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AccountSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AccountSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AccountPreviousValuesSubscription>() => T;
}

export interface RecordConnection {
  pageInfo: PageInfo;
  edges: RecordEdge[];
}

export interface RecordConnectionPromise
  extends Promise<RecordConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RecordEdge>>() => T;
  aggregate: <T = AggregateRecordPromise>() => T;
}

export interface RecordConnectionSubscription
  extends Promise<AsyncIterator<RecordConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RecordEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRecordSubscription>() => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface CategoryPreviousValues {
  id: ID_Output;
  description: String;
  operation: Operation;
}

export interface CategoryPreviousValuesPromise
  extends Promise<CategoryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  description: () => Promise<String>;
  operation: () => Promise<Operation>;
}

export interface CategoryPreviousValuesSubscription
  extends Promise<AsyncIterator<CategoryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  description: () => Promise<AsyncIterator<String>>;
  operation: () => Promise<AsyncIterator<Operation>>;
}

export interface RecordEdge {
  node: Record;
  cursor: String;
}

export interface RecordEdgePromise extends Promise<RecordEdge>, Fragmentable {
  node: <T = RecordPromise>() => T;
  cursor: () => Promise<String>;
}

export interface RecordEdgeSubscription
  extends Promise<AsyncIterator<RecordEdge>>,
    Fragmentable {
  node: <T = RecordSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AccountPreviousValues {
  id: ID_Output;
  description: String;
}

export interface AccountPreviousValuesPromise
  extends Promise<AccountPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  description: () => Promise<String>;
}

export interface AccountPreviousValuesSubscription
  extends Promise<AsyncIterator<AccountPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCategory {
  count: Int;
}

export interface AggregateCategoryPromise
  extends Promise<AggregateCategory>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCategorySubscription
  extends Promise<AsyncIterator<AggregateCategory>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface CategorySubscriptionPayload {
  mutation: MutationType;
  node: Category;
  updatedFields: String[];
  previousValues: CategoryPreviousValues;
}

export interface CategorySubscriptionPayloadPromise
  extends Promise<CategorySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CategoryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CategoryPreviousValuesPromise>() => T;
}

export interface CategorySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CategorySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CategorySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CategoryPreviousValuesSubscription>() => T;
}

export interface AccountEdge {
  node: Account;
  cursor: String;
}

export interface AccountEdgePromise extends Promise<AccountEdge>, Fragmentable {
  node: <T = AccountPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AccountEdgeSubscription
  extends Promise<AsyncIterator<AccountEdge>>,
    Fragmentable {
  node: <T = AccountSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface RecordSubscriptionPayload {
  mutation: MutationType;
  node: Record;
  updatedFields: String[];
  previousValues: RecordPreviousValues;
}

export interface RecordSubscriptionPayloadPromise
  extends Promise<RecordSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RecordPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RecordPreviousValuesPromise>() => T;
}

export interface RecordSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RecordSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RecordSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RecordPreviousValuesSubscription>() => T;
}

export interface RecordPreviousValues {
  id: ID_Output;
  amount: Float;
  type: Operation;
  date: DateTimeOutput;
  description: String;
  tags?: String;
  note?: String;
}

export interface RecordPreviousValuesPromise
  extends Promise<RecordPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  amount: () => Promise<Float>;
  type: () => Promise<Operation>;
  date: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  tags: () => Promise<String>;
  note: () => Promise<String>;
}

export interface RecordPreviousValuesSubscription
  extends Promise<AsyncIterator<RecordPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  amount: () => Promise<AsyncIterator<Float>>;
  type: () => Promise<AsyncIterator<Operation>>;
  date: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
  tags: () => Promise<AsyncIterator<String>>;
  note: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface Record {
  id: ID_Output;
  amount: Float;
  type: Operation;
  date: DateTimeOutput;
  description: String;
  tags?: String;
  note?: String;
}

export interface RecordPromise extends Promise<Record>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  account: <T = AccountPromise>() => T;
  category: <T = CategoryPromise>() => T;
  amount: () => Promise<Float>;
  type: () => Promise<Operation>;
  date: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  tags: () => Promise<String>;
  note: () => Promise<String>;
}

export interface RecordSubscription
  extends Promise<AsyncIterator<Record>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  account: <T = AccountSubscription>() => T;
  category: <T = CategorySubscription>() => T;
  amount: () => Promise<AsyncIterator<Float>>;
  type: () => Promise<AsyncIterator<Operation>>;
  date: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
  tags: () => Promise<AsyncIterator<String>>;
  note: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Account",
    embedded: false
  },
  {
    name: "Operation",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Record",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
