
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model PurchaseItem
 * 
 */
export type PurchaseItem = $Result.DefaultSelection<Prisma.$PurchaseItemPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SaleItem
 * 
 */
export type SaleItem = $Result.DefaultSelection<Prisma.$SaleItemPayload>
/**
 * Model Production
 * 
 */
export type Production = $Result.DefaultSelection<Prisma.$ProductionPayload>
/**
 * Model ProductionItem
 * 
 */
export type ProductionItem = $Result.DefaultSelection<Prisma.$ProductionItemPayload>
/**
 * Model QualityInspection
 * 
 */
export type QualityInspection = $Result.DefaultSelection<Prisma.$QualityInspectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleType: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  SALES: 'SALES',
  PRODUCTION: 'PRODUCTION',
  QUALITY: 'QUALITY',
  CUSTOMER: 'CUSTOMER'
};

export type RoleType = (typeof RoleType)[keyof typeof RoleType]


export const ProductionStatus: {
  PLANNED: 'PLANNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  REJECTED: 'REJECTED'
};

export type ProductionStatus = (typeof ProductionStatus)[keyof typeof ProductionStatus]


export const SaleStatus: {
  DRAFT: 'DRAFT',
  CONFIRMED: 'CONFIRMED',
  SHIPPED: 'SHIPPED',
  CANCELLED: 'CANCELLED'
};

export type SaleStatus = (typeof SaleStatus)[keyof typeof SaleStatus]


export const QualityStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type QualityStatus = (typeof QualityStatus)[keyof typeof QualityStatus]

}

export type RoleType = $Enums.RoleType

export const RoleType: typeof $Enums.RoleType

export type ProductionStatus = $Enums.ProductionStatus

export const ProductionStatus: typeof $Enums.ProductionStatus

export type SaleStatus = $Enums.SaleStatus

export const SaleStatus: typeof $Enums.SaleStatus

export type QualityStatus = $Enums.QualityStatus

export const QualityStatus: typeof $Enums.QualityStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseItem`: Exposes CRUD operations for the **PurchaseItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseItems
    * const purchaseItems = await prisma.purchaseItem.findMany()
    * ```
    */
  get purchaseItem(): Prisma.PurchaseItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saleItem`: Exposes CRUD operations for the **SaleItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleItems
    * const saleItems = await prisma.saleItem.findMany()
    * ```
    */
  get saleItem(): Prisma.SaleItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.production`: Exposes CRUD operations for the **Production** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productions
    * const productions = await prisma.production.findMany()
    * ```
    */
  get production(): Prisma.ProductionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productionItem`: Exposes CRUD operations for the **ProductionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionItems
    * const productionItems = await prisma.productionItem.findMany()
    * ```
    */
  get productionItem(): Prisma.ProductionItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qualityInspection`: Exposes CRUD operations for the **QualityInspection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QualityInspections
    * const qualityInspections = await prisma.qualityInspection.findMany()
    * ```
    */
  get qualityInspection(): Prisma.QualityInspectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    Employee: 'Employee',
    Customer: 'Customer',
    Product: 'Product',
    Purchase: 'Purchase',
    PurchaseItem: 'PurchaseItem',
    Sale: 'Sale',
    SaleItem: 'SaleItem',
    Production: 'Production',
    ProductionItem: 'ProductionItem',
    QualityInspection: 'QualityInspection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "userRole" | "employee" | "customer" | "product" | "purchase" | "purchaseItem" | "sale" | "saleItem" | "production" | "productionItem" | "qualityInspection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      PurchaseItem: {
        payload: Prisma.$PurchaseItemPayload<ExtArgs>
        fields: Prisma.PurchaseItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          findFirst: {
            args: Prisma.PurchaseItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          findMany: {
            args: Prisma.PurchaseItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>[]
          }
          create: {
            args: Prisma.PurchaseItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          createMany: {
            args: Prisma.PurchaseItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>[]
          }
          delete: {
            args: Prisma.PurchaseItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          update: {
            args: Prisma.PurchaseItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          aggregate: {
            args: Prisma.PurchaseItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseItem>
          }
          groupBy: {
            args: Prisma.PurchaseItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseItemCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseItemCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SaleItem: {
        payload: Prisma.$SaleItemPayload<ExtArgs>
        fields: Prisma.SaleItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findFirst: {
            args: Prisma.SaleItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findMany: {
            args: Prisma.SaleItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          create: {
            args: Prisma.SaleItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          createMany: {
            args: Prisma.SaleItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          delete: {
            args: Prisma.SaleItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          update: {
            args: Prisma.SaleItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          deleteMany: {
            args: Prisma.SaleItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          upsert: {
            args: Prisma.SaleItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          aggregate: {
            args: Prisma.SaleItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleItem>
          }
          groupBy: {
            args: Prisma.SaleItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleItemCountArgs<ExtArgs>
            result: $Utils.Optional<SaleItemCountAggregateOutputType> | number
          }
        }
      }
      Production: {
        payload: Prisma.$ProductionPayload<ExtArgs>
        fields: Prisma.ProductionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          findFirst: {
            args: Prisma.ProductionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          findMany: {
            args: Prisma.ProductionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>[]
          }
          create: {
            args: Prisma.ProductionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          createMany: {
            args: Prisma.ProductionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>[]
          }
          delete: {
            args: Prisma.ProductionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          update: {
            args: Prisma.ProductionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          deleteMany: {
            args: Prisma.ProductionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>[]
          }
          upsert: {
            args: Prisma.ProductionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          aggregate: {
            args: Prisma.ProductionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduction>
          }
          groupBy: {
            args: Prisma.ProductionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionCountAggregateOutputType> | number
          }
        }
      }
      ProductionItem: {
        payload: Prisma.$ProductionItemPayload<ExtArgs>
        fields: Prisma.ProductionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload>
          }
          findFirst: {
            args: Prisma.ProductionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload>
          }
          findMany: {
            args: Prisma.ProductionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload>[]
          }
          create: {
            args: Prisma.ProductionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload>
          }
          createMany: {
            args: Prisma.ProductionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductionItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload>[]
          }
          delete: {
            args: Prisma.ProductionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload>
          }
          update: {
            args: Prisma.ProductionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload>
          }
          deleteMany: {
            args: Prisma.ProductionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductionItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload>[]
          }
          upsert: {
            args: Prisma.ProductionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionItemPayload>
          }
          aggregate: {
            args: Prisma.ProductionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductionItem>
          }
          groupBy: {
            args: Prisma.ProductionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionItemCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionItemCountAggregateOutputType> | number
          }
        }
      }
      QualityInspection: {
        payload: Prisma.$QualityInspectionPayload<ExtArgs>
        fields: Prisma.QualityInspectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QualityInspectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QualityInspectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload>
          }
          findFirst: {
            args: Prisma.QualityInspectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QualityInspectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload>
          }
          findMany: {
            args: Prisma.QualityInspectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload>[]
          }
          create: {
            args: Prisma.QualityInspectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload>
          }
          createMany: {
            args: Prisma.QualityInspectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QualityInspectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload>[]
          }
          delete: {
            args: Prisma.QualityInspectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload>
          }
          update: {
            args: Prisma.QualityInspectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload>
          }
          deleteMany: {
            args: Prisma.QualityInspectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QualityInspectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QualityInspectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload>[]
          }
          upsert: {
            args: Prisma.QualityInspectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityInspectionPayload>
          }
          aggregate: {
            args: Prisma.QualityInspectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQualityInspection>
          }
          groupBy: {
            args: Prisma.QualityInspectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QualityInspectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QualityInspectionCountArgs<ExtArgs>
            result: $Utils.Optional<QualityInspectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
    employee?: EmployeeOmit
    customer?: CustomerOmit
    product?: ProductOmit
    purchase?: PurchaseOmit
    purchaseItem?: PurchaseItemOmit
    sale?: SaleOmit
    saleItem?: SaleItemOmit
    production?: ProductionOmit
    productionItem?: ProductionItemOmit
    qualityInspection?: QualityInspectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    productions: number
    sales: number
    purchases: number
    inspections: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productions?: boolean | EmployeeCountOutputTypeCountProductionsArgs
    sales?: boolean | EmployeeCountOutputTypeCountSalesArgs
    purchases?: boolean | EmployeeCountOutputTypeCountPurchasesArgs
    inspections?: boolean | EmployeeCountOutputTypeCountInspectionsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountProductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountInspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualityInspectionWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    sales: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | CustomerCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    saleItems: number
    purchaseItems: number
    productionItems: number
    productionsAsFinished: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleItems?: boolean | ProductCountOutputTypeCountSaleItemsArgs
    purchaseItems?: boolean | ProductCountOutputTypeCountPurchaseItemsArgs
    productionItems?: boolean | ProductCountOutputTypeCountProductionItemsArgs
    productionsAsFinished?: boolean | ProductCountOutputTypeCountProductionsAsFinishedArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSaleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPurchaseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductionsAsFinishedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionWhereInput
  }


  /**
   * Count Type PurchaseCountOutputType
   */

  export type PurchaseCountOutputType = {
    items: number
    inspections: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PurchaseCountOutputTypeCountItemsArgs
    inspections?: boolean | PurchaseCountOutputTypeCountInspectionsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     */
    select?: PurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountInspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualityInspectionWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    items: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SaleCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }


  /**
   * Count Type ProductionCountOutputType
   */

  export type ProductionCountOutputType = {
    items: number
    inspections: number
  }

  export type ProductionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ProductionCountOutputTypeCountItemsArgs
    inspections?: boolean | ProductionCountOutputTypeCountInspectionsArgs
  }

  // Custom InputTypes
  /**
   * ProductionCountOutputType without action
   */
  export type ProductionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCountOutputType
     */
    select?: ProductionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductionCountOutputType without action
   */
  export type ProductionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionItemWhereInput
  }

  /**
   * ProductionCountOutputType without action
   */
  export type ProductionCountOutputTypeCountInspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualityInspectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    refreshTokenHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    refreshTokenHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    isActive: number
    refreshTokenHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    refreshTokenHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    refreshTokenHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    refreshTokenHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    isActive: boolean
    refreshTokenHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    refreshTokenHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
    customer?: boolean | User$customerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    refreshTokenHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    refreshTokenHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    refreshTokenHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "isActive" | "refreshTokenHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
    customer?: boolean | User$customerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[]
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      isActive: boolean
      refreshTokenHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends User$customerArgs<ExtArgs> = {}>(args?: Subset<T, User$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly refreshTokenHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * User.customer
   */
  export type User$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: $Enums.RoleType | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: $Enums.RoleType | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: $Enums.RoleType
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.RoleType
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'RoleType'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userId: string
    roleId: string
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", 'String'>
    readonly roleId: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    designation: string | null
    department: string | null
    createdAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    designation: string | null
    department: string | null
    createdAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    userId: number
    designation: number
    department: number
    createdAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    userId?: true
    designation?: true
    department?: true
    createdAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    userId?: true
    designation?: true
    department?: true
    createdAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    userId?: true
    designation?: true
    department?: true
    createdAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    userId: string
    designation: string | null
    department: string | null
    createdAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    designation?: boolean
    department?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    productions?: boolean | Employee$productionsArgs<ExtArgs>
    sales?: boolean | Employee$salesArgs<ExtArgs>
    purchases?: boolean | Employee$purchasesArgs<ExtArgs>
    inspections?: boolean | Employee$inspectionsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    designation?: boolean
    department?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    designation?: boolean
    department?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    userId?: boolean
    designation?: boolean
    department?: boolean
    createdAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "designation" | "department" | "createdAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    productions?: boolean | Employee$productionsArgs<ExtArgs>
    sales?: boolean | Employee$salesArgs<ExtArgs>
    purchases?: boolean | Employee$purchasesArgs<ExtArgs>
    inspections?: boolean | Employee$inspectionsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      productions: Prisma.$ProductionPayload<ExtArgs>[]
      sales: Prisma.$SalePayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      inspections: Prisma.$QualityInspectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      designation: string | null
      department: string | null
      createdAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productions<T extends Employee$productionsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$productionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Employee$salesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends Employee$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inspections<T extends Employee$inspectionsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$inspectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly userId: FieldRef<"Employee", 'String'>
    readonly designation: FieldRef<"Employee", 'String'>
    readonly department: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.productions
   */
  export type Employee$productionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    where?: ProductionWhereInput
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    cursor?: ProductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Employee.sales
   */
  export type Employee$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Employee.purchases
   */
  export type Employee$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Employee.inspections
   */
  export type Employee$inspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    where?: QualityInspectionWhereInput
    orderBy?: QualityInspectionOrderByWithRelationInput | QualityInspectionOrderByWithRelationInput[]
    cursor?: QualityInspectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualityInspectionScalarFieldEnum | QualityInspectionScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    phone: number
    address: number
    createdAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    userId: string | null
    name: string
    phone: string | null
    address: string | null
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    user?: boolean | Customer$userArgs<ExtArgs>
    sales?: boolean | Customer$salesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    user?: boolean | Customer$userArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    user?: boolean | Customer$userArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "phone" | "address" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Customer$userArgs<ExtArgs>
    sales?: boolean | Customer$salesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Customer$userArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Customer$userArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      name: string
      phone: string | null
      address: string | null
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Customer$userArgs<ExtArgs> = {}>(args?: Subset<T, Customer$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sales<T extends Customer$salesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly userId: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.user
   */
  export type Customer$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Customer.sales
   */
  export type Customer$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    description: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    description: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    sku: number
    description: number
    price: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    description?: true
    price?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    description?: true
    price?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    description?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    sku: string
    description: string | null
    price: Decimal
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    saleItems?: boolean | Product$saleItemsArgs<ExtArgs>
    purchaseItems?: boolean | Product$purchaseItemsArgs<ExtArgs>
    productionItems?: boolean | Product$productionItemsArgs<ExtArgs>
    productionsAsFinished?: boolean | Product$productionsAsFinishedArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    sku?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sku" | "description" | "price" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleItems?: boolean | Product$saleItemsArgs<ExtArgs>
    purchaseItems?: boolean | Product$purchaseItemsArgs<ExtArgs>
    productionItems?: boolean | Product$productionItemsArgs<ExtArgs>
    productionsAsFinished?: boolean | Product$productionsAsFinishedArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      saleItems: Prisma.$SaleItemPayload<ExtArgs>[]
      purchaseItems: Prisma.$PurchaseItemPayload<ExtArgs>[]
      productionItems: Prisma.$ProductionItemPayload<ExtArgs>[]
      productionsAsFinished: Prisma.$ProductionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sku: string
      description: string | null
      price: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saleItems<T extends Product$saleItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$saleItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchaseItems<T extends Product$purchaseItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$purchaseItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productionItems<T extends Product$productionItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$productionItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productionsAsFinished<T extends Product$productionsAsFinishedArgs<ExtArgs> = {}>(args?: Subset<T, Product$productionsAsFinishedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.saleItems
   */
  export type Product$saleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Product.purchaseItems
   */
  export type Product$purchaseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    cursor?: PurchaseItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * Product.productionItems
   */
  export type Product$productionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    where?: ProductionItemWhereInput
    orderBy?: ProductionItemOrderByWithRelationInput | ProductionItemOrderByWithRelationInput[]
    cursor?: ProductionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionItemScalarFieldEnum | ProductionItemScalarFieldEnum[]
  }

  /**
   * Product.productionsAsFinished
   */
  export type Product$productionsAsFinishedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    where?: ProductionWhereInput
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    cursor?: ProductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    referenceNo: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    referenceNo: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    referenceNo: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type PurchaseMinAggregateInputType = {
    id?: true
    referenceNo?: true
    createdById?: true
    createdAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    referenceNo?: true
    createdById?: true
    createdAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    referenceNo?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    referenceNo: string
    createdById: string
    createdAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    items?: boolean | Purchase$itemsArgs<ExtArgs>
    inspections?: boolean | Purchase$inspectionsArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    referenceNo?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceNo" | "createdById" | "createdAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    items?: boolean | Purchase$itemsArgs<ExtArgs>
    inspections?: boolean | Purchase$inspectionsArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      createdBy: Prisma.$EmployeePayload<ExtArgs>
      items: Prisma.$PurchaseItemPayload<ExtArgs>[]
      inspections: Prisma.$QualityInspectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceNo: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Purchase$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inspections<T extends Purchase$inspectionsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$inspectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly referenceNo: FieldRef<"Purchase", 'String'>
    readonly createdById: FieldRef<"Purchase", 'String'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase.items
   */
  export type Purchase$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    cursor?: PurchaseItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * Purchase.inspections
   */
  export type Purchase$inspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    where?: QualityInspectionWhereInput
    orderBy?: QualityInspectionOrderByWithRelationInput | QualityInspectionOrderByWithRelationInput[]
    cursor?: QualityInspectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualityInspectionScalarFieldEnum | QualityInspectionScalarFieldEnum[]
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseItem
   */

  export type AggregatePurchaseItem = {
    _count: PurchaseItemCountAggregateOutputType | null
    _avg: PurchaseItemAvgAggregateOutputType | null
    _sum: PurchaseItemSumAggregateOutputType | null
    _min: PurchaseItemMinAggregateOutputType | null
    _max: PurchaseItemMaxAggregateOutputType | null
  }

  export type PurchaseItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type PurchaseItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type PurchaseItemMinAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type PurchaseItemMaxAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type PurchaseItemCountAggregateOutputType = {
    id: number
    purchaseId: number
    productId: number
    quantity: number
    unitPrice: number
    _all: number
  }


  export type PurchaseItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type PurchaseItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type PurchaseItemMinAggregateInputType = {
    id?: true
    purchaseId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
  }

  export type PurchaseItemMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
  }

  export type PurchaseItemCountAggregateInputType = {
    id?: true
    purchaseId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    _all?: true
  }

  export type PurchaseItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseItem to aggregate.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseItems
    **/
    _count?: true | PurchaseItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseItemMaxAggregateInputType
  }

  export type GetPurchaseItemAggregateType<T extends PurchaseItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseItem[P]>
      : GetScalarType<T[P], AggregatePurchaseItem[P]>
  }




  export type PurchaseItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithAggregationInput | PurchaseItemOrderByWithAggregationInput[]
    by: PurchaseItemScalarFieldEnum[] | PurchaseItemScalarFieldEnum
    having?: PurchaseItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseItemCountAggregateInputType | true
    _avg?: PurchaseItemAvgAggregateInputType
    _sum?: PurchaseItemSumAggregateInputType
    _min?: PurchaseItemMinAggregateInputType
    _max?: PurchaseItemMaxAggregateInputType
  }

  export type PurchaseItemGroupByOutputType = {
    id: string
    purchaseId: string
    productId: string
    quantity: number
    unitPrice: Decimal
    _count: PurchaseItemCountAggregateOutputType | null
    _avg: PurchaseItemAvgAggregateOutputType | null
    _sum: PurchaseItemSumAggregateOutputType | null
    _min: PurchaseItemMinAggregateOutputType | null
    _max: PurchaseItemMaxAggregateOutputType | null
  }

  type GetPurchaseItemGroupByPayload<T extends PurchaseItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseItemGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseItemGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectScalar = {
    id?: boolean
    purchaseId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
  }

  export type PurchaseItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchaseId" | "productId" | "quantity" | "unitPrice", ExtArgs["result"]["purchaseItem"]>
  export type PurchaseItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type PurchaseItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type PurchaseItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $PurchaseItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseItem"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseId: string
      productId: string
      quantity: number
      unitPrice: Prisma.Decimal
    }, ExtArgs["result"]["purchaseItem"]>
    composites: {}
  }

  type PurchaseItemGetPayload<S extends boolean | null | undefined | PurchaseItemDefaultArgs> = $Result.GetResult<Prisma.$PurchaseItemPayload, S>

  type PurchaseItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseItemCountAggregateInputType | true
    }

  export interface PurchaseItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseItem'], meta: { name: 'PurchaseItem' } }
    /**
     * Find zero or one PurchaseItem that matches the filter.
     * @param {PurchaseItemFindUniqueArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseItemFindUniqueArgs>(args: SelectSubset<T, PurchaseItemFindUniqueArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseItemFindUniqueOrThrowArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindFirstArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseItemFindFirstArgs>(args?: SelectSubset<T, PurchaseItemFindFirstArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindFirstOrThrowArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseItems
     * const purchaseItems = await prisma.purchaseItem.findMany()
     * 
     * // Get first 10 PurchaseItems
     * const purchaseItems = await prisma.purchaseItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseItemWithIdOnly = await prisma.purchaseItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseItemFindManyArgs>(args?: SelectSubset<T, PurchaseItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseItem.
     * @param {PurchaseItemCreateArgs} args - Arguments to create a PurchaseItem.
     * @example
     * // Create one PurchaseItem
     * const PurchaseItem = await prisma.purchaseItem.create({
     *   data: {
     *     // ... data to create a PurchaseItem
     *   }
     * })
     * 
     */
    create<T extends PurchaseItemCreateArgs>(args: SelectSubset<T, PurchaseItemCreateArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseItems.
     * @param {PurchaseItemCreateManyArgs} args - Arguments to create many PurchaseItems.
     * @example
     * // Create many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseItemCreateManyArgs>(args?: SelectSubset<T, PurchaseItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseItems and returns the data saved in the database.
     * @param {PurchaseItemCreateManyAndReturnArgs} args - Arguments to create many PurchaseItems.
     * @example
     * // Create many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseItems and only return the `id`
     * const purchaseItemWithIdOnly = await prisma.purchaseItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseItem.
     * @param {PurchaseItemDeleteArgs} args - Arguments to delete one PurchaseItem.
     * @example
     * // Delete one PurchaseItem
     * const PurchaseItem = await prisma.purchaseItem.delete({
     *   where: {
     *     // ... filter to delete one PurchaseItem
     *   }
     * })
     * 
     */
    delete<T extends PurchaseItemDeleteArgs>(args: SelectSubset<T, PurchaseItemDeleteArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseItem.
     * @param {PurchaseItemUpdateArgs} args - Arguments to update one PurchaseItem.
     * @example
     * // Update one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseItemUpdateArgs>(args: SelectSubset<T, PurchaseItemUpdateArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseItems.
     * @param {PurchaseItemDeleteManyArgs} args - Arguments to filter PurchaseItems to delete.
     * @example
     * // Delete a few PurchaseItems
     * const { count } = await prisma.purchaseItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseItemDeleteManyArgs>(args?: SelectSubset<T, PurchaseItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseItemUpdateManyArgs>(args: SelectSubset<T, PurchaseItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseItems and returns the data updated in the database.
     * @param {PurchaseItemUpdateManyAndReturnArgs} args - Arguments to update many PurchaseItems.
     * @example
     * // Update many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseItems and only return the `id`
     * const purchaseItemWithIdOnly = await prisma.purchaseItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseItem.
     * @param {PurchaseItemUpsertArgs} args - Arguments to update or create a PurchaseItem.
     * @example
     * // Update or create a PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.upsert({
     *   create: {
     *     // ... data to create a PurchaseItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseItem we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseItemUpsertArgs>(args: SelectSubset<T, PurchaseItemUpsertArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemCountArgs} args - Arguments to filter PurchaseItems to count.
     * @example
     * // Count the number of PurchaseItems
     * const count = await prisma.purchaseItem.count({
     *   where: {
     *     // ... the filter for the PurchaseItems we want to count
     *   }
     * })
    **/
    count<T extends PurchaseItemCountArgs>(
      args?: Subset<T, PurchaseItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseItemAggregateArgs>(args: Subset<T, PurchaseItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseItemAggregateType<T>>

    /**
     * Group by PurchaseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseItemGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseItem model
   */
  readonly fields: PurchaseItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseItem model
   */
  interface PurchaseItemFieldRefs {
    readonly id: FieldRef<"PurchaseItem", 'String'>
    readonly purchaseId: FieldRef<"PurchaseItem", 'String'>
    readonly productId: FieldRef<"PurchaseItem", 'String'>
    readonly quantity: FieldRef<"PurchaseItem", 'Int'>
    readonly unitPrice: FieldRef<"PurchaseItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseItem findUnique
   */
  export type PurchaseItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem findUniqueOrThrow
   */
  export type PurchaseItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem findFirst
   */
  export type PurchaseItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseItems.
     */
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem findFirstOrThrow
   */
  export type PurchaseItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseItems.
     */
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem findMany
   */
  export type PurchaseItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItems to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem create
   */
  export type PurchaseItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseItem.
     */
    data: XOR<PurchaseItemCreateInput, PurchaseItemUncheckedCreateInput>
  }

  /**
   * PurchaseItem createMany
   */
  export type PurchaseItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseItems.
     */
    data: PurchaseItemCreateManyInput | PurchaseItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseItem createManyAndReturn
   */
  export type PurchaseItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseItems.
     */
    data: PurchaseItemCreateManyInput | PurchaseItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseItem update
   */
  export type PurchaseItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseItem.
     */
    data: XOR<PurchaseItemUpdateInput, PurchaseItemUncheckedUpdateInput>
    /**
     * Choose, which PurchaseItem to update.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem updateMany
   */
  export type PurchaseItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseItems.
     */
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseItems to update
     */
    where?: PurchaseItemWhereInput
    /**
     * Limit how many PurchaseItems to update.
     */
    limit?: number
  }

  /**
   * PurchaseItem updateManyAndReturn
   */
  export type PurchaseItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseItems.
     */
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseItems to update
     */
    where?: PurchaseItemWhereInput
    /**
     * Limit how many PurchaseItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseItem upsert
   */
  export type PurchaseItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseItem to update in case it exists.
     */
    where: PurchaseItemWhereUniqueInput
    /**
     * In case the PurchaseItem found by the `where` argument doesn't exist, create a new PurchaseItem with this data.
     */
    create: XOR<PurchaseItemCreateInput, PurchaseItemUncheckedCreateInput>
    /**
     * In case the PurchaseItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseItemUpdateInput, PurchaseItemUncheckedUpdateInput>
  }

  /**
   * PurchaseItem delete
   */
  export type PurchaseItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter which PurchaseItem to delete.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem deleteMany
   */
  export type PurchaseItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseItems to delete
     */
    where?: PurchaseItemWhereInput
    /**
     * Limit how many PurchaseItems to delete.
     */
    limit?: number
  }

  /**
   * PurchaseItem without action
   */
  export type PurchaseItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    invoiceNo: string | null
    status: $Enums.SaleStatus | null
    customerId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    invoiceNo: string | null
    status: $Enums.SaleStatus | null
    customerId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    invoiceNo: number
    status: number
    customerId: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type SaleMinAggregateInputType = {
    id?: true
    invoiceNo?: true
    status?: true
    customerId?: true
    createdById?: true
    createdAt?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    invoiceNo?: true
    status?: true
    customerId?: true
    createdById?: true
    createdAt?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    invoiceNo?: true
    status?: true
    customerId?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    invoiceNo: string
    status: $Enums.SaleStatus
    customerId: string
    createdById: string
    createdAt: Date
    _count: SaleCountAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    status?: boolean
    customerId?: boolean
    createdById?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    status?: boolean
    customerId?: boolean
    createdById?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    status?: boolean
    customerId?: boolean
    createdById?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    invoiceNo?: boolean
    status?: boolean
    customerId?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceNo" | "status" | "customerId" | "createdById" | "createdAt", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      createdBy: Prisma.$EmployeePayload<ExtArgs>
      items: Prisma.$SaleItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceNo: string
      status: $Enums.SaleStatus
      customerId: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Sale$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly invoiceNo: FieldRef<"Sale", 'String'>
    readonly status: FieldRef<"Sale", 'SaleStatus'>
    readonly customerId: FieldRef<"Sale", 'String'>
    readonly createdById: FieldRef<"Sale", 'String'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.items
   */
  export type Sale$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SaleItem
   */

  export type AggregateSaleItem = {
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  export type SaleItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type SaleItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type SaleItemMinAggregateOutputType = {
    id: string | null
    saleId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type SaleItemMaxAggregateOutputType = {
    id: string | null
    saleId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type SaleItemCountAggregateOutputType = {
    id: number
    saleId: number
    productId: number
    quantity: number
    unitPrice: number
    _all: number
  }


  export type SaleItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type SaleItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type SaleItemMinAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
  }

  export type SaleItemMaxAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
  }

  export type SaleItemCountAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    _all?: true
  }

  export type SaleItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItem to aggregate.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleItems
    **/
    _count?: true | SaleItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleItemMaxAggregateInputType
  }

  export type GetSaleItemAggregateType<T extends SaleItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleItem[P]>
      : GetScalarType<T[P], AggregateSaleItem[P]>
  }




  export type SaleItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithAggregationInput | SaleItemOrderByWithAggregationInput[]
    by: SaleItemScalarFieldEnum[] | SaleItemScalarFieldEnum
    having?: SaleItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleItemCountAggregateInputType | true
    _avg?: SaleItemAvgAggregateInputType
    _sum?: SaleItemSumAggregateInputType
    _min?: SaleItemMinAggregateInputType
    _max?: SaleItemMaxAggregateInputType
  }

  export type SaleItemGroupByOutputType = {
    id: string
    saleId: string
    productId: string
    quantity: number
    unitPrice: Decimal
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  type GetSaleItemGroupByPayload<T extends SaleItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
            : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
        }
      >
    >


  export type SaleItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectScalar = {
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
  }

  export type SaleItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saleId" | "productId" | "quantity" | "unitPrice", ExtArgs["result"]["saleItem"]>
  export type SaleItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SaleItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleItem"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      saleId: string
      productId: string
      quantity: number
      unitPrice: Prisma.Decimal
    }, ExtArgs["result"]["saleItem"]>
    composites: {}
  }

  type SaleItemGetPayload<S extends boolean | null | undefined | SaleItemDefaultArgs> = $Result.GetResult<Prisma.$SaleItemPayload, S>

  type SaleItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleItemCountAggregateInputType | true
    }

  export interface SaleItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleItem'], meta: { name: 'SaleItem' } }
    /**
     * Find zero or one SaleItem that matches the filter.
     * @param {SaleItemFindUniqueArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleItemFindUniqueArgs>(args: SelectSubset<T, SaleItemFindUniqueArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaleItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleItemFindUniqueOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleItemFindFirstArgs>(args?: SelectSubset<T, SaleItemFindFirstArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaleItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleItems
     * const saleItems = await prisma.saleItem.findMany()
     * 
     * // Get first 10 SaleItems
     * const saleItems = await prisma.saleItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleItemFindManyArgs>(args?: SelectSubset<T, SaleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaleItem.
     * @param {SaleItemCreateArgs} args - Arguments to create a SaleItem.
     * @example
     * // Create one SaleItem
     * const SaleItem = await prisma.saleItem.create({
     *   data: {
     *     // ... data to create a SaleItem
     *   }
     * })
     * 
     */
    create<T extends SaleItemCreateArgs>(args: SelectSubset<T, SaleItemCreateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaleItems.
     * @param {SaleItemCreateManyArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleItemCreateManyArgs>(args?: SelectSubset<T, SaleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleItems and returns the data saved in the database.
     * @param {SaleItemCreateManyAndReturnArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaleItem.
     * @param {SaleItemDeleteArgs} args - Arguments to delete one SaleItem.
     * @example
     * // Delete one SaleItem
     * const SaleItem = await prisma.saleItem.delete({
     *   where: {
     *     // ... filter to delete one SaleItem
     *   }
     * })
     * 
     */
    delete<T extends SaleItemDeleteArgs>(args: SelectSubset<T, SaleItemDeleteArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaleItem.
     * @param {SaleItemUpdateArgs} args - Arguments to update one SaleItem.
     * @example
     * // Update one SaleItem
     * const saleItem = await prisma.saleItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleItemUpdateArgs>(args: SelectSubset<T, SaleItemUpdateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaleItems.
     * @param {SaleItemDeleteManyArgs} args - Arguments to filter SaleItems to delete.
     * @example
     * // Delete a few SaleItems
     * const { count } = await prisma.saleItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleItemDeleteManyArgs>(args?: SelectSubset<T, SaleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleItemUpdateManyArgs>(args: SelectSubset<T, SaleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems and returns the data updated in the database.
     * @param {SaleItemUpdateManyAndReturnArgs} args - Arguments to update many SaleItems.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaleItem.
     * @param {SaleItemUpsertArgs} args - Arguments to update or create a SaleItem.
     * @example
     * // Update or create a SaleItem
     * const saleItem = await prisma.saleItem.upsert({
     *   create: {
     *     // ... data to create a SaleItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleItem we want to update
     *   }
     * })
     */
    upsert<T extends SaleItemUpsertArgs>(args: SelectSubset<T, SaleItemUpsertArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemCountArgs} args - Arguments to filter SaleItems to count.
     * @example
     * // Count the number of SaleItems
     * const count = await prisma.saleItem.count({
     *   where: {
     *     // ... the filter for the SaleItems we want to count
     *   }
     * })
    **/
    count<T extends SaleItemCountArgs>(
      args?: Subset<T, SaleItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleItemAggregateArgs>(args: Subset<T, SaleItemAggregateArgs>): Prisma.PrismaPromise<GetSaleItemAggregateType<T>>

    /**
     * Group by SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleItemGroupByArgs['orderBy'] }
        : { orderBy?: SaleItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleItem model
   */
  readonly fields: SaleItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SaleItem model
   */
  interface SaleItemFieldRefs {
    readonly id: FieldRef<"SaleItem", 'String'>
    readonly saleId: FieldRef<"SaleItem", 'String'>
    readonly productId: FieldRef<"SaleItem", 'String'>
    readonly quantity: FieldRef<"SaleItem", 'Int'>
    readonly unitPrice: FieldRef<"SaleItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * SaleItem findUnique
   */
  export type SaleItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findUniqueOrThrow
   */
  export type SaleItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findFirst
   */
  export type SaleItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findFirstOrThrow
   */
  export type SaleItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findMany
   */
  export type SaleItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItems to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem create
   */
  export type SaleItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleItem.
     */
    data: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
  }

  /**
   * SaleItem createMany
   */
  export type SaleItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleItem createManyAndReturn
   */
  export type SaleItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem update
   */
  export type SaleItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleItem.
     */
    data: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
    /**
     * Choose, which SaleItem to update.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem updateMany
   */
  export type SaleItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
  }

  /**
   * SaleItem updateManyAndReturn
   */
  export type SaleItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem upsert
   */
  export type SaleItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleItem to update in case it exists.
     */
    where: SaleItemWhereUniqueInput
    /**
     * In case the SaleItem found by the `where` argument doesn't exist, create a new SaleItem with this data.
     */
    create: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
    /**
     * In case the SaleItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
  }

  /**
   * SaleItem delete
   */
  export type SaleItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter which SaleItem to delete.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem deleteMany
   */
  export type SaleItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItems to delete
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to delete.
     */
    limit?: number
  }

  /**
   * SaleItem without action
   */
  export type SaleItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
  }


  /**
   * Model Production
   */

  export type AggregateProduction = {
    _count: ProductionCountAggregateOutputType | null
    _min: ProductionMinAggregateOutputType | null
    _max: ProductionMaxAggregateOutputType | null
  }

  export type ProductionMinAggregateOutputType = {
    id: string | null
    batchNo: string | null
    status: $Enums.ProductionStatus | null
    producedProductId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type ProductionMaxAggregateOutputType = {
    id: string | null
    batchNo: string | null
    status: $Enums.ProductionStatus | null
    producedProductId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type ProductionCountAggregateOutputType = {
    id: number
    batchNo: number
    status: number
    producedProductId: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type ProductionMinAggregateInputType = {
    id?: true
    batchNo?: true
    status?: true
    producedProductId?: true
    createdById?: true
    createdAt?: true
  }

  export type ProductionMaxAggregateInputType = {
    id?: true
    batchNo?: true
    status?: true
    producedProductId?: true
    createdById?: true
    createdAt?: true
  }

  export type ProductionCountAggregateInputType = {
    id?: true
    batchNo?: true
    status?: true
    producedProductId?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type ProductionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Production to aggregate.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productions
    **/
    _count?: true | ProductionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionMaxAggregateInputType
  }

  export type GetProductionAggregateType<T extends ProductionAggregateArgs> = {
        [P in keyof T & keyof AggregateProduction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduction[P]>
      : GetScalarType<T[P], AggregateProduction[P]>
  }




  export type ProductionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionWhereInput
    orderBy?: ProductionOrderByWithAggregationInput | ProductionOrderByWithAggregationInput[]
    by: ProductionScalarFieldEnum[] | ProductionScalarFieldEnum
    having?: ProductionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionCountAggregateInputType | true
    _min?: ProductionMinAggregateInputType
    _max?: ProductionMaxAggregateInputType
  }

  export type ProductionGroupByOutputType = {
    id: string
    batchNo: string
    status: $Enums.ProductionStatus
    producedProductId: string
    createdById: string
    createdAt: Date
    _count: ProductionCountAggregateOutputType | null
    _min: ProductionMinAggregateOutputType | null
    _max: ProductionMaxAggregateOutputType | null
  }

  type GetProductionGroupByPayload<T extends ProductionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionGroupByOutputType[P]>
        }
      >
    >


  export type ProductionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchNo?: boolean
    status?: boolean
    producedProductId?: boolean
    createdById?: boolean
    createdAt?: boolean
    producedProduct?: boolean | ProductDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    items?: boolean | Production$itemsArgs<ExtArgs>
    inspections?: boolean | Production$inspectionsArgs<ExtArgs>
    _count?: boolean | ProductionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["production"]>

  export type ProductionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchNo?: boolean
    status?: boolean
    producedProductId?: boolean
    createdById?: boolean
    createdAt?: boolean
    producedProduct?: boolean | ProductDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["production"]>

  export type ProductionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchNo?: boolean
    status?: boolean
    producedProductId?: boolean
    createdById?: boolean
    createdAt?: boolean
    producedProduct?: boolean | ProductDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["production"]>

  export type ProductionSelectScalar = {
    id?: boolean
    batchNo?: boolean
    status?: boolean
    producedProductId?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type ProductionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchNo" | "status" | "producedProductId" | "createdById" | "createdAt", ExtArgs["result"]["production"]>
  export type ProductionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producedProduct?: boolean | ProductDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    items?: boolean | Production$itemsArgs<ExtArgs>
    inspections?: boolean | Production$inspectionsArgs<ExtArgs>
    _count?: boolean | ProductionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producedProduct?: boolean | ProductDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type ProductionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producedProduct?: boolean | ProductDefaultArgs<ExtArgs>
    createdBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $ProductionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Production"
    objects: {
      producedProduct: Prisma.$ProductPayload<ExtArgs>
      createdBy: Prisma.$EmployeePayload<ExtArgs>
      items: Prisma.$ProductionItemPayload<ExtArgs>[]
      inspections: Prisma.$QualityInspectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      batchNo: string
      status: $Enums.ProductionStatus
      producedProductId: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["production"]>
    composites: {}
  }

  type ProductionGetPayload<S extends boolean | null | undefined | ProductionDefaultArgs> = $Result.GetResult<Prisma.$ProductionPayload, S>

  type ProductionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionCountAggregateInputType | true
    }

  export interface ProductionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Production'], meta: { name: 'Production' } }
    /**
     * Find zero or one Production that matches the filter.
     * @param {ProductionFindUniqueArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionFindUniqueArgs>(args: SelectSubset<T, ProductionFindUniqueArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Production that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionFindUniqueOrThrowArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Production that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionFindFirstArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionFindFirstArgs>(args?: SelectSubset<T, ProductionFindFirstArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Production that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionFindFirstOrThrowArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productions
     * const productions = await prisma.production.findMany()
     * 
     * // Get first 10 Productions
     * const productions = await prisma.production.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionWithIdOnly = await prisma.production.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionFindManyArgs>(args?: SelectSubset<T, ProductionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Production.
     * @param {ProductionCreateArgs} args - Arguments to create a Production.
     * @example
     * // Create one Production
     * const Production = await prisma.production.create({
     *   data: {
     *     // ... data to create a Production
     *   }
     * })
     * 
     */
    create<T extends ProductionCreateArgs>(args: SelectSubset<T, ProductionCreateArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productions.
     * @param {ProductionCreateManyArgs} args - Arguments to create many Productions.
     * @example
     * // Create many Productions
     * const production = await prisma.production.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionCreateManyArgs>(args?: SelectSubset<T, ProductionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productions and returns the data saved in the database.
     * @param {ProductionCreateManyAndReturnArgs} args - Arguments to create many Productions.
     * @example
     * // Create many Productions
     * const production = await prisma.production.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productions and only return the `id`
     * const productionWithIdOnly = await prisma.production.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Production.
     * @param {ProductionDeleteArgs} args - Arguments to delete one Production.
     * @example
     * // Delete one Production
     * const Production = await prisma.production.delete({
     *   where: {
     *     // ... filter to delete one Production
     *   }
     * })
     * 
     */
    delete<T extends ProductionDeleteArgs>(args: SelectSubset<T, ProductionDeleteArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Production.
     * @param {ProductionUpdateArgs} args - Arguments to update one Production.
     * @example
     * // Update one Production
     * const production = await prisma.production.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionUpdateArgs>(args: SelectSubset<T, ProductionUpdateArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productions.
     * @param {ProductionDeleteManyArgs} args - Arguments to filter Productions to delete.
     * @example
     * // Delete a few Productions
     * const { count } = await prisma.production.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionDeleteManyArgs>(args?: SelectSubset<T, ProductionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productions
     * const production = await prisma.production.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionUpdateManyArgs>(args: SelectSubset<T, ProductionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productions and returns the data updated in the database.
     * @param {ProductionUpdateManyAndReturnArgs} args - Arguments to update many Productions.
     * @example
     * // Update many Productions
     * const production = await prisma.production.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productions and only return the `id`
     * const productionWithIdOnly = await prisma.production.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Production.
     * @param {ProductionUpsertArgs} args - Arguments to update or create a Production.
     * @example
     * // Update or create a Production
     * const production = await prisma.production.upsert({
     *   create: {
     *     // ... data to create a Production
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Production we want to update
     *   }
     * })
     */
    upsert<T extends ProductionUpsertArgs>(args: SelectSubset<T, ProductionUpsertArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionCountArgs} args - Arguments to filter Productions to count.
     * @example
     * // Count the number of Productions
     * const count = await prisma.production.count({
     *   where: {
     *     // ... the filter for the Productions we want to count
     *   }
     * })
    **/
    count<T extends ProductionCountArgs>(
      args?: Subset<T, ProductionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Production.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductionAggregateArgs>(args: Subset<T, ProductionAggregateArgs>): Prisma.PrismaPromise<GetProductionAggregateType<T>>

    /**
     * Group by Production.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionGroupByArgs['orderBy'] }
        : { orderBy?: ProductionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Production model
   */
  readonly fields: ProductionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Production.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producedProduct<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Production$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Production$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inspections<T extends Production$inspectionsArgs<ExtArgs> = {}>(args?: Subset<T, Production$inspectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Production model
   */
  interface ProductionFieldRefs {
    readonly id: FieldRef<"Production", 'String'>
    readonly batchNo: FieldRef<"Production", 'String'>
    readonly status: FieldRef<"Production", 'ProductionStatus'>
    readonly producedProductId: FieldRef<"Production", 'String'>
    readonly createdById: FieldRef<"Production", 'String'>
    readonly createdAt: FieldRef<"Production", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Production findUnique
   */
  export type ProductionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production findUniqueOrThrow
   */
  export type ProductionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production findFirst
   */
  export type ProductionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productions.
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productions.
     */
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Production findFirstOrThrow
   */
  export type ProductionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productions.
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productions.
     */
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Production findMany
   */
  export type ProductionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Productions to fetch.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productions.
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Production create
   */
  export type ProductionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * The data needed to create a Production.
     */
    data: XOR<ProductionCreateInput, ProductionUncheckedCreateInput>
  }

  /**
   * Production createMany
   */
  export type ProductionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productions.
     */
    data: ProductionCreateManyInput | ProductionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Production createManyAndReturn
   */
  export type ProductionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * The data used to create many Productions.
     */
    data: ProductionCreateManyInput | ProductionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Production update
   */
  export type ProductionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * The data needed to update a Production.
     */
    data: XOR<ProductionUpdateInput, ProductionUncheckedUpdateInput>
    /**
     * Choose, which Production to update.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production updateMany
   */
  export type ProductionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productions.
     */
    data: XOR<ProductionUpdateManyMutationInput, ProductionUncheckedUpdateManyInput>
    /**
     * Filter which Productions to update
     */
    where?: ProductionWhereInput
    /**
     * Limit how many Productions to update.
     */
    limit?: number
  }

  /**
   * Production updateManyAndReturn
   */
  export type ProductionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * The data used to update Productions.
     */
    data: XOR<ProductionUpdateManyMutationInput, ProductionUncheckedUpdateManyInput>
    /**
     * Filter which Productions to update
     */
    where?: ProductionWhereInput
    /**
     * Limit how many Productions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Production upsert
   */
  export type ProductionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * The filter to search for the Production to update in case it exists.
     */
    where: ProductionWhereUniqueInput
    /**
     * In case the Production found by the `where` argument doesn't exist, create a new Production with this data.
     */
    create: XOR<ProductionCreateInput, ProductionUncheckedCreateInput>
    /**
     * In case the Production was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionUpdateInput, ProductionUncheckedUpdateInput>
  }

  /**
   * Production delete
   */
  export type ProductionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter which Production to delete.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production deleteMany
   */
  export type ProductionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productions to delete
     */
    where?: ProductionWhereInput
    /**
     * Limit how many Productions to delete.
     */
    limit?: number
  }

  /**
   * Production.items
   */
  export type Production$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    where?: ProductionItemWhereInput
    orderBy?: ProductionItemOrderByWithRelationInput | ProductionItemOrderByWithRelationInput[]
    cursor?: ProductionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionItemScalarFieldEnum | ProductionItemScalarFieldEnum[]
  }

  /**
   * Production.inspections
   */
  export type Production$inspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    where?: QualityInspectionWhereInput
    orderBy?: QualityInspectionOrderByWithRelationInput | QualityInspectionOrderByWithRelationInput[]
    cursor?: QualityInspectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualityInspectionScalarFieldEnum | QualityInspectionScalarFieldEnum[]
  }

  /**
   * Production without action
   */
  export type ProductionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
  }


  /**
   * Model ProductionItem
   */

  export type AggregateProductionItem = {
    _count: ProductionItemCountAggregateOutputType | null
    _avg: ProductionItemAvgAggregateOutputType | null
    _sum: ProductionItemSumAggregateOutputType | null
    _min: ProductionItemMinAggregateOutputType | null
    _max: ProductionItemMaxAggregateOutputType | null
  }

  export type ProductionItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ProductionItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type ProductionItemMinAggregateOutputType = {
    id: string | null
    productionId: string | null
    productId: string | null
    quantity: number | null
  }

  export type ProductionItemMaxAggregateOutputType = {
    id: string | null
    productionId: string | null
    productId: string | null
    quantity: number | null
  }

  export type ProductionItemCountAggregateOutputType = {
    id: number
    productionId: number
    productId: number
    quantity: number
    _all: number
  }


  export type ProductionItemAvgAggregateInputType = {
    quantity?: true
  }

  export type ProductionItemSumAggregateInputType = {
    quantity?: true
  }

  export type ProductionItemMinAggregateInputType = {
    id?: true
    productionId?: true
    productId?: true
    quantity?: true
  }

  export type ProductionItemMaxAggregateInputType = {
    id?: true
    productionId?: true
    productId?: true
    quantity?: true
  }

  export type ProductionItemCountAggregateInputType = {
    id?: true
    productionId?: true
    productId?: true
    quantity?: true
    _all?: true
  }

  export type ProductionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionItem to aggregate.
     */
    where?: ProductionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionItems to fetch.
     */
    orderBy?: ProductionItemOrderByWithRelationInput | ProductionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionItems
    **/
    _count?: true | ProductionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionItemMaxAggregateInputType
  }

  export type GetProductionItemAggregateType<T extends ProductionItemAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionItem[P]>
      : GetScalarType<T[P], AggregateProductionItem[P]>
  }




  export type ProductionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionItemWhereInput
    orderBy?: ProductionItemOrderByWithAggregationInput | ProductionItemOrderByWithAggregationInput[]
    by: ProductionItemScalarFieldEnum[] | ProductionItemScalarFieldEnum
    having?: ProductionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionItemCountAggregateInputType | true
    _avg?: ProductionItemAvgAggregateInputType
    _sum?: ProductionItemSumAggregateInputType
    _min?: ProductionItemMinAggregateInputType
    _max?: ProductionItemMaxAggregateInputType
  }

  export type ProductionItemGroupByOutputType = {
    id: string
    productionId: string
    productId: string
    quantity: number
    _count: ProductionItemCountAggregateOutputType | null
    _avg: ProductionItemAvgAggregateOutputType | null
    _sum: ProductionItemSumAggregateOutputType | null
    _min: ProductionItemMinAggregateOutputType | null
    _max: ProductionItemMaxAggregateOutputType | null
  }

  type GetProductionItemGroupByPayload<T extends ProductionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionItemGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionItemGroupByOutputType[P]>
        }
      >
    >


  export type ProductionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productionId?: boolean
    productId?: boolean
    quantity?: boolean
    production?: boolean | ProductionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionItem"]>

  export type ProductionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productionId?: boolean
    productId?: boolean
    quantity?: boolean
    production?: boolean | ProductionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionItem"]>

  export type ProductionItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productionId?: boolean
    productId?: boolean
    quantity?: boolean
    production?: boolean | ProductionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionItem"]>

  export type ProductionItemSelectScalar = {
    id?: boolean
    productionId?: boolean
    productId?: boolean
    quantity?: boolean
  }

  export type ProductionItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productionId" | "productId" | "quantity", ExtArgs["result"]["productionItem"]>
  export type ProductionItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    production?: boolean | ProductionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductionItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    production?: boolean | ProductionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductionItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    production?: boolean | ProductionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionItem"
    objects: {
      production: Prisma.$ProductionPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productionId: string
      productId: string
      quantity: number
    }, ExtArgs["result"]["productionItem"]>
    composites: {}
  }

  type ProductionItemGetPayload<S extends boolean | null | undefined | ProductionItemDefaultArgs> = $Result.GetResult<Prisma.$ProductionItemPayload, S>

  type ProductionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionItemCountAggregateInputType | true
    }

  export interface ProductionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductionItem'], meta: { name: 'ProductionItem' } }
    /**
     * Find zero or one ProductionItem that matches the filter.
     * @param {ProductionItemFindUniqueArgs} args - Arguments to find a ProductionItem
     * @example
     * // Get one ProductionItem
     * const productionItem = await prisma.productionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionItemFindUniqueArgs>(args: SelectSubset<T, ProductionItemFindUniqueArgs<ExtArgs>>): Prisma__ProductionItemClient<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductionItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionItemFindUniqueOrThrowArgs} args - Arguments to find a ProductionItem
     * @example
     * // Get one ProductionItem
     * const productionItem = await prisma.productionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionItemClient<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionItemFindFirstArgs} args - Arguments to find a ProductionItem
     * @example
     * // Get one ProductionItem
     * const productionItem = await prisma.productionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionItemFindFirstArgs>(args?: SelectSubset<T, ProductionItemFindFirstArgs<ExtArgs>>): Prisma__ProductionItemClient<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionItemFindFirstOrThrowArgs} args - Arguments to find a ProductionItem
     * @example
     * // Get one ProductionItem
     * const productionItem = await prisma.productionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionItemClient<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionItems
     * const productionItems = await prisma.productionItem.findMany()
     * 
     * // Get first 10 ProductionItems
     * const productionItems = await prisma.productionItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionItemWithIdOnly = await prisma.productionItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionItemFindManyArgs>(args?: SelectSubset<T, ProductionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductionItem.
     * @param {ProductionItemCreateArgs} args - Arguments to create a ProductionItem.
     * @example
     * // Create one ProductionItem
     * const ProductionItem = await prisma.productionItem.create({
     *   data: {
     *     // ... data to create a ProductionItem
     *   }
     * })
     * 
     */
    create<T extends ProductionItemCreateArgs>(args: SelectSubset<T, ProductionItemCreateArgs<ExtArgs>>): Prisma__ProductionItemClient<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductionItems.
     * @param {ProductionItemCreateManyArgs} args - Arguments to create many ProductionItems.
     * @example
     * // Create many ProductionItems
     * const productionItem = await prisma.productionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionItemCreateManyArgs>(args?: SelectSubset<T, ProductionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductionItems and returns the data saved in the database.
     * @param {ProductionItemCreateManyAndReturnArgs} args - Arguments to create many ProductionItems.
     * @example
     * // Create many ProductionItems
     * const productionItem = await prisma.productionItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductionItems and only return the `id`
     * const productionItemWithIdOnly = await prisma.productionItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductionItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductionItem.
     * @param {ProductionItemDeleteArgs} args - Arguments to delete one ProductionItem.
     * @example
     * // Delete one ProductionItem
     * const ProductionItem = await prisma.productionItem.delete({
     *   where: {
     *     // ... filter to delete one ProductionItem
     *   }
     * })
     * 
     */
    delete<T extends ProductionItemDeleteArgs>(args: SelectSubset<T, ProductionItemDeleteArgs<ExtArgs>>): Prisma__ProductionItemClient<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductionItem.
     * @param {ProductionItemUpdateArgs} args - Arguments to update one ProductionItem.
     * @example
     * // Update one ProductionItem
     * const productionItem = await prisma.productionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionItemUpdateArgs>(args: SelectSubset<T, ProductionItemUpdateArgs<ExtArgs>>): Prisma__ProductionItemClient<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductionItems.
     * @param {ProductionItemDeleteManyArgs} args - Arguments to filter ProductionItems to delete.
     * @example
     * // Delete a few ProductionItems
     * const { count } = await prisma.productionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionItemDeleteManyArgs>(args?: SelectSubset<T, ProductionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionItems
     * const productionItem = await prisma.productionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionItemUpdateManyArgs>(args: SelectSubset<T, ProductionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionItems and returns the data updated in the database.
     * @param {ProductionItemUpdateManyAndReturnArgs} args - Arguments to update many ProductionItems.
     * @example
     * // Update many ProductionItems
     * const productionItem = await prisma.productionItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductionItems and only return the `id`
     * const productionItemWithIdOnly = await prisma.productionItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductionItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductionItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductionItem.
     * @param {ProductionItemUpsertArgs} args - Arguments to update or create a ProductionItem.
     * @example
     * // Update or create a ProductionItem
     * const productionItem = await prisma.productionItem.upsert({
     *   create: {
     *     // ... data to create a ProductionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionItem we want to update
     *   }
     * })
     */
    upsert<T extends ProductionItemUpsertArgs>(args: SelectSubset<T, ProductionItemUpsertArgs<ExtArgs>>): Prisma__ProductionItemClient<$Result.GetResult<Prisma.$ProductionItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionItemCountArgs} args - Arguments to filter ProductionItems to count.
     * @example
     * // Count the number of ProductionItems
     * const count = await prisma.productionItem.count({
     *   where: {
     *     // ... the filter for the ProductionItems we want to count
     *   }
     * })
    **/
    count<T extends ProductionItemCountArgs>(
      args?: Subset<T, ProductionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductionItemAggregateArgs>(args: Subset<T, ProductionItemAggregateArgs>): Prisma.PrismaPromise<GetProductionItemAggregateType<T>>

    /**
     * Group by ProductionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionItemGroupByArgs['orderBy'] }
        : { orderBy?: ProductionItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductionItem model
   */
  readonly fields: ProductionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    production<T extends ProductionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductionDefaultArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductionItem model
   */
  interface ProductionItemFieldRefs {
    readonly id: FieldRef<"ProductionItem", 'String'>
    readonly productionId: FieldRef<"ProductionItem", 'String'>
    readonly productId: FieldRef<"ProductionItem", 'String'>
    readonly quantity: FieldRef<"ProductionItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductionItem findUnique
   */
  export type ProductionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    /**
     * Filter, which ProductionItem to fetch.
     */
    where: ProductionItemWhereUniqueInput
  }

  /**
   * ProductionItem findUniqueOrThrow
   */
  export type ProductionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    /**
     * Filter, which ProductionItem to fetch.
     */
    where: ProductionItemWhereUniqueInput
  }

  /**
   * ProductionItem findFirst
   */
  export type ProductionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    /**
     * Filter, which ProductionItem to fetch.
     */
    where?: ProductionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionItems to fetch.
     */
    orderBy?: ProductionItemOrderByWithRelationInput | ProductionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionItems.
     */
    cursor?: ProductionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionItems.
     */
    distinct?: ProductionItemScalarFieldEnum | ProductionItemScalarFieldEnum[]
  }

  /**
   * ProductionItem findFirstOrThrow
   */
  export type ProductionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    /**
     * Filter, which ProductionItem to fetch.
     */
    where?: ProductionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionItems to fetch.
     */
    orderBy?: ProductionItemOrderByWithRelationInput | ProductionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionItems.
     */
    cursor?: ProductionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionItems.
     */
    distinct?: ProductionItemScalarFieldEnum | ProductionItemScalarFieldEnum[]
  }

  /**
   * ProductionItem findMany
   */
  export type ProductionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    /**
     * Filter, which ProductionItems to fetch.
     */
    where?: ProductionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionItems to fetch.
     */
    orderBy?: ProductionItemOrderByWithRelationInput | ProductionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionItems.
     */
    cursor?: ProductionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionItems.
     */
    skip?: number
    distinct?: ProductionItemScalarFieldEnum | ProductionItemScalarFieldEnum[]
  }

  /**
   * ProductionItem create
   */
  export type ProductionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductionItem.
     */
    data: XOR<ProductionItemCreateInput, ProductionItemUncheckedCreateInput>
  }

  /**
   * ProductionItem createMany
   */
  export type ProductionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductionItems.
     */
    data: ProductionItemCreateManyInput | ProductionItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionItem createManyAndReturn
   */
  export type ProductionItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * The data used to create many ProductionItems.
     */
    data: ProductionItemCreateManyInput | ProductionItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductionItem update
   */
  export type ProductionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductionItem.
     */
    data: XOR<ProductionItemUpdateInput, ProductionItemUncheckedUpdateInput>
    /**
     * Choose, which ProductionItem to update.
     */
    where: ProductionItemWhereUniqueInput
  }

  /**
   * ProductionItem updateMany
   */
  export type ProductionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductionItems.
     */
    data: XOR<ProductionItemUpdateManyMutationInput, ProductionItemUncheckedUpdateManyInput>
    /**
     * Filter which ProductionItems to update
     */
    where?: ProductionItemWhereInput
    /**
     * Limit how many ProductionItems to update.
     */
    limit?: number
  }

  /**
   * ProductionItem updateManyAndReturn
   */
  export type ProductionItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * The data used to update ProductionItems.
     */
    data: XOR<ProductionItemUpdateManyMutationInput, ProductionItemUncheckedUpdateManyInput>
    /**
     * Filter which ProductionItems to update
     */
    where?: ProductionItemWhereInput
    /**
     * Limit how many ProductionItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductionItem upsert
   */
  export type ProductionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductionItem to update in case it exists.
     */
    where: ProductionItemWhereUniqueInput
    /**
     * In case the ProductionItem found by the `where` argument doesn't exist, create a new ProductionItem with this data.
     */
    create: XOR<ProductionItemCreateInput, ProductionItemUncheckedCreateInput>
    /**
     * In case the ProductionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionItemUpdateInput, ProductionItemUncheckedUpdateInput>
  }

  /**
   * ProductionItem delete
   */
  export type ProductionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
    /**
     * Filter which ProductionItem to delete.
     */
    where: ProductionItemWhereUniqueInput
  }

  /**
   * ProductionItem deleteMany
   */
  export type ProductionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionItems to delete
     */
    where?: ProductionItemWhereInput
    /**
     * Limit how many ProductionItems to delete.
     */
    limit?: number
  }

  /**
   * ProductionItem without action
   */
  export type ProductionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionItem
     */
    select?: ProductionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionItem
     */
    omit?: ProductionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionItemInclude<ExtArgs> | null
  }


  /**
   * Model QualityInspection
   */

  export type AggregateQualityInspection = {
    _count: QualityInspectionCountAggregateOutputType | null
    _min: QualityInspectionMinAggregateOutputType | null
    _max: QualityInspectionMaxAggregateOutputType | null
  }

  export type QualityInspectionMinAggregateOutputType = {
    id: string | null
    status: $Enums.QualityStatus | null
    remarks: string | null
    productionId: string | null
    purchaseId: string | null
    inspectedById: string | null
    createdAt: Date | null
  }

  export type QualityInspectionMaxAggregateOutputType = {
    id: string | null
    status: $Enums.QualityStatus | null
    remarks: string | null
    productionId: string | null
    purchaseId: string | null
    inspectedById: string | null
    createdAt: Date | null
  }

  export type QualityInspectionCountAggregateOutputType = {
    id: number
    status: number
    remarks: number
    productionId: number
    purchaseId: number
    inspectedById: number
    createdAt: number
    _all: number
  }


  export type QualityInspectionMinAggregateInputType = {
    id?: true
    status?: true
    remarks?: true
    productionId?: true
    purchaseId?: true
    inspectedById?: true
    createdAt?: true
  }

  export type QualityInspectionMaxAggregateInputType = {
    id?: true
    status?: true
    remarks?: true
    productionId?: true
    purchaseId?: true
    inspectedById?: true
    createdAt?: true
  }

  export type QualityInspectionCountAggregateInputType = {
    id?: true
    status?: true
    remarks?: true
    productionId?: true
    purchaseId?: true
    inspectedById?: true
    createdAt?: true
    _all?: true
  }

  export type QualityInspectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualityInspection to aggregate.
     */
    where?: QualityInspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualityInspections to fetch.
     */
    orderBy?: QualityInspectionOrderByWithRelationInput | QualityInspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QualityInspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualityInspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualityInspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QualityInspections
    **/
    _count?: true | QualityInspectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QualityInspectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QualityInspectionMaxAggregateInputType
  }

  export type GetQualityInspectionAggregateType<T extends QualityInspectionAggregateArgs> = {
        [P in keyof T & keyof AggregateQualityInspection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQualityInspection[P]>
      : GetScalarType<T[P], AggregateQualityInspection[P]>
  }




  export type QualityInspectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualityInspectionWhereInput
    orderBy?: QualityInspectionOrderByWithAggregationInput | QualityInspectionOrderByWithAggregationInput[]
    by: QualityInspectionScalarFieldEnum[] | QualityInspectionScalarFieldEnum
    having?: QualityInspectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QualityInspectionCountAggregateInputType | true
    _min?: QualityInspectionMinAggregateInputType
    _max?: QualityInspectionMaxAggregateInputType
  }

  export type QualityInspectionGroupByOutputType = {
    id: string
    status: $Enums.QualityStatus
    remarks: string | null
    productionId: string | null
    purchaseId: string | null
    inspectedById: string
    createdAt: Date
    _count: QualityInspectionCountAggregateOutputType | null
    _min: QualityInspectionMinAggregateOutputType | null
    _max: QualityInspectionMaxAggregateOutputType | null
  }

  type GetQualityInspectionGroupByPayload<T extends QualityInspectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QualityInspectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QualityInspectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QualityInspectionGroupByOutputType[P]>
            : GetScalarType<T[P], QualityInspectionGroupByOutputType[P]>
        }
      >
    >


  export type QualityInspectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    remarks?: boolean
    productionId?: boolean
    purchaseId?: boolean
    inspectedById?: boolean
    createdAt?: boolean
    production?: boolean | QualityInspection$productionArgs<ExtArgs>
    purchase?: boolean | QualityInspection$purchaseArgs<ExtArgs>
    inspectedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualityInspection"]>

  export type QualityInspectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    remarks?: boolean
    productionId?: boolean
    purchaseId?: boolean
    inspectedById?: boolean
    createdAt?: boolean
    production?: boolean | QualityInspection$productionArgs<ExtArgs>
    purchase?: boolean | QualityInspection$purchaseArgs<ExtArgs>
    inspectedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualityInspection"]>

  export type QualityInspectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    remarks?: boolean
    productionId?: boolean
    purchaseId?: boolean
    inspectedById?: boolean
    createdAt?: boolean
    production?: boolean | QualityInspection$productionArgs<ExtArgs>
    purchase?: boolean | QualityInspection$purchaseArgs<ExtArgs>
    inspectedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualityInspection"]>

  export type QualityInspectionSelectScalar = {
    id?: boolean
    status?: boolean
    remarks?: boolean
    productionId?: boolean
    purchaseId?: boolean
    inspectedById?: boolean
    createdAt?: boolean
  }

  export type QualityInspectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "remarks" | "productionId" | "purchaseId" | "inspectedById" | "createdAt", ExtArgs["result"]["qualityInspection"]>
  export type QualityInspectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    production?: boolean | QualityInspection$productionArgs<ExtArgs>
    purchase?: boolean | QualityInspection$purchaseArgs<ExtArgs>
    inspectedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type QualityInspectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    production?: boolean | QualityInspection$productionArgs<ExtArgs>
    purchase?: boolean | QualityInspection$purchaseArgs<ExtArgs>
    inspectedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type QualityInspectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    production?: boolean | QualityInspection$productionArgs<ExtArgs>
    purchase?: boolean | QualityInspection$purchaseArgs<ExtArgs>
    inspectedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $QualityInspectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QualityInspection"
    objects: {
      production: Prisma.$ProductionPayload<ExtArgs> | null
      purchase: Prisma.$PurchasePayload<ExtArgs> | null
      inspectedBy: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.QualityStatus
      remarks: string | null
      productionId: string | null
      purchaseId: string | null
      inspectedById: string
      createdAt: Date
    }, ExtArgs["result"]["qualityInspection"]>
    composites: {}
  }

  type QualityInspectionGetPayload<S extends boolean | null | undefined | QualityInspectionDefaultArgs> = $Result.GetResult<Prisma.$QualityInspectionPayload, S>

  type QualityInspectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QualityInspectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QualityInspectionCountAggregateInputType | true
    }

  export interface QualityInspectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QualityInspection'], meta: { name: 'QualityInspection' } }
    /**
     * Find zero or one QualityInspection that matches the filter.
     * @param {QualityInspectionFindUniqueArgs} args - Arguments to find a QualityInspection
     * @example
     * // Get one QualityInspection
     * const qualityInspection = await prisma.qualityInspection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QualityInspectionFindUniqueArgs>(args: SelectSubset<T, QualityInspectionFindUniqueArgs<ExtArgs>>): Prisma__QualityInspectionClient<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QualityInspection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QualityInspectionFindUniqueOrThrowArgs} args - Arguments to find a QualityInspection
     * @example
     * // Get one QualityInspection
     * const qualityInspection = await prisma.qualityInspection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QualityInspectionFindUniqueOrThrowArgs>(args: SelectSubset<T, QualityInspectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QualityInspectionClient<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualityInspection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityInspectionFindFirstArgs} args - Arguments to find a QualityInspection
     * @example
     * // Get one QualityInspection
     * const qualityInspection = await prisma.qualityInspection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QualityInspectionFindFirstArgs>(args?: SelectSubset<T, QualityInspectionFindFirstArgs<ExtArgs>>): Prisma__QualityInspectionClient<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualityInspection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityInspectionFindFirstOrThrowArgs} args - Arguments to find a QualityInspection
     * @example
     * // Get one QualityInspection
     * const qualityInspection = await prisma.qualityInspection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QualityInspectionFindFirstOrThrowArgs>(args?: SelectSubset<T, QualityInspectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QualityInspectionClient<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QualityInspections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityInspectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QualityInspections
     * const qualityInspections = await prisma.qualityInspection.findMany()
     * 
     * // Get first 10 QualityInspections
     * const qualityInspections = await prisma.qualityInspection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qualityInspectionWithIdOnly = await prisma.qualityInspection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QualityInspectionFindManyArgs>(args?: SelectSubset<T, QualityInspectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QualityInspection.
     * @param {QualityInspectionCreateArgs} args - Arguments to create a QualityInspection.
     * @example
     * // Create one QualityInspection
     * const QualityInspection = await prisma.qualityInspection.create({
     *   data: {
     *     // ... data to create a QualityInspection
     *   }
     * })
     * 
     */
    create<T extends QualityInspectionCreateArgs>(args: SelectSubset<T, QualityInspectionCreateArgs<ExtArgs>>): Prisma__QualityInspectionClient<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QualityInspections.
     * @param {QualityInspectionCreateManyArgs} args - Arguments to create many QualityInspections.
     * @example
     * // Create many QualityInspections
     * const qualityInspection = await prisma.qualityInspection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QualityInspectionCreateManyArgs>(args?: SelectSubset<T, QualityInspectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QualityInspections and returns the data saved in the database.
     * @param {QualityInspectionCreateManyAndReturnArgs} args - Arguments to create many QualityInspections.
     * @example
     * // Create many QualityInspections
     * const qualityInspection = await prisma.qualityInspection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QualityInspections and only return the `id`
     * const qualityInspectionWithIdOnly = await prisma.qualityInspection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QualityInspectionCreateManyAndReturnArgs>(args?: SelectSubset<T, QualityInspectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QualityInspection.
     * @param {QualityInspectionDeleteArgs} args - Arguments to delete one QualityInspection.
     * @example
     * // Delete one QualityInspection
     * const QualityInspection = await prisma.qualityInspection.delete({
     *   where: {
     *     // ... filter to delete one QualityInspection
     *   }
     * })
     * 
     */
    delete<T extends QualityInspectionDeleteArgs>(args: SelectSubset<T, QualityInspectionDeleteArgs<ExtArgs>>): Prisma__QualityInspectionClient<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QualityInspection.
     * @param {QualityInspectionUpdateArgs} args - Arguments to update one QualityInspection.
     * @example
     * // Update one QualityInspection
     * const qualityInspection = await prisma.qualityInspection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QualityInspectionUpdateArgs>(args: SelectSubset<T, QualityInspectionUpdateArgs<ExtArgs>>): Prisma__QualityInspectionClient<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QualityInspections.
     * @param {QualityInspectionDeleteManyArgs} args - Arguments to filter QualityInspections to delete.
     * @example
     * // Delete a few QualityInspections
     * const { count } = await prisma.qualityInspection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QualityInspectionDeleteManyArgs>(args?: SelectSubset<T, QualityInspectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualityInspections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityInspectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QualityInspections
     * const qualityInspection = await prisma.qualityInspection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QualityInspectionUpdateManyArgs>(args: SelectSubset<T, QualityInspectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualityInspections and returns the data updated in the database.
     * @param {QualityInspectionUpdateManyAndReturnArgs} args - Arguments to update many QualityInspections.
     * @example
     * // Update many QualityInspections
     * const qualityInspection = await prisma.qualityInspection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QualityInspections and only return the `id`
     * const qualityInspectionWithIdOnly = await prisma.qualityInspection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QualityInspectionUpdateManyAndReturnArgs>(args: SelectSubset<T, QualityInspectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QualityInspection.
     * @param {QualityInspectionUpsertArgs} args - Arguments to update or create a QualityInspection.
     * @example
     * // Update or create a QualityInspection
     * const qualityInspection = await prisma.qualityInspection.upsert({
     *   create: {
     *     // ... data to create a QualityInspection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QualityInspection we want to update
     *   }
     * })
     */
    upsert<T extends QualityInspectionUpsertArgs>(args: SelectSubset<T, QualityInspectionUpsertArgs<ExtArgs>>): Prisma__QualityInspectionClient<$Result.GetResult<Prisma.$QualityInspectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QualityInspections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityInspectionCountArgs} args - Arguments to filter QualityInspections to count.
     * @example
     * // Count the number of QualityInspections
     * const count = await prisma.qualityInspection.count({
     *   where: {
     *     // ... the filter for the QualityInspections we want to count
     *   }
     * })
    **/
    count<T extends QualityInspectionCountArgs>(
      args?: Subset<T, QualityInspectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QualityInspectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QualityInspection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityInspectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QualityInspectionAggregateArgs>(args: Subset<T, QualityInspectionAggregateArgs>): Prisma.PrismaPromise<GetQualityInspectionAggregateType<T>>

    /**
     * Group by QualityInspection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityInspectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QualityInspectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QualityInspectionGroupByArgs['orderBy'] }
        : { orderBy?: QualityInspectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QualityInspectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualityInspectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QualityInspection model
   */
  readonly fields: QualityInspectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QualityInspection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QualityInspectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    production<T extends QualityInspection$productionArgs<ExtArgs> = {}>(args?: Subset<T, QualityInspection$productionArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    purchase<T extends QualityInspection$purchaseArgs<ExtArgs> = {}>(args?: Subset<T, QualityInspection$purchaseArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inspectedBy<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QualityInspection model
   */
  interface QualityInspectionFieldRefs {
    readonly id: FieldRef<"QualityInspection", 'String'>
    readonly status: FieldRef<"QualityInspection", 'QualityStatus'>
    readonly remarks: FieldRef<"QualityInspection", 'String'>
    readonly productionId: FieldRef<"QualityInspection", 'String'>
    readonly purchaseId: FieldRef<"QualityInspection", 'String'>
    readonly inspectedById: FieldRef<"QualityInspection", 'String'>
    readonly createdAt: FieldRef<"QualityInspection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QualityInspection findUnique
   */
  export type QualityInspectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    /**
     * Filter, which QualityInspection to fetch.
     */
    where: QualityInspectionWhereUniqueInput
  }

  /**
   * QualityInspection findUniqueOrThrow
   */
  export type QualityInspectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    /**
     * Filter, which QualityInspection to fetch.
     */
    where: QualityInspectionWhereUniqueInput
  }

  /**
   * QualityInspection findFirst
   */
  export type QualityInspectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    /**
     * Filter, which QualityInspection to fetch.
     */
    where?: QualityInspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualityInspections to fetch.
     */
    orderBy?: QualityInspectionOrderByWithRelationInput | QualityInspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualityInspections.
     */
    cursor?: QualityInspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualityInspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualityInspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualityInspections.
     */
    distinct?: QualityInspectionScalarFieldEnum | QualityInspectionScalarFieldEnum[]
  }

  /**
   * QualityInspection findFirstOrThrow
   */
  export type QualityInspectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    /**
     * Filter, which QualityInspection to fetch.
     */
    where?: QualityInspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualityInspections to fetch.
     */
    orderBy?: QualityInspectionOrderByWithRelationInput | QualityInspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualityInspections.
     */
    cursor?: QualityInspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualityInspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualityInspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualityInspections.
     */
    distinct?: QualityInspectionScalarFieldEnum | QualityInspectionScalarFieldEnum[]
  }

  /**
   * QualityInspection findMany
   */
  export type QualityInspectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    /**
     * Filter, which QualityInspections to fetch.
     */
    where?: QualityInspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualityInspections to fetch.
     */
    orderBy?: QualityInspectionOrderByWithRelationInput | QualityInspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QualityInspections.
     */
    cursor?: QualityInspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualityInspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualityInspections.
     */
    skip?: number
    distinct?: QualityInspectionScalarFieldEnum | QualityInspectionScalarFieldEnum[]
  }

  /**
   * QualityInspection create
   */
  export type QualityInspectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    /**
     * The data needed to create a QualityInspection.
     */
    data: XOR<QualityInspectionCreateInput, QualityInspectionUncheckedCreateInput>
  }

  /**
   * QualityInspection createMany
   */
  export type QualityInspectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QualityInspections.
     */
    data: QualityInspectionCreateManyInput | QualityInspectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QualityInspection createManyAndReturn
   */
  export type QualityInspectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * The data used to create many QualityInspections.
     */
    data: QualityInspectionCreateManyInput | QualityInspectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QualityInspection update
   */
  export type QualityInspectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    /**
     * The data needed to update a QualityInspection.
     */
    data: XOR<QualityInspectionUpdateInput, QualityInspectionUncheckedUpdateInput>
    /**
     * Choose, which QualityInspection to update.
     */
    where: QualityInspectionWhereUniqueInput
  }

  /**
   * QualityInspection updateMany
   */
  export type QualityInspectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QualityInspections.
     */
    data: XOR<QualityInspectionUpdateManyMutationInput, QualityInspectionUncheckedUpdateManyInput>
    /**
     * Filter which QualityInspections to update
     */
    where?: QualityInspectionWhereInput
    /**
     * Limit how many QualityInspections to update.
     */
    limit?: number
  }

  /**
   * QualityInspection updateManyAndReturn
   */
  export type QualityInspectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * The data used to update QualityInspections.
     */
    data: XOR<QualityInspectionUpdateManyMutationInput, QualityInspectionUncheckedUpdateManyInput>
    /**
     * Filter which QualityInspections to update
     */
    where?: QualityInspectionWhereInput
    /**
     * Limit how many QualityInspections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QualityInspection upsert
   */
  export type QualityInspectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    /**
     * The filter to search for the QualityInspection to update in case it exists.
     */
    where: QualityInspectionWhereUniqueInput
    /**
     * In case the QualityInspection found by the `where` argument doesn't exist, create a new QualityInspection with this data.
     */
    create: XOR<QualityInspectionCreateInput, QualityInspectionUncheckedCreateInput>
    /**
     * In case the QualityInspection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QualityInspectionUpdateInput, QualityInspectionUncheckedUpdateInput>
  }

  /**
   * QualityInspection delete
   */
  export type QualityInspectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
    /**
     * Filter which QualityInspection to delete.
     */
    where: QualityInspectionWhereUniqueInput
  }

  /**
   * QualityInspection deleteMany
   */
  export type QualityInspectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualityInspections to delete
     */
    where?: QualityInspectionWhereInput
    /**
     * Limit how many QualityInspections to delete.
     */
    limit?: number
  }

  /**
   * QualityInspection.production
   */
  export type QualityInspection$productionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    where?: ProductionWhereInput
  }

  /**
   * QualityInspection.purchase
   */
  export type QualityInspection$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
  }

  /**
   * QualityInspection without action
   */
  export type QualityInspectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityInspection
     */
    select?: QualityInspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityInspection
     */
    omit?: QualityInspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualityInspectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    refreshTokenHash: 'refreshTokenHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    designation: 'designation',
    department: 'department',
    createdAt: 'createdAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sku: 'sku',
    description: 'description',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    referenceNo: 'referenceNo',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const PurchaseItemScalarFieldEnum: {
    id: 'id',
    purchaseId: 'purchaseId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice'
  };

  export type PurchaseItemScalarFieldEnum = (typeof PurchaseItemScalarFieldEnum)[keyof typeof PurchaseItemScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    invoiceNo: 'invoiceNo',
    status: 'status',
    customerId: 'customerId',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SaleItemScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice'
  };

  export type SaleItemScalarFieldEnum = (typeof SaleItemScalarFieldEnum)[keyof typeof SaleItemScalarFieldEnum]


  export const ProductionScalarFieldEnum: {
    id: 'id',
    batchNo: 'batchNo',
    status: 'status',
    producedProductId: 'producedProductId',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type ProductionScalarFieldEnum = (typeof ProductionScalarFieldEnum)[keyof typeof ProductionScalarFieldEnum]


  export const ProductionItemScalarFieldEnum: {
    id: 'id',
    productionId: 'productionId',
    productId: 'productId',
    quantity: 'quantity'
  };

  export type ProductionItemScalarFieldEnum = (typeof ProductionItemScalarFieldEnum)[keyof typeof ProductionItemScalarFieldEnum]


  export const QualityInspectionScalarFieldEnum: {
    id: 'id',
    status: 'status',
    remarks: 'remarks',
    productionId: 'productionId',
    purchaseId: 'purchaseId',
    inspectedById: 'inspectedById',
    createdAt: 'createdAt'
  };

  export type QualityInspectionScalarFieldEnum = (typeof QualityInspectionScalarFieldEnum)[keyof typeof QualityInspectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RoleType'
   */
  export type EnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType'>
    


  /**
   * Reference to a field of type 'RoleType[]'
   */
  export type ListEnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SaleStatus'
   */
  export type EnumSaleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SaleStatus'>
    


  /**
   * Reference to a field of type 'SaleStatus[]'
   */
  export type ListEnumSaleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SaleStatus[]'>
    


  /**
   * Reference to a field of type 'ProductionStatus'
   */
  export type EnumProductionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductionStatus'>
    


  /**
   * Reference to a field of type 'ProductionStatus[]'
   */
  export type ListEnumProductionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductionStatus[]'>
    


  /**
   * Reference to a field of type 'QualityStatus'
   */
  export type EnumQualityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QualityStatus'>
    


  /**
   * Reference to a field of type 'QualityStatus[]'
   */
  export type ListEnumQualityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QualityStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    refreshTokenHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    refreshTokenHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
    employee?: EmployeeOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    refreshTokenHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    refreshTokenHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    refreshTokenHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: EnumRoleTypeFilter<"Role"> | $Enums.RoleType
    users?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.RoleType
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: EnumRoleTypeWithAggregatesFilter<"Role"> | $Enums.RoleType
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserRole"> | string
    roleId?: StringWithAggregatesFilter<"UserRole"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    userId?: StringFilter<"Employee"> | string
    designation?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    productions?: ProductionListRelationFilter
    sales?: SaleListRelationFilter
    purchases?: PurchaseListRelationFilter
    inspections?: QualityInspectionListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    designation?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    productions?: ProductionOrderByRelationAggregateInput
    sales?: SaleOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
    inspections?: QualityInspectionOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    designation?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    productions?: ProductionListRelationFilter
    sales?: SaleListRelationFilter
    purchases?: PurchaseListRelationFilter
    inspections?: QualityInspectionListRelationFilter
  }, "id" | "userId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    designation?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    userId?: StringWithAggregatesFilter<"Employee"> | string
    designation?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    department?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    userId?: StringNullableFilter<"Customer"> | string | null
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sales?: SaleListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sales?: SaleOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sales?: SaleListRelationFilter
  }, "id" | "userId">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    userId?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    saleItems?: SaleItemListRelationFilter
    purchaseItems?: PurchaseItemListRelationFilter
    productionItems?: ProductionItemListRelationFilter
    productionsAsFinished?: ProductionListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    saleItems?: SaleItemOrderByRelationAggregateInput
    purchaseItems?: PurchaseItemOrderByRelationAggregateInput
    productionItems?: ProductionItemOrderByRelationAggregateInput
    productionsAsFinished?: ProductionOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    saleItems?: SaleItemListRelationFilter
    purchaseItems?: PurchaseItemListRelationFilter
    productionItems?: ProductionItemListRelationFilter
    productionsAsFinished?: ProductionListRelationFilter
  }, "id" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    referenceNo?: StringFilter<"Purchase"> | string
    createdById?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    createdBy?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    items?: PurchaseItemListRelationFilter
    inspections?: QualityInspectionListRelationFilter
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    createdBy?: EmployeeOrderByWithRelationInput
    items?: PurchaseItemOrderByRelationAggregateInput
    inspections?: QualityInspectionOrderByRelationAggregateInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referenceNo?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    createdById?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    createdBy?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    items?: PurchaseItemListRelationFilter
    inspections?: QualityInspectionListRelationFilter
  }, "id" | "referenceNo">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    referenceNo?: StringWithAggregatesFilter<"Purchase"> | string
    createdById?: StringWithAggregatesFilter<"Purchase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type PurchaseItemWhereInput = {
    AND?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    OR?: PurchaseItemWhereInput[]
    NOT?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    id?: StringFilter<"PurchaseItem"> | string
    purchaseId?: StringFilter<"PurchaseItem"> | string
    productId?: StringFilter<"PurchaseItem"> | string
    quantity?: IntFilter<"PurchaseItem"> | number
    unitPrice?: DecimalFilter<"PurchaseItem"> | Decimal | DecimalJsLike | number | string
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type PurchaseItemOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type PurchaseItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    OR?: PurchaseItemWhereInput[]
    NOT?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    purchaseId?: StringFilter<"PurchaseItem"> | string
    productId?: StringFilter<"PurchaseItem"> | string
    quantity?: IntFilter<"PurchaseItem"> | number
    unitPrice?: DecimalFilter<"PurchaseItem"> | Decimal | DecimalJsLike | number | string
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type PurchaseItemOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    _count?: PurchaseItemCountOrderByAggregateInput
    _avg?: PurchaseItemAvgOrderByAggregateInput
    _max?: PurchaseItemMaxOrderByAggregateInput
    _min?: PurchaseItemMinOrderByAggregateInput
    _sum?: PurchaseItemSumOrderByAggregateInput
  }

  export type PurchaseItemScalarWhereWithAggregatesInput = {
    AND?: PurchaseItemScalarWhereWithAggregatesInput | PurchaseItemScalarWhereWithAggregatesInput[]
    OR?: PurchaseItemScalarWhereWithAggregatesInput[]
    NOT?: PurchaseItemScalarWhereWithAggregatesInput | PurchaseItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseItem"> | string
    purchaseId?: StringWithAggregatesFilter<"PurchaseItem"> | string
    productId?: StringWithAggregatesFilter<"PurchaseItem"> | string
    quantity?: IntWithAggregatesFilter<"PurchaseItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"PurchaseItem"> | Decimal | DecimalJsLike | number | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    invoiceNo?: StringFilter<"Sale"> | string
    status?: EnumSaleStatusFilter<"Sale"> | $Enums.SaleStatus
    customerId?: StringFilter<"Sale"> | string
    createdById?: StringFilter<"Sale"> | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    createdBy?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    items?: SaleItemListRelationFilter
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    createdBy?: EmployeeOrderByWithRelationInput
    items?: SaleItemOrderByRelationAggregateInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNo?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    status?: EnumSaleStatusFilter<"Sale"> | $Enums.SaleStatus
    customerId?: StringFilter<"Sale"> | string
    createdById?: StringFilter<"Sale"> | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    createdBy?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    items?: SaleItemListRelationFilter
  }, "id" | "invoiceNo">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    invoiceNo?: StringWithAggregatesFilter<"Sale"> | string
    status?: EnumSaleStatusWithAggregatesFilter<"Sale"> | $Enums.SaleStatus
    customerId?: StringWithAggregatesFilter<"Sale"> | string
    createdById?: StringWithAggregatesFilter<"Sale"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
  }

  export type SaleItemWhereInput = {
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    id?: StringFilter<"SaleItem"> | string
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    quantity?: IntFilter<"SaleItem"> | number
    unitPrice?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type SaleItemOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    sale?: SaleOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type SaleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    quantity?: IntFilter<"SaleItem"> | number
    unitPrice?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type SaleItemOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    _count?: SaleItemCountOrderByAggregateInput
    _avg?: SaleItemAvgOrderByAggregateInput
    _max?: SaleItemMaxOrderByAggregateInput
    _min?: SaleItemMinOrderByAggregateInput
    _sum?: SaleItemSumOrderByAggregateInput
  }

  export type SaleItemScalarWhereWithAggregatesInput = {
    AND?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    OR?: SaleItemScalarWhereWithAggregatesInput[]
    NOT?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaleItem"> | string
    saleId?: StringWithAggregatesFilter<"SaleItem"> | string
    productId?: StringWithAggregatesFilter<"SaleItem"> | string
    quantity?: IntWithAggregatesFilter<"SaleItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
  }

  export type ProductionWhereInput = {
    AND?: ProductionWhereInput | ProductionWhereInput[]
    OR?: ProductionWhereInput[]
    NOT?: ProductionWhereInput | ProductionWhereInput[]
    id?: StringFilter<"Production"> | string
    batchNo?: StringFilter<"Production"> | string
    status?: EnumProductionStatusFilter<"Production"> | $Enums.ProductionStatus
    producedProductId?: StringFilter<"Production"> | string
    createdById?: StringFilter<"Production"> | string
    createdAt?: DateTimeFilter<"Production"> | Date | string
    producedProduct?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    createdBy?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    items?: ProductionItemListRelationFilter
    inspections?: QualityInspectionListRelationFilter
  }

  export type ProductionOrderByWithRelationInput = {
    id?: SortOrder
    batchNo?: SortOrder
    status?: SortOrder
    producedProductId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    producedProduct?: ProductOrderByWithRelationInput
    createdBy?: EmployeeOrderByWithRelationInput
    items?: ProductionItemOrderByRelationAggregateInput
    inspections?: QualityInspectionOrderByRelationAggregateInput
  }

  export type ProductionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    batchNo?: string
    AND?: ProductionWhereInput | ProductionWhereInput[]
    OR?: ProductionWhereInput[]
    NOT?: ProductionWhereInput | ProductionWhereInput[]
    status?: EnumProductionStatusFilter<"Production"> | $Enums.ProductionStatus
    producedProductId?: StringFilter<"Production"> | string
    createdById?: StringFilter<"Production"> | string
    createdAt?: DateTimeFilter<"Production"> | Date | string
    producedProduct?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    createdBy?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    items?: ProductionItemListRelationFilter
    inspections?: QualityInspectionListRelationFilter
  }, "id" | "batchNo">

  export type ProductionOrderByWithAggregationInput = {
    id?: SortOrder
    batchNo?: SortOrder
    status?: SortOrder
    producedProductId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: ProductionCountOrderByAggregateInput
    _max?: ProductionMaxOrderByAggregateInput
    _min?: ProductionMinOrderByAggregateInput
  }

  export type ProductionScalarWhereWithAggregatesInput = {
    AND?: ProductionScalarWhereWithAggregatesInput | ProductionScalarWhereWithAggregatesInput[]
    OR?: ProductionScalarWhereWithAggregatesInput[]
    NOT?: ProductionScalarWhereWithAggregatesInput | ProductionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Production"> | string
    batchNo?: StringWithAggregatesFilter<"Production"> | string
    status?: EnumProductionStatusWithAggregatesFilter<"Production"> | $Enums.ProductionStatus
    producedProductId?: StringWithAggregatesFilter<"Production"> | string
    createdById?: StringWithAggregatesFilter<"Production"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Production"> | Date | string
  }

  export type ProductionItemWhereInput = {
    AND?: ProductionItemWhereInput | ProductionItemWhereInput[]
    OR?: ProductionItemWhereInput[]
    NOT?: ProductionItemWhereInput | ProductionItemWhereInput[]
    id?: StringFilter<"ProductionItem"> | string
    productionId?: StringFilter<"ProductionItem"> | string
    productId?: StringFilter<"ProductionItem"> | string
    quantity?: IntFilter<"ProductionItem"> | number
    production?: XOR<ProductionScalarRelationFilter, ProductionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductionItemOrderByWithRelationInput = {
    id?: SortOrder
    productionId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    production?: ProductionOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ProductionItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductionItemWhereInput | ProductionItemWhereInput[]
    OR?: ProductionItemWhereInput[]
    NOT?: ProductionItemWhereInput | ProductionItemWhereInput[]
    productionId?: StringFilter<"ProductionItem"> | string
    productId?: StringFilter<"ProductionItem"> | string
    quantity?: IntFilter<"ProductionItem"> | number
    production?: XOR<ProductionScalarRelationFilter, ProductionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductionItemOrderByWithAggregationInput = {
    id?: SortOrder
    productionId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    _count?: ProductionItemCountOrderByAggregateInput
    _avg?: ProductionItemAvgOrderByAggregateInput
    _max?: ProductionItemMaxOrderByAggregateInput
    _min?: ProductionItemMinOrderByAggregateInput
    _sum?: ProductionItemSumOrderByAggregateInput
  }

  export type ProductionItemScalarWhereWithAggregatesInput = {
    AND?: ProductionItemScalarWhereWithAggregatesInput | ProductionItemScalarWhereWithAggregatesInput[]
    OR?: ProductionItemScalarWhereWithAggregatesInput[]
    NOT?: ProductionItemScalarWhereWithAggregatesInput | ProductionItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductionItem"> | string
    productionId?: StringWithAggregatesFilter<"ProductionItem"> | string
    productId?: StringWithAggregatesFilter<"ProductionItem"> | string
    quantity?: IntWithAggregatesFilter<"ProductionItem"> | number
  }

  export type QualityInspectionWhereInput = {
    AND?: QualityInspectionWhereInput | QualityInspectionWhereInput[]
    OR?: QualityInspectionWhereInput[]
    NOT?: QualityInspectionWhereInput | QualityInspectionWhereInput[]
    id?: StringFilter<"QualityInspection"> | string
    status?: EnumQualityStatusFilter<"QualityInspection"> | $Enums.QualityStatus
    remarks?: StringNullableFilter<"QualityInspection"> | string | null
    productionId?: StringNullableFilter<"QualityInspection"> | string | null
    purchaseId?: StringNullableFilter<"QualityInspection"> | string | null
    inspectedById?: StringFilter<"QualityInspection"> | string
    createdAt?: DateTimeFilter<"QualityInspection"> | Date | string
    production?: XOR<ProductionNullableScalarRelationFilter, ProductionWhereInput> | null
    purchase?: XOR<PurchaseNullableScalarRelationFilter, PurchaseWhereInput> | null
    inspectedBy?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type QualityInspectionOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    productionId?: SortOrderInput | SortOrder
    purchaseId?: SortOrderInput | SortOrder
    inspectedById?: SortOrder
    createdAt?: SortOrder
    production?: ProductionOrderByWithRelationInput
    purchase?: PurchaseOrderByWithRelationInput
    inspectedBy?: EmployeeOrderByWithRelationInput
  }

  export type QualityInspectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QualityInspectionWhereInput | QualityInspectionWhereInput[]
    OR?: QualityInspectionWhereInput[]
    NOT?: QualityInspectionWhereInput | QualityInspectionWhereInput[]
    status?: EnumQualityStatusFilter<"QualityInspection"> | $Enums.QualityStatus
    remarks?: StringNullableFilter<"QualityInspection"> | string | null
    productionId?: StringNullableFilter<"QualityInspection"> | string | null
    purchaseId?: StringNullableFilter<"QualityInspection"> | string | null
    inspectedById?: StringFilter<"QualityInspection"> | string
    createdAt?: DateTimeFilter<"QualityInspection"> | Date | string
    production?: XOR<ProductionNullableScalarRelationFilter, ProductionWhereInput> | null
    purchase?: XOR<PurchaseNullableScalarRelationFilter, PurchaseWhereInput> | null
    inspectedBy?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type QualityInspectionOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    productionId?: SortOrderInput | SortOrder
    purchaseId?: SortOrderInput | SortOrder
    inspectedById?: SortOrder
    createdAt?: SortOrder
    _count?: QualityInspectionCountOrderByAggregateInput
    _max?: QualityInspectionMaxOrderByAggregateInput
    _min?: QualityInspectionMinOrderByAggregateInput
  }

  export type QualityInspectionScalarWhereWithAggregatesInput = {
    AND?: QualityInspectionScalarWhereWithAggregatesInput | QualityInspectionScalarWhereWithAggregatesInput[]
    OR?: QualityInspectionScalarWhereWithAggregatesInput[]
    NOT?: QualityInspectionScalarWhereWithAggregatesInput | QualityInspectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QualityInspection"> | string
    status?: EnumQualityStatusWithAggregatesFilter<"QualityInspection"> | $Enums.QualityStatus
    remarks?: StringNullableWithAggregatesFilter<"QualityInspection"> | string | null
    productionId?: StringNullableWithAggregatesFilter<"QualityInspection"> | string | null
    purchaseId?: StringNullableWithAggregatesFilter<"QualityInspection"> | string | null
    inspectedById?: StringWithAggregatesFilter<"QualityInspection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QualityInspection"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    isActive?: boolean
    refreshTokenHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    isActive?: boolean
    refreshTokenHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    isActive?: boolean
    refreshTokenHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: $Enums.RoleType
    users?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: $Enums.RoleType
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    users?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: $Enums.RoleType
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
  }

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    id?: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    productions?: ProductionCreateNestedManyWithoutCreatedByInput
    sales?: SaleCreateNestedManyWithoutCreatedByInput
    purchases?: PurchaseCreateNestedManyWithoutCreatedByInput
    inspections?: QualityInspectionCreateNestedManyWithoutInspectedByInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    userId: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutCreatedByInput
    sales?: SaleUncheckedCreateNestedManyWithoutCreatedByInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByInput
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutInspectedByInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    productions?: ProductionUpdateManyWithoutCreatedByNestedInput
    sales?: SaleUpdateManyWithoutCreatedByNestedInput
    purchases?: PurchaseUpdateManyWithoutCreatedByNestedInput
    inspections?: QualityInspectionUpdateManyWithoutInspectedByNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutCreatedByNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCreatedByNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutCreatedByNestedInput
    inspections?: QualityInspectionUncheckedUpdateManyWithoutInspectedByNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    userId: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutCustomerInput
    sales?: SaleCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    userId?: string | null
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCustomerNestedInput
    sales?: SaleUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    userId?: string | null
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemCreateNestedManyWithoutProductInput
    productionItems?: ProductionItemCreateNestedManyWithoutProductInput
    productionsAsFinished?: ProductionCreateNestedManyWithoutProducedProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemUncheckedCreateNestedManyWithoutProductInput
    productionItems?: ProductionItemUncheckedCreateNestedManyWithoutProductInput
    productionsAsFinished?: ProductionUncheckedCreateNestedManyWithoutProducedProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUpdateManyWithoutProductNestedInput
    productionItems?: ProductionItemUpdateManyWithoutProductNestedInput
    productionsAsFinished?: ProductionUpdateManyWithoutProducedProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUncheckedUpdateManyWithoutProductNestedInput
    productionItems?: ProductionItemUncheckedUpdateManyWithoutProductNestedInput
    productionsAsFinished?: ProductionUncheckedUpdateManyWithoutProducedProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    id?: string
    referenceNo: string
    createdAt?: Date | string
    createdBy: EmployeeCreateNestedOneWithoutPurchasesInput
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    inspections?: QualityInspectionCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    referenceNo: string
    createdById: string
    createdAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: EmployeeUpdateOneRequiredWithoutPurchasesNestedInput
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    inspections?: QualityInspectionUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    inspections?: QualityInspectionUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: string
    referenceNo: string
    createdById: string
    createdAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    purchase: PurchaseCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutPurchaseItemsInput
  }

  export type PurchaseItemUncheckedCreateInput = {
    id?: string
    purchaseId: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase?: PurchaseUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutPurchaseItemsNestedInput
  }

  export type PurchaseItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemCreateManyInput = {
    id?: string
    purchaseId: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleCreateInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSalesInput
    createdBy: EmployeeCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    customerId: string
    createdById: string
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSalesNestedInput
    createdBy?: EmployeeUpdateOneRequiredWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    customerId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    customerId: string
    createdById: string
    createdAt?: Date | string
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    customerId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    sale: SaleCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateInput = {
    id?: string
    saleId: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateManyInput = {
    id?: string
    saleId: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductionCreateInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    createdAt?: Date | string
    producedProduct: ProductCreateNestedOneWithoutProductionsAsFinishedInput
    createdBy: EmployeeCreateNestedOneWithoutProductionsInput
    items?: ProductionItemCreateNestedManyWithoutProductionInput
    inspections?: QualityInspectionCreateNestedManyWithoutProductionInput
  }

  export type ProductionUncheckedCreateInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    producedProductId: string
    createdById: string
    createdAt?: Date | string
    items?: ProductionItemUncheckedCreateNestedManyWithoutProductionInput
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutProductionInput
  }

  export type ProductionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producedProduct?: ProductUpdateOneRequiredWithoutProductionsAsFinishedNestedInput
    createdBy?: EmployeeUpdateOneRequiredWithoutProductionsNestedInput
    items?: ProductionItemUpdateManyWithoutProductionNestedInput
    inspections?: QualityInspectionUpdateManyWithoutProductionNestedInput
  }

  export type ProductionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    producedProductId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProductionItemUncheckedUpdateManyWithoutProductionNestedInput
    inspections?: QualityInspectionUncheckedUpdateManyWithoutProductionNestedInput
  }

  export type ProductionCreateManyInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    producedProductId: string
    createdById: string
    createdAt?: Date | string
  }

  export type ProductionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    producedProductId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionItemCreateInput = {
    id?: string
    quantity: number
    production: ProductionCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutProductionItemsInput
  }

  export type ProductionItemUncheckedCreateInput = {
    id?: string
    productionId: string
    productId: string
    quantity: number
  }

  export type ProductionItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    production?: ProductionUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutProductionItemsNestedInput
  }

  export type ProductionItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductionItemCreateManyInput = {
    id?: string
    productionId: string
    productId: string
    quantity: number
  }

  export type ProductionItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductionItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type QualityInspectionCreateInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    createdAt?: Date | string
    production?: ProductionCreateNestedOneWithoutInspectionsInput
    purchase?: PurchaseCreateNestedOneWithoutInspectionsInput
    inspectedBy: EmployeeCreateNestedOneWithoutInspectionsInput
  }

  export type QualityInspectionUncheckedCreateInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    productionId?: string | null
    purchaseId?: string | null
    inspectedById: string
    createdAt?: Date | string
  }

  export type QualityInspectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    production?: ProductionUpdateOneWithoutInspectionsNestedInput
    purchase?: PurchaseUpdateOneWithoutInspectionsNestedInput
    inspectedBy?: EmployeeUpdateOneRequiredWithoutInspectionsNestedInput
  }

  export type QualityInspectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    productionId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    inspectedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualityInspectionCreateManyInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    productionId?: string | null
    purchaseId?: string | null
    inspectedById: string
    createdAt?: Date | string
  }

  export type QualityInspectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualityInspectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    productionId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    inspectedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    refreshTokenHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    refreshTokenHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    refreshTokenHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProductionListRelationFilter = {
    every?: ProductionWhereInput
    some?: ProductionWhereInput
    none?: ProductionWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type QualityInspectionListRelationFilter = {
    every?: QualityInspectionWhereInput
    some?: QualityInspectionWhereInput
    none?: QualityInspectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QualityInspectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemListRelationFilter = {
    every?: SaleItemWhereInput
    some?: SaleItemWhereInput
    none?: SaleItemWhereInput
  }

  export type PurchaseItemListRelationFilter = {
    every?: PurchaseItemWhereInput
    some?: PurchaseItemWhereInput
    none?: PurchaseItemWhereInput
  }

  export type ProductionItemListRelationFilter = {
    every?: ProductionItemWhereInput
    some?: ProductionItemWhereInput
    none?: ProductionItemWhereInput
  }

  export type SaleItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductionItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PurchaseScalarRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type PurchaseItemCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type PurchaseItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type PurchaseItemMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type PurchaseItemMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type PurchaseItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSaleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleStatus | EnumSaleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleStatusFilter<$PrismaModel> | $Enums.SaleStatus
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSaleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleStatus | EnumSaleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleStatusWithAggregatesFilter<$PrismaModel> | $Enums.SaleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSaleStatusFilter<$PrismaModel>
    _max?: NestedEnumSaleStatusFilter<$PrismaModel>
  }

  export type SaleScalarRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type SaleItemCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SaleItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SaleItemMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SaleItemMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SaleItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type EnumProductionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductionStatus | EnumProductionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductionStatus[] | ListEnumProductionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductionStatus[] | ListEnumProductionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductionStatusFilter<$PrismaModel> | $Enums.ProductionStatus
  }

  export type ProductionCountOrderByAggregateInput = {
    id?: SortOrder
    batchNo?: SortOrder
    status?: SortOrder
    producedProductId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductionMaxOrderByAggregateInput = {
    id?: SortOrder
    batchNo?: SortOrder
    status?: SortOrder
    producedProductId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductionMinOrderByAggregateInput = {
    id?: SortOrder
    batchNo?: SortOrder
    status?: SortOrder
    producedProductId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumProductionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductionStatus | EnumProductionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductionStatus[] | ListEnumProductionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductionStatus[] | ListEnumProductionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductionStatusFilter<$PrismaModel>
    _max?: NestedEnumProductionStatusFilter<$PrismaModel>
  }

  export type ProductionScalarRelationFilter = {
    is?: ProductionWhereInput
    isNot?: ProductionWhereInput
  }

  export type ProductionItemCountOrderByAggregateInput = {
    id?: SortOrder
    productionId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductionItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ProductionItemMaxOrderByAggregateInput = {
    id?: SortOrder
    productionId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductionItemMinOrderByAggregateInput = {
    id?: SortOrder
    productionId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductionItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumQualityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityStatus | EnumQualityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QualityStatus[] | ListEnumQualityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QualityStatus[] | ListEnumQualityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityStatusFilter<$PrismaModel> | $Enums.QualityStatus
  }

  export type ProductionNullableScalarRelationFilter = {
    is?: ProductionWhereInput | null
    isNot?: ProductionWhereInput | null
  }

  export type PurchaseNullableScalarRelationFilter = {
    is?: PurchaseWhereInput | null
    isNot?: PurchaseWhereInput | null
  }

  export type QualityInspectionCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    productionId?: SortOrder
    purchaseId?: SortOrder
    inspectedById?: SortOrder
    createdAt?: SortOrder
  }

  export type QualityInspectionMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    productionId?: SortOrder
    purchaseId?: SortOrder
    inspectedById?: SortOrder
    createdAt?: SortOrder
  }

  export type QualityInspectionMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    productionId?: SortOrder
    purchaseId?: SortOrder
    inspectedById?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumQualityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityStatus | EnumQualityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QualityStatus[] | ListEnumQualityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QualityStatus[] | ListEnumQualityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityStatusWithAggregatesFilter<$PrismaModel> | $Enums.QualityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQualityStatusFilter<$PrismaModel>
    _max?: NestedEnumQualityStatusFilter<$PrismaModel>
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type CustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserInput, CustomerUpdateWithoutUserInput>, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserInput, CustomerUpdateWithoutUserInput>, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type EnumRoleTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoleType
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type ProductionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProductionCreateWithoutCreatedByInput, ProductionUncheckedCreateWithoutCreatedByInput> | ProductionCreateWithoutCreatedByInput[] | ProductionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutCreatedByInput | ProductionCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProductionCreateManyCreatedByInputEnvelope
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SaleCreateWithoutCreatedByInput, SaleUncheckedCreateWithoutCreatedByInput> | SaleCreateWithoutCreatedByInput[] | SaleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCreatedByInput | SaleCreateOrConnectWithoutCreatedByInput[]
    createMany?: SaleCreateManyCreatedByInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PurchaseCreateWithoutCreatedByInput, PurchaseUncheckedCreateWithoutCreatedByInput> | PurchaseCreateWithoutCreatedByInput[] | PurchaseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatedByInput | PurchaseCreateOrConnectWithoutCreatedByInput[]
    createMany?: PurchaseCreateManyCreatedByInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type QualityInspectionCreateNestedManyWithoutInspectedByInput = {
    create?: XOR<QualityInspectionCreateWithoutInspectedByInput, QualityInspectionUncheckedCreateWithoutInspectedByInput> | QualityInspectionCreateWithoutInspectedByInput[] | QualityInspectionUncheckedCreateWithoutInspectedByInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutInspectedByInput | QualityInspectionCreateOrConnectWithoutInspectedByInput[]
    createMany?: QualityInspectionCreateManyInspectedByInputEnvelope
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
  }

  export type ProductionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProductionCreateWithoutCreatedByInput, ProductionUncheckedCreateWithoutCreatedByInput> | ProductionCreateWithoutCreatedByInput[] | ProductionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutCreatedByInput | ProductionCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProductionCreateManyCreatedByInputEnvelope
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SaleCreateWithoutCreatedByInput, SaleUncheckedCreateWithoutCreatedByInput> | SaleCreateWithoutCreatedByInput[] | SaleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCreatedByInput | SaleCreateOrConnectWithoutCreatedByInput[]
    createMany?: SaleCreateManyCreatedByInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PurchaseCreateWithoutCreatedByInput, PurchaseUncheckedCreateWithoutCreatedByInput> | PurchaseCreateWithoutCreatedByInput[] | PurchaseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatedByInput | PurchaseCreateOrConnectWithoutCreatedByInput[]
    createMany?: PurchaseCreateManyCreatedByInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type QualityInspectionUncheckedCreateNestedManyWithoutInspectedByInput = {
    create?: XOR<QualityInspectionCreateWithoutInspectedByInput, QualityInspectionUncheckedCreateWithoutInspectedByInput> | QualityInspectionCreateWithoutInspectedByInput[] | QualityInspectionUncheckedCreateWithoutInspectedByInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutInspectedByInput | QualityInspectionCreateOrConnectWithoutInspectedByInput[]
    createMany?: QualityInspectionCreateManyInspectedByInputEnvelope
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type ProductionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProductionCreateWithoutCreatedByInput, ProductionUncheckedCreateWithoutCreatedByInput> | ProductionCreateWithoutCreatedByInput[] | ProductionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutCreatedByInput | ProductionCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProductionUpsertWithWhereUniqueWithoutCreatedByInput | ProductionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProductionCreateManyCreatedByInputEnvelope
    set?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    disconnect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    delete?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    update?: ProductionUpdateWithWhereUniqueWithoutCreatedByInput | ProductionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProductionUpdateManyWithWhereWithoutCreatedByInput | ProductionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SaleCreateWithoutCreatedByInput, SaleUncheckedCreateWithoutCreatedByInput> | SaleCreateWithoutCreatedByInput[] | SaleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCreatedByInput | SaleCreateOrConnectWithoutCreatedByInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCreatedByInput | SaleUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SaleCreateManyCreatedByInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCreatedByInput | SaleUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCreatedByInput | SaleUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PurchaseCreateWithoutCreatedByInput, PurchaseUncheckedCreateWithoutCreatedByInput> | PurchaseCreateWithoutCreatedByInput[] | PurchaseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatedByInput | PurchaseCreateOrConnectWithoutCreatedByInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCreatedByInput | PurchaseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PurchaseCreateManyCreatedByInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCreatedByInput | PurchaseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCreatedByInput | PurchaseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type QualityInspectionUpdateManyWithoutInspectedByNestedInput = {
    create?: XOR<QualityInspectionCreateWithoutInspectedByInput, QualityInspectionUncheckedCreateWithoutInspectedByInput> | QualityInspectionCreateWithoutInspectedByInput[] | QualityInspectionUncheckedCreateWithoutInspectedByInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutInspectedByInput | QualityInspectionCreateOrConnectWithoutInspectedByInput[]
    upsert?: QualityInspectionUpsertWithWhereUniqueWithoutInspectedByInput | QualityInspectionUpsertWithWhereUniqueWithoutInspectedByInput[]
    createMany?: QualityInspectionCreateManyInspectedByInputEnvelope
    set?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    disconnect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    delete?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    update?: QualityInspectionUpdateWithWhereUniqueWithoutInspectedByInput | QualityInspectionUpdateWithWhereUniqueWithoutInspectedByInput[]
    updateMany?: QualityInspectionUpdateManyWithWhereWithoutInspectedByInput | QualityInspectionUpdateManyWithWhereWithoutInspectedByInput[]
    deleteMany?: QualityInspectionScalarWhereInput | QualityInspectionScalarWhereInput[]
  }

  export type ProductionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProductionCreateWithoutCreatedByInput, ProductionUncheckedCreateWithoutCreatedByInput> | ProductionCreateWithoutCreatedByInput[] | ProductionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutCreatedByInput | ProductionCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProductionUpsertWithWhereUniqueWithoutCreatedByInput | ProductionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProductionCreateManyCreatedByInputEnvelope
    set?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    disconnect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    delete?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    update?: ProductionUpdateWithWhereUniqueWithoutCreatedByInput | ProductionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProductionUpdateManyWithWhereWithoutCreatedByInput | ProductionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SaleCreateWithoutCreatedByInput, SaleUncheckedCreateWithoutCreatedByInput> | SaleCreateWithoutCreatedByInput[] | SaleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCreatedByInput | SaleCreateOrConnectWithoutCreatedByInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCreatedByInput | SaleUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SaleCreateManyCreatedByInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCreatedByInput | SaleUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCreatedByInput | SaleUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PurchaseCreateWithoutCreatedByInput, PurchaseUncheckedCreateWithoutCreatedByInput> | PurchaseCreateWithoutCreatedByInput[] | PurchaseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatedByInput | PurchaseCreateOrConnectWithoutCreatedByInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCreatedByInput | PurchaseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PurchaseCreateManyCreatedByInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCreatedByInput | PurchaseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCreatedByInput | PurchaseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type QualityInspectionUncheckedUpdateManyWithoutInspectedByNestedInput = {
    create?: XOR<QualityInspectionCreateWithoutInspectedByInput, QualityInspectionUncheckedCreateWithoutInspectedByInput> | QualityInspectionCreateWithoutInspectedByInput[] | QualityInspectionUncheckedCreateWithoutInspectedByInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutInspectedByInput | QualityInspectionCreateOrConnectWithoutInspectedByInput[]
    upsert?: QualityInspectionUpsertWithWhereUniqueWithoutInspectedByInput | QualityInspectionUpsertWithWhereUniqueWithoutInspectedByInput[]
    createMany?: QualityInspectionCreateManyInspectedByInputEnvelope
    set?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    disconnect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    delete?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    update?: QualityInspectionUpdateWithWhereUniqueWithoutInspectedByInput | QualityInspectionUpdateWithWhereUniqueWithoutInspectedByInput[]
    updateMany?: QualityInspectionUpdateManyWithWhereWithoutInspectedByInput | QualityInspectionUpdateManyWithWhereWithoutInspectedByInput[]
    deleteMany?: QualityInspectionScalarWhereInput | QualityInspectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type SaleCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    upsert?: UserUpsertWithoutCustomerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomerInput, UserUpdateWithoutCustomerInput>, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type SaleUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCustomerInput | SaleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCustomerInput | SaleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCustomerInput | SaleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCustomerInput | SaleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCustomerInput | SaleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCustomerInput | SaleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleItemCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type PurchaseItemCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput> | PurchaseItemCreateWithoutProductInput[] | PurchaseItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutProductInput | PurchaseItemCreateOrConnectWithoutProductInput[]
    createMany?: PurchaseItemCreateManyProductInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type ProductionItemCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductionItemCreateWithoutProductInput, ProductionItemUncheckedCreateWithoutProductInput> | ProductionItemCreateWithoutProductInput[] | ProductionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductionItemCreateOrConnectWithoutProductInput | ProductionItemCreateOrConnectWithoutProductInput[]
    createMany?: ProductionItemCreateManyProductInputEnvelope
    connect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
  }

  export type ProductionCreateNestedManyWithoutProducedProductInput = {
    create?: XOR<ProductionCreateWithoutProducedProductInput, ProductionUncheckedCreateWithoutProducedProductInput> | ProductionCreateWithoutProducedProductInput[] | ProductionUncheckedCreateWithoutProducedProductInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutProducedProductInput | ProductionCreateOrConnectWithoutProducedProductInput[]
    createMany?: ProductionCreateManyProducedProductInputEnvelope
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type PurchaseItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput> | PurchaseItemCreateWithoutProductInput[] | PurchaseItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutProductInput | PurchaseItemCreateOrConnectWithoutProductInput[]
    createMany?: PurchaseItemCreateManyProductInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type ProductionItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductionItemCreateWithoutProductInput, ProductionItemUncheckedCreateWithoutProductInput> | ProductionItemCreateWithoutProductInput[] | ProductionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductionItemCreateOrConnectWithoutProductInput | ProductionItemCreateOrConnectWithoutProductInput[]
    createMany?: ProductionItemCreateManyProductInputEnvelope
    connect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
  }

  export type ProductionUncheckedCreateNestedManyWithoutProducedProductInput = {
    create?: XOR<ProductionCreateWithoutProducedProductInput, ProductionUncheckedCreateWithoutProducedProductInput> | ProductionCreateWithoutProducedProductInput[] | ProductionUncheckedCreateWithoutProducedProductInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutProducedProductInput | ProductionCreateOrConnectWithoutProducedProductInput[]
    createMany?: ProductionCreateManyProducedProductInputEnvelope
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type PurchaseItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput> | PurchaseItemCreateWithoutProductInput[] | PurchaseItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutProductInput | PurchaseItemCreateOrConnectWithoutProductInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutProductInput | PurchaseItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchaseItemCreateManyProductInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutProductInput | PurchaseItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutProductInput | PurchaseItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type ProductionItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductionItemCreateWithoutProductInput, ProductionItemUncheckedCreateWithoutProductInput> | ProductionItemCreateWithoutProductInput[] | ProductionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductionItemCreateOrConnectWithoutProductInput | ProductionItemCreateOrConnectWithoutProductInput[]
    upsert?: ProductionItemUpsertWithWhereUniqueWithoutProductInput | ProductionItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductionItemCreateManyProductInputEnvelope
    set?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    disconnect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    delete?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    connect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    update?: ProductionItemUpdateWithWhereUniqueWithoutProductInput | ProductionItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductionItemUpdateManyWithWhereWithoutProductInput | ProductionItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductionItemScalarWhereInput | ProductionItemScalarWhereInput[]
  }

  export type ProductionUpdateManyWithoutProducedProductNestedInput = {
    create?: XOR<ProductionCreateWithoutProducedProductInput, ProductionUncheckedCreateWithoutProducedProductInput> | ProductionCreateWithoutProducedProductInput[] | ProductionUncheckedCreateWithoutProducedProductInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutProducedProductInput | ProductionCreateOrConnectWithoutProducedProductInput[]
    upsert?: ProductionUpsertWithWhereUniqueWithoutProducedProductInput | ProductionUpsertWithWhereUniqueWithoutProducedProductInput[]
    createMany?: ProductionCreateManyProducedProductInputEnvelope
    set?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    disconnect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    delete?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    update?: ProductionUpdateWithWhereUniqueWithoutProducedProductInput | ProductionUpdateWithWhereUniqueWithoutProducedProductInput[]
    updateMany?: ProductionUpdateManyWithWhereWithoutProducedProductInput | ProductionUpdateManyWithWhereWithoutProducedProductInput[]
    deleteMany?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type PurchaseItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput> | PurchaseItemCreateWithoutProductInput[] | PurchaseItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutProductInput | PurchaseItemCreateOrConnectWithoutProductInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutProductInput | PurchaseItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchaseItemCreateManyProductInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutProductInput | PurchaseItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutProductInput | PurchaseItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type ProductionItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductionItemCreateWithoutProductInput, ProductionItemUncheckedCreateWithoutProductInput> | ProductionItemCreateWithoutProductInput[] | ProductionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductionItemCreateOrConnectWithoutProductInput | ProductionItemCreateOrConnectWithoutProductInput[]
    upsert?: ProductionItemUpsertWithWhereUniqueWithoutProductInput | ProductionItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductionItemCreateManyProductInputEnvelope
    set?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    disconnect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    delete?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    connect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    update?: ProductionItemUpdateWithWhereUniqueWithoutProductInput | ProductionItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductionItemUpdateManyWithWhereWithoutProductInput | ProductionItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductionItemScalarWhereInput | ProductionItemScalarWhereInput[]
  }

  export type ProductionUncheckedUpdateManyWithoutProducedProductNestedInput = {
    create?: XOR<ProductionCreateWithoutProducedProductInput, ProductionUncheckedCreateWithoutProducedProductInput> | ProductionCreateWithoutProducedProductInput[] | ProductionUncheckedCreateWithoutProducedProductInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutProducedProductInput | ProductionCreateOrConnectWithoutProducedProductInput[]
    upsert?: ProductionUpsertWithWhereUniqueWithoutProducedProductInput | ProductionUpsertWithWhereUniqueWithoutProducedProductInput[]
    createMany?: ProductionCreateManyProducedProductInputEnvelope
    set?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    disconnect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    delete?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    update?: ProductionUpdateWithWhereUniqueWithoutProducedProductInput | ProductionUpdateWithWhereUniqueWithoutProducedProductInput[]
    updateMany?: ProductionUpdateManyWithWhereWithoutProducedProductInput | ProductionUpdateManyWithWhereWithoutProducedProductInput[]
    deleteMany?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<EmployeeCreateWithoutPurchasesInput, EmployeeUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPurchasesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PurchaseItemCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type QualityInspectionCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<QualityInspectionCreateWithoutPurchaseInput, QualityInspectionUncheckedCreateWithoutPurchaseInput> | QualityInspectionCreateWithoutPurchaseInput[] | QualityInspectionUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutPurchaseInput | QualityInspectionCreateOrConnectWithoutPurchaseInput[]
    createMany?: QualityInspectionCreateManyPurchaseInputEnvelope
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
  }

  export type PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type QualityInspectionUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<QualityInspectionCreateWithoutPurchaseInput, QualityInspectionUncheckedCreateWithoutPurchaseInput> | QualityInspectionCreateWithoutPurchaseInput[] | QualityInspectionUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutPurchaseInput | QualityInspectionCreateOrConnectWithoutPurchaseInput[]
    createMany?: QualityInspectionCreateManyPurchaseInputEnvelope
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<EmployeeCreateWithoutPurchasesInput, EmployeeUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPurchasesInput
    upsert?: EmployeeUpsertWithoutPurchasesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPurchasesInput, EmployeeUpdateWithoutPurchasesInput>, EmployeeUncheckedUpdateWithoutPurchasesInput>
  }

  export type PurchaseItemUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutPurchaseInput | PurchaseItemUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type QualityInspectionUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<QualityInspectionCreateWithoutPurchaseInput, QualityInspectionUncheckedCreateWithoutPurchaseInput> | QualityInspectionCreateWithoutPurchaseInput[] | QualityInspectionUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutPurchaseInput | QualityInspectionCreateOrConnectWithoutPurchaseInput[]
    upsert?: QualityInspectionUpsertWithWhereUniqueWithoutPurchaseInput | QualityInspectionUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: QualityInspectionCreateManyPurchaseInputEnvelope
    set?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    disconnect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    delete?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    update?: QualityInspectionUpdateWithWhereUniqueWithoutPurchaseInput | QualityInspectionUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: QualityInspectionUpdateManyWithWhereWithoutPurchaseInput | QualityInspectionUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: QualityInspectionScalarWhereInput | QualityInspectionScalarWhereInput[]
  }

  export type PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutPurchaseInput | PurchaseItemUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type QualityInspectionUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<QualityInspectionCreateWithoutPurchaseInput, QualityInspectionUncheckedCreateWithoutPurchaseInput> | QualityInspectionCreateWithoutPurchaseInput[] | QualityInspectionUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutPurchaseInput | QualityInspectionCreateOrConnectWithoutPurchaseInput[]
    upsert?: QualityInspectionUpsertWithWhereUniqueWithoutPurchaseInput | QualityInspectionUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: QualityInspectionCreateManyPurchaseInputEnvelope
    set?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    disconnect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    delete?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    update?: QualityInspectionUpdateWithWhereUniqueWithoutPurchaseInput | QualityInspectionUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: QualityInspectionUpdateManyWithWhereWithoutPurchaseInput | QualityInspectionUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: QualityInspectionScalarWhereInput | QualityInspectionScalarWhereInput[]
  }

  export type PurchaseCreateNestedOneWithoutItemsInput = {
    create?: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutItemsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPurchaseItemsInput = {
    create?: XOR<ProductCreateWithoutPurchaseItemsInput, ProductUncheckedCreateWithoutPurchaseItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutItemsInput
    upsert?: PurchaseUpsertWithoutItemsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutItemsInput, PurchaseUpdateWithoutItemsInput>, PurchaseUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutPurchaseItemsNestedInput = {
    create?: XOR<ProductCreateWithoutPurchaseItemsInput, ProductUncheckedCreateWithoutPurchaseItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseItemsInput
    upsert?: ProductUpsertWithoutPurchaseItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPurchaseItemsInput, ProductUpdateWithoutPurchaseItemsInput>, ProductUncheckedUpdateWithoutPurchaseItemsInput>
  }

  export type CustomerCreateNestedOneWithoutSalesInput = {
    create?: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesInput
    connect?: CustomerWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutSalesInput = {
    create?: XOR<EmployeeCreateWithoutSalesInput, EmployeeUncheckedCreateWithoutSalesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSalesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type SaleItemCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type EnumSaleStatusFieldUpdateOperationsInput = {
    set?: $Enums.SaleStatus
  }

  export type CustomerUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesInput
    upsert?: CustomerUpsertWithoutSalesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSalesInput, CustomerUpdateWithoutSalesInput>, CustomerUncheckedUpdateWithoutSalesInput>
  }

  export type EmployeeUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<EmployeeCreateWithoutSalesInput, EmployeeUncheckedCreateWithoutSalesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSalesInput
    upsert?: EmployeeUpsertWithoutSalesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutSalesInput, EmployeeUpdateWithoutSalesInput>, EmployeeUncheckedUpdateWithoutSalesInput>
  }

  export type SaleItemUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SaleCreateNestedOneWithoutItemsInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    connect?: SaleWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSaleItemsInput = {
    create?: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type SaleUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    upsert?: SaleUpsertWithoutItemsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutItemsInput, SaleUpdateWithoutItemsInput>, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutSaleItemsNestedInput = {
    create?: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemsInput
    upsert?: ProductUpsertWithoutSaleItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSaleItemsInput, ProductUpdateWithoutSaleItemsInput>, ProductUncheckedUpdateWithoutSaleItemsInput>
  }

  export type ProductCreateNestedOneWithoutProductionsAsFinishedInput = {
    create?: XOR<ProductCreateWithoutProductionsAsFinishedInput, ProductUncheckedCreateWithoutProductionsAsFinishedInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductionsAsFinishedInput
    connect?: ProductWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutProductionsInput = {
    create?: XOR<EmployeeCreateWithoutProductionsInput, EmployeeUncheckedCreateWithoutProductionsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutProductionsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ProductionItemCreateNestedManyWithoutProductionInput = {
    create?: XOR<ProductionItemCreateWithoutProductionInput, ProductionItemUncheckedCreateWithoutProductionInput> | ProductionItemCreateWithoutProductionInput[] | ProductionItemUncheckedCreateWithoutProductionInput[]
    connectOrCreate?: ProductionItemCreateOrConnectWithoutProductionInput | ProductionItemCreateOrConnectWithoutProductionInput[]
    createMany?: ProductionItemCreateManyProductionInputEnvelope
    connect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
  }

  export type QualityInspectionCreateNestedManyWithoutProductionInput = {
    create?: XOR<QualityInspectionCreateWithoutProductionInput, QualityInspectionUncheckedCreateWithoutProductionInput> | QualityInspectionCreateWithoutProductionInput[] | QualityInspectionUncheckedCreateWithoutProductionInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutProductionInput | QualityInspectionCreateOrConnectWithoutProductionInput[]
    createMany?: QualityInspectionCreateManyProductionInputEnvelope
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
  }

  export type ProductionItemUncheckedCreateNestedManyWithoutProductionInput = {
    create?: XOR<ProductionItemCreateWithoutProductionInput, ProductionItemUncheckedCreateWithoutProductionInput> | ProductionItemCreateWithoutProductionInput[] | ProductionItemUncheckedCreateWithoutProductionInput[]
    connectOrCreate?: ProductionItemCreateOrConnectWithoutProductionInput | ProductionItemCreateOrConnectWithoutProductionInput[]
    createMany?: ProductionItemCreateManyProductionInputEnvelope
    connect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
  }

  export type QualityInspectionUncheckedCreateNestedManyWithoutProductionInput = {
    create?: XOR<QualityInspectionCreateWithoutProductionInput, QualityInspectionUncheckedCreateWithoutProductionInput> | QualityInspectionCreateWithoutProductionInput[] | QualityInspectionUncheckedCreateWithoutProductionInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutProductionInput | QualityInspectionCreateOrConnectWithoutProductionInput[]
    createMany?: QualityInspectionCreateManyProductionInputEnvelope
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
  }

  export type EnumProductionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductionStatus
  }

  export type ProductUpdateOneRequiredWithoutProductionsAsFinishedNestedInput = {
    create?: XOR<ProductCreateWithoutProductionsAsFinishedInput, ProductUncheckedCreateWithoutProductionsAsFinishedInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductionsAsFinishedInput
    upsert?: ProductUpsertWithoutProductionsAsFinishedInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductionsAsFinishedInput, ProductUpdateWithoutProductionsAsFinishedInput>, ProductUncheckedUpdateWithoutProductionsAsFinishedInput>
  }

  export type EmployeeUpdateOneRequiredWithoutProductionsNestedInput = {
    create?: XOR<EmployeeCreateWithoutProductionsInput, EmployeeUncheckedCreateWithoutProductionsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutProductionsInput
    upsert?: EmployeeUpsertWithoutProductionsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutProductionsInput, EmployeeUpdateWithoutProductionsInput>, EmployeeUncheckedUpdateWithoutProductionsInput>
  }

  export type ProductionItemUpdateManyWithoutProductionNestedInput = {
    create?: XOR<ProductionItemCreateWithoutProductionInput, ProductionItemUncheckedCreateWithoutProductionInput> | ProductionItemCreateWithoutProductionInput[] | ProductionItemUncheckedCreateWithoutProductionInput[]
    connectOrCreate?: ProductionItemCreateOrConnectWithoutProductionInput | ProductionItemCreateOrConnectWithoutProductionInput[]
    upsert?: ProductionItemUpsertWithWhereUniqueWithoutProductionInput | ProductionItemUpsertWithWhereUniqueWithoutProductionInput[]
    createMany?: ProductionItemCreateManyProductionInputEnvelope
    set?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    disconnect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    delete?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    connect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    update?: ProductionItemUpdateWithWhereUniqueWithoutProductionInput | ProductionItemUpdateWithWhereUniqueWithoutProductionInput[]
    updateMany?: ProductionItemUpdateManyWithWhereWithoutProductionInput | ProductionItemUpdateManyWithWhereWithoutProductionInput[]
    deleteMany?: ProductionItemScalarWhereInput | ProductionItemScalarWhereInput[]
  }

  export type QualityInspectionUpdateManyWithoutProductionNestedInput = {
    create?: XOR<QualityInspectionCreateWithoutProductionInput, QualityInspectionUncheckedCreateWithoutProductionInput> | QualityInspectionCreateWithoutProductionInput[] | QualityInspectionUncheckedCreateWithoutProductionInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutProductionInput | QualityInspectionCreateOrConnectWithoutProductionInput[]
    upsert?: QualityInspectionUpsertWithWhereUniqueWithoutProductionInput | QualityInspectionUpsertWithWhereUniqueWithoutProductionInput[]
    createMany?: QualityInspectionCreateManyProductionInputEnvelope
    set?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    disconnect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    delete?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    update?: QualityInspectionUpdateWithWhereUniqueWithoutProductionInput | QualityInspectionUpdateWithWhereUniqueWithoutProductionInput[]
    updateMany?: QualityInspectionUpdateManyWithWhereWithoutProductionInput | QualityInspectionUpdateManyWithWhereWithoutProductionInput[]
    deleteMany?: QualityInspectionScalarWhereInput | QualityInspectionScalarWhereInput[]
  }

  export type ProductionItemUncheckedUpdateManyWithoutProductionNestedInput = {
    create?: XOR<ProductionItemCreateWithoutProductionInput, ProductionItemUncheckedCreateWithoutProductionInput> | ProductionItemCreateWithoutProductionInput[] | ProductionItemUncheckedCreateWithoutProductionInput[]
    connectOrCreate?: ProductionItemCreateOrConnectWithoutProductionInput | ProductionItemCreateOrConnectWithoutProductionInput[]
    upsert?: ProductionItemUpsertWithWhereUniqueWithoutProductionInput | ProductionItemUpsertWithWhereUniqueWithoutProductionInput[]
    createMany?: ProductionItemCreateManyProductionInputEnvelope
    set?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    disconnect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    delete?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    connect?: ProductionItemWhereUniqueInput | ProductionItemWhereUniqueInput[]
    update?: ProductionItemUpdateWithWhereUniqueWithoutProductionInput | ProductionItemUpdateWithWhereUniqueWithoutProductionInput[]
    updateMany?: ProductionItemUpdateManyWithWhereWithoutProductionInput | ProductionItemUpdateManyWithWhereWithoutProductionInput[]
    deleteMany?: ProductionItemScalarWhereInput | ProductionItemScalarWhereInput[]
  }

  export type QualityInspectionUncheckedUpdateManyWithoutProductionNestedInput = {
    create?: XOR<QualityInspectionCreateWithoutProductionInput, QualityInspectionUncheckedCreateWithoutProductionInput> | QualityInspectionCreateWithoutProductionInput[] | QualityInspectionUncheckedCreateWithoutProductionInput[]
    connectOrCreate?: QualityInspectionCreateOrConnectWithoutProductionInput | QualityInspectionCreateOrConnectWithoutProductionInput[]
    upsert?: QualityInspectionUpsertWithWhereUniqueWithoutProductionInput | QualityInspectionUpsertWithWhereUniqueWithoutProductionInput[]
    createMany?: QualityInspectionCreateManyProductionInputEnvelope
    set?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    disconnect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    delete?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    connect?: QualityInspectionWhereUniqueInput | QualityInspectionWhereUniqueInput[]
    update?: QualityInspectionUpdateWithWhereUniqueWithoutProductionInput | QualityInspectionUpdateWithWhereUniqueWithoutProductionInput[]
    updateMany?: QualityInspectionUpdateManyWithWhereWithoutProductionInput | QualityInspectionUpdateManyWithWhereWithoutProductionInput[]
    deleteMany?: QualityInspectionScalarWhereInput | QualityInspectionScalarWhereInput[]
  }

  export type ProductionCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProductionCreateWithoutItemsInput, ProductionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductionCreateOrConnectWithoutItemsInput
    connect?: ProductionWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutProductionItemsInput = {
    create?: XOR<ProductCreateWithoutProductionItemsInput, ProductUncheckedCreateWithoutProductionItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductionItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProductionCreateWithoutItemsInput, ProductionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductionCreateOrConnectWithoutItemsInput
    upsert?: ProductionUpsertWithoutItemsInput
    connect?: ProductionWhereUniqueInput
    update?: XOR<XOR<ProductionUpdateToOneWithWhereWithoutItemsInput, ProductionUpdateWithoutItemsInput>, ProductionUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutProductionItemsNestedInput = {
    create?: XOR<ProductCreateWithoutProductionItemsInput, ProductUncheckedCreateWithoutProductionItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductionItemsInput
    upsert?: ProductUpsertWithoutProductionItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductionItemsInput, ProductUpdateWithoutProductionItemsInput>, ProductUncheckedUpdateWithoutProductionItemsInput>
  }

  export type ProductionCreateNestedOneWithoutInspectionsInput = {
    create?: XOR<ProductionCreateWithoutInspectionsInput, ProductionUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: ProductionCreateOrConnectWithoutInspectionsInput
    connect?: ProductionWhereUniqueInput
  }

  export type PurchaseCreateNestedOneWithoutInspectionsInput = {
    create?: XOR<PurchaseCreateWithoutInspectionsInput, PurchaseUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutInspectionsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutInspectionsInput = {
    create?: XOR<EmployeeCreateWithoutInspectionsInput, EmployeeUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutInspectionsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumQualityStatusFieldUpdateOperationsInput = {
    set?: $Enums.QualityStatus
  }

  export type ProductionUpdateOneWithoutInspectionsNestedInput = {
    create?: XOR<ProductionCreateWithoutInspectionsInput, ProductionUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: ProductionCreateOrConnectWithoutInspectionsInput
    upsert?: ProductionUpsertWithoutInspectionsInput
    disconnect?: ProductionWhereInput | boolean
    delete?: ProductionWhereInput | boolean
    connect?: ProductionWhereUniqueInput
    update?: XOR<XOR<ProductionUpdateToOneWithWhereWithoutInspectionsInput, ProductionUpdateWithoutInspectionsInput>, ProductionUncheckedUpdateWithoutInspectionsInput>
  }

  export type PurchaseUpdateOneWithoutInspectionsNestedInput = {
    create?: XOR<PurchaseCreateWithoutInspectionsInput, PurchaseUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutInspectionsInput
    upsert?: PurchaseUpsertWithoutInspectionsInput
    disconnect?: PurchaseWhereInput | boolean
    delete?: PurchaseWhereInput | boolean
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutInspectionsInput, PurchaseUpdateWithoutInspectionsInput>, PurchaseUncheckedUpdateWithoutInspectionsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutInspectionsNestedInput = {
    create?: XOR<EmployeeCreateWithoutInspectionsInput, EmployeeUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutInspectionsInput
    upsert?: EmployeeUpsertWithoutInspectionsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutInspectionsInput, EmployeeUpdateWithoutInspectionsInput>, EmployeeUncheckedUpdateWithoutInspectionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSaleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleStatus | EnumSaleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleStatusFilter<$PrismaModel> | $Enums.SaleStatus
  }

  export type NestedEnumSaleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleStatus | EnumSaleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleStatusWithAggregatesFilter<$PrismaModel> | $Enums.SaleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSaleStatusFilter<$PrismaModel>
    _max?: NestedEnumSaleStatusFilter<$PrismaModel>
  }

  export type NestedEnumProductionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductionStatus | EnumProductionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductionStatus[] | ListEnumProductionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductionStatus[] | ListEnumProductionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductionStatusFilter<$PrismaModel> | $Enums.ProductionStatus
  }

  export type NestedEnumProductionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductionStatus | EnumProductionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductionStatus[] | ListEnumProductionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductionStatus[] | ListEnumProductionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductionStatusFilter<$PrismaModel>
    _max?: NestedEnumProductionStatusFilter<$PrismaModel>
  }

  export type NestedEnumQualityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityStatus | EnumQualityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QualityStatus[] | ListEnumQualityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QualityStatus[] | ListEnumQualityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityStatusFilter<$PrismaModel> | $Enums.QualityStatus
  }

  export type NestedEnumQualityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QualityStatus | EnumQualityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QualityStatus[] | ListEnumQualityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QualityStatus[] | ListEnumQualityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityStatusWithAggregatesFilter<$PrismaModel> | $Enums.QualityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQualityStatusFilter<$PrismaModel>
    _max?: NestedEnumQualityStatusFilter<$PrismaModel>
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutUserInput = {
    id?: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutCreatedByInput
    sales?: SaleCreateNestedManyWithoutCreatedByInput
    purchases?: PurchaseCreateNestedManyWithoutCreatedByInput
    inspections?: QualityInspectionCreateNestedManyWithoutInspectedByInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutCreatedByInput
    sales?: SaleUncheckedCreateNestedManyWithoutCreatedByInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByInput
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutInspectedByInput
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateWithoutUserInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutCreatedByNestedInput
    sales?: SaleUpdateManyWithoutCreatedByNestedInput
    purchases?: PurchaseUpdateManyWithoutCreatedByNestedInput
    inspections?: QualityInspectionUpdateManyWithoutInspectedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutCreatedByNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCreatedByNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutCreatedByNestedInput
    inspections?: QualityInspectionUncheckedUpdateManyWithoutInspectedByNestedInput
  }

  export type CustomerUpsertWithoutUserInput = {
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutUserInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    email: string
    passwordHash: string
    isActive?: boolean
    refreshTokenHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    email: string
    passwordHash: string
    isActive?: boolean
    refreshTokenHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: $Enums.RoleType
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: $Enums.RoleType
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
  }

  export type UserCreateWithoutEmployeeInput = {
    id?: string
    email: string
    passwordHash: string
    isActive?: boolean
    refreshTokenHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: string
    email: string
    passwordHash: string
    isActive?: boolean
    refreshTokenHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type ProductionCreateWithoutCreatedByInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    createdAt?: Date | string
    producedProduct: ProductCreateNestedOneWithoutProductionsAsFinishedInput
    items?: ProductionItemCreateNestedManyWithoutProductionInput
    inspections?: QualityInspectionCreateNestedManyWithoutProductionInput
  }

  export type ProductionUncheckedCreateWithoutCreatedByInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    producedProductId: string
    createdAt?: Date | string
    items?: ProductionItemUncheckedCreateNestedManyWithoutProductionInput
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutProductionInput
  }

  export type ProductionCreateOrConnectWithoutCreatedByInput = {
    where: ProductionWhereUniqueInput
    create: XOR<ProductionCreateWithoutCreatedByInput, ProductionUncheckedCreateWithoutCreatedByInput>
  }

  export type ProductionCreateManyCreatedByInputEnvelope = {
    data: ProductionCreateManyCreatedByInput | ProductionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutCreatedByInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutCreatedByInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    customerId: string
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutCreatedByInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCreatedByInput, SaleUncheckedCreateWithoutCreatedByInput>
  }

  export type SaleCreateManyCreatedByInputEnvelope = {
    data: SaleCreateManyCreatedByInput | SaleCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutCreatedByInput = {
    id?: string
    referenceNo: string
    createdAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    inspections?: QualityInspectionCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutCreatedByInput = {
    id?: string
    referenceNo: string
    createdAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutCreatedByInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutCreatedByInput, PurchaseUncheckedCreateWithoutCreatedByInput>
  }

  export type PurchaseCreateManyCreatedByInputEnvelope = {
    data: PurchaseCreateManyCreatedByInput | PurchaseCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type QualityInspectionCreateWithoutInspectedByInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    createdAt?: Date | string
    production?: ProductionCreateNestedOneWithoutInspectionsInput
    purchase?: PurchaseCreateNestedOneWithoutInspectionsInput
  }

  export type QualityInspectionUncheckedCreateWithoutInspectedByInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    productionId?: string | null
    purchaseId?: string | null
    createdAt?: Date | string
  }

  export type QualityInspectionCreateOrConnectWithoutInspectedByInput = {
    where: QualityInspectionWhereUniqueInput
    create: XOR<QualityInspectionCreateWithoutInspectedByInput, QualityInspectionUncheckedCreateWithoutInspectedByInput>
  }

  export type QualityInspectionCreateManyInspectedByInputEnvelope = {
    data: QualityInspectionCreateManyInspectedByInput | QualityInspectionCreateManyInspectedByInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEmployeeInput = {
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProductionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProductionWhereUniqueInput
    update: XOR<ProductionUpdateWithoutCreatedByInput, ProductionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProductionCreateWithoutCreatedByInput, ProductionUncheckedCreateWithoutCreatedByInput>
  }

  export type ProductionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProductionWhereUniqueInput
    data: XOR<ProductionUpdateWithoutCreatedByInput, ProductionUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProductionUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProductionScalarWhereInput
    data: XOR<ProductionUpdateManyMutationInput, ProductionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProductionScalarWhereInput = {
    AND?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
    OR?: ProductionScalarWhereInput[]
    NOT?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
    id?: StringFilter<"Production"> | string
    batchNo?: StringFilter<"Production"> | string
    status?: EnumProductionStatusFilter<"Production"> | $Enums.ProductionStatus
    producedProductId?: StringFilter<"Production"> | string
    createdById?: StringFilter<"Production"> | string
    createdAt?: DateTimeFilter<"Production"> | Date | string
  }

  export type SaleUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutCreatedByInput, SaleUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SaleCreateWithoutCreatedByInput, SaleUncheckedCreateWithoutCreatedByInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutCreatedByInput, SaleUncheckedUpdateWithoutCreatedByInput>
  }

  export type SaleUpdateManyWithWhereWithoutCreatedByInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: StringFilter<"Sale"> | string
    invoiceNo?: StringFilter<"Sale"> | string
    status?: EnumSaleStatusFilter<"Sale"> | $Enums.SaleStatus
    customerId?: StringFilter<"Sale"> | string
    createdById?: StringFilter<"Sale"> | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
  }

  export type PurchaseUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutCreatedByInput, PurchaseUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PurchaseCreateWithoutCreatedByInput, PurchaseUncheckedCreateWithoutCreatedByInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutCreatedByInput, PurchaseUncheckedUpdateWithoutCreatedByInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutCreatedByInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: StringFilter<"Purchase"> | string
    referenceNo?: StringFilter<"Purchase"> | string
    createdById?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
  }

  export type QualityInspectionUpsertWithWhereUniqueWithoutInspectedByInput = {
    where: QualityInspectionWhereUniqueInput
    update: XOR<QualityInspectionUpdateWithoutInspectedByInput, QualityInspectionUncheckedUpdateWithoutInspectedByInput>
    create: XOR<QualityInspectionCreateWithoutInspectedByInput, QualityInspectionUncheckedCreateWithoutInspectedByInput>
  }

  export type QualityInspectionUpdateWithWhereUniqueWithoutInspectedByInput = {
    where: QualityInspectionWhereUniqueInput
    data: XOR<QualityInspectionUpdateWithoutInspectedByInput, QualityInspectionUncheckedUpdateWithoutInspectedByInput>
  }

  export type QualityInspectionUpdateManyWithWhereWithoutInspectedByInput = {
    where: QualityInspectionScalarWhereInput
    data: XOR<QualityInspectionUpdateManyMutationInput, QualityInspectionUncheckedUpdateManyWithoutInspectedByInput>
  }

  export type QualityInspectionScalarWhereInput = {
    AND?: QualityInspectionScalarWhereInput | QualityInspectionScalarWhereInput[]
    OR?: QualityInspectionScalarWhereInput[]
    NOT?: QualityInspectionScalarWhereInput | QualityInspectionScalarWhereInput[]
    id?: StringFilter<"QualityInspection"> | string
    status?: EnumQualityStatusFilter<"QualityInspection"> | $Enums.QualityStatus
    remarks?: StringNullableFilter<"QualityInspection"> | string | null
    productionId?: StringNullableFilter<"QualityInspection"> | string | null
    purchaseId?: StringNullableFilter<"QualityInspection"> | string | null
    inspectedById?: StringFilter<"QualityInspection"> | string
    createdAt?: DateTimeFilter<"QualityInspection"> | Date | string
  }

  export type UserCreateWithoutCustomerInput = {
    id?: string
    email: string
    passwordHash: string
    isActive?: boolean
    refreshTokenHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomerInput = {
    id?: string
    email: string
    passwordHash: string
    isActive?: boolean
    refreshTokenHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type SaleCreateWithoutCustomerInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    createdAt?: Date | string
    createdBy: EmployeeCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutCustomerInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    createdById: string
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput>
  }

  export type SaleCreateManyCustomerInputEnvelope = {
    data: SaleCreateManyCustomerInput | SaleCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCustomerInput = {
    update: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type UserUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SaleUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutCustomerInput, SaleUncheckedUpdateWithoutCustomerInput>
    create: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutCustomerInput, SaleUncheckedUpdateWithoutCustomerInput>
  }

  export type SaleUpdateManyWithWhereWithoutCustomerInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SaleItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    sale: SaleCreateNestedOneWithoutItemsInput
  }

  export type SaleItemUncheckedCreateWithoutProductInput = {
    id?: string
    saleId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateOrConnectWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemCreateManyProductInputEnvelope = {
    data: SaleItemCreateManyProductInput | SaleItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    purchase: PurchaseCreateNestedOneWithoutItemsInput
  }

  export type PurchaseItemUncheckedCreateWithoutProductInput = {
    id?: string
    purchaseId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemCreateOrConnectWithoutProductInput = {
    where: PurchaseItemWhereUniqueInput
    create: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput>
  }

  export type PurchaseItemCreateManyProductInputEnvelope = {
    data: PurchaseItemCreateManyProductInput | PurchaseItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductionItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    production: ProductionCreateNestedOneWithoutItemsInput
  }

  export type ProductionItemUncheckedCreateWithoutProductInput = {
    id?: string
    productionId: string
    quantity: number
  }

  export type ProductionItemCreateOrConnectWithoutProductInput = {
    where: ProductionItemWhereUniqueInput
    create: XOR<ProductionItemCreateWithoutProductInput, ProductionItemUncheckedCreateWithoutProductInput>
  }

  export type ProductionItemCreateManyProductInputEnvelope = {
    data: ProductionItemCreateManyProductInput | ProductionItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductionCreateWithoutProducedProductInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    createdAt?: Date | string
    createdBy: EmployeeCreateNestedOneWithoutProductionsInput
    items?: ProductionItemCreateNestedManyWithoutProductionInput
    inspections?: QualityInspectionCreateNestedManyWithoutProductionInput
  }

  export type ProductionUncheckedCreateWithoutProducedProductInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    createdById: string
    createdAt?: Date | string
    items?: ProductionItemUncheckedCreateNestedManyWithoutProductionInput
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutProductionInput
  }

  export type ProductionCreateOrConnectWithoutProducedProductInput = {
    where: ProductionWhereUniqueInput
    create: XOR<ProductionCreateWithoutProducedProductInput, ProductionUncheckedCreateWithoutProducedProductInput>
  }

  export type ProductionCreateManyProducedProductInputEnvelope = {
    data: ProductionCreateManyProducedProductInput | ProductionCreateManyProducedProductInput[]
    skipDuplicates?: boolean
  }

  export type SaleItemUpsertWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutProductInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutProductInput>
  }

  export type SaleItemScalarWhereInput = {
    AND?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    OR?: SaleItemScalarWhereInput[]
    NOT?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    id?: StringFilter<"SaleItem"> | string
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    quantity?: IntFilter<"SaleItem"> | number
    unitPrice?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemUpsertWithWhereUniqueWithoutProductInput = {
    where: PurchaseItemWhereUniqueInput
    update: XOR<PurchaseItemUpdateWithoutProductInput, PurchaseItemUncheckedUpdateWithoutProductInput>
    create: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput>
  }

  export type PurchaseItemUpdateWithWhereUniqueWithoutProductInput = {
    where: PurchaseItemWhereUniqueInput
    data: XOR<PurchaseItemUpdateWithoutProductInput, PurchaseItemUncheckedUpdateWithoutProductInput>
  }

  export type PurchaseItemUpdateManyWithWhereWithoutProductInput = {
    where: PurchaseItemScalarWhereInput
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyWithoutProductInput>
  }

  export type PurchaseItemScalarWhereInput = {
    AND?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
    OR?: PurchaseItemScalarWhereInput[]
    NOT?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
    id?: StringFilter<"PurchaseItem"> | string
    purchaseId?: StringFilter<"PurchaseItem"> | string
    productId?: StringFilter<"PurchaseItem"> | string
    quantity?: IntFilter<"PurchaseItem"> | number
    unitPrice?: DecimalFilter<"PurchaseItem"> | Decimal | DecimalJsLike | number | string
  }

  export type ProductionItemUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductionItemWhereUniqueInput
    update: XOR<ProductionItemUpdateWithoutProductInput, ProductionItemUncheckedUpdateWithoutProductInput>
    create: XOR<ProductionItemCreateWithoutProductInput, ProductionItemUncheckedCreateWithoutProductInput>
  }

  export type ProductionItemUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductionItemWhereUniqueInput
    data: XOR<ProductionItemUpdateWithoutProductInput, ProductionItemUncheckedUpdateWithoutProductInput>
  }

  export type ProductionItemUpdateManyWithWhereWithoutProductInput = {
    where: ProductionItemScalarWhereInput
    data: XOR<ProductionItemUpdateManyMutationInput, ProductionItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductionItemScalarWhereInput = {
    AND?: ProductionItemScalarWhereInput | ProductionItemScalarWhereInput[]
    OR?: ProductionItemScalarWhereInput[]
    NOT?: ProductionItemScalarWhereInput | ProductionItemScalarWhereInput[]
    id?: StringFilter<"ProductionItem"> | string
    productionId?: StringFilter<"ProductionItem"> | string
    productId?: StringFilter<"ProductionItem"> | string
    quantity?: IntFilter<"ProductionItem"> | number
  }

  export type ProductionUpsertWithWhereUniqueWithoutProducedProductInput = {
    where: ProductionWhereUniqueInput
    update: XOR<ProductionUpdateWithoutProducedProductInput, ProductionUncheckedUpdateWithoutProducedProductInput>
    create: XOR<ProductionCreateWithoutProducedProductInput, ProductionUncheckedCreateWithoutProducedProductInput>
  }

  export type ProductionUpdateWithWhereUniqueWithoutProducedProductInput = {
    where: ProductionWhereUniqueInput
    data: XOR<ProductionUpdateWithoutProducedProductInput, ProductionUncheckedUpdateWithoutProducedProductInput>
  }

  export type ProductionUpdateManyWithWhereWithoutProducedProductInput = {
    where: ProductionScalarWhereInput
    data: XOR<ProductionUpdateManyMutationInput, ProductionUncheckedUpdateManyWithoutProducedProductInput>
  }

  export type EmployeeCreateWithoutPurchasesInput = {
    id?: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    productions?: ProductionCreateNestedManyWithoutCreatedByInput
    sales?: SaleCreateNestedManyWithoutCreatedByInput
    inspections?: QualityInspectionCreateNestedManyWithoutInspectedByInput
  }

  export type EmployeeUncheckedCreateWithoutPurchasesInput = {
    id?: string
    userId: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutCreatedByInput
    sales?: SaleUncheckedCreateNestedManyWithoutCreatedByInput
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutInspectedByInput
  }

  export type EmployeeCreateOrConnectWithoutPurchasesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPurchasesInput, EmployeeUncheckedCreateWithoutPurchasesInput>
  }

  export type PurchaseItemCreateWithoutPurchaseInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutPurchaseItemsInput
  }

  export type PurchaseItemUncheckedCreateWithoutPurchaseInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    create: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseItemCreateManyPurchaseInputEnvelope = {
    data: PurchaseItemCreateManyPurchaseInput | PurchaseItemCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type QualityInspectionCreateWithoutPurchaseInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    createdAt?: Date | string
    production?: ProductionCreateNestedOneWithoutInspectionsInput
    inspectedBy: EmployeeCreateNestedOneWithoutInspectionsInput
  }

  export type QualityInspectionUncheckedCreateWithoutPurchaseInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    productionId?: string | null
    inspectedById: string
    createdAt?: Date | string
  }

  export type QualityInspectionCreateOrConnectWithoutPurchaseInput = {
    where: QualityInspectionWhereUniqueInput
    create: XOR<QualityInspectionCreateWithoutPurchaseInput, QualityInspectionUncheckedCreateWithoutPurchaseInput>
  }

  export type QualityInspectionCreateManyPurchaseInputEnvelope = {
    data: QualityInspectionCreateManyPurchaseInput | QualityInspectionCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutPurchasesInput = {
    update: XOR<EmployeeUpdateWithoutPurchasesInput, EmployeeUncheckedUpdateWithoutPurchasesInput>
    create: XOR<EmployeeCreateWithoutPurchasesInput, EmployeeUncheckedCreateWithoutPurchasesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPurchasesInput, EmployeeUncheckedUpdateWithoutPurchasesInput>
  }

  export type EmployeeUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    productions?: ProductionUpdateManyWithoutCreatedByNestedInput
    sales?: SaleUpdateManyWithoutCreatedByNestedInput
    inspections?: QualityInspectionUpdateManyWithoutInspectedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutCreatedByNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCreatedByNestedInput
    inspections?: QualityInspectionUncheckedUpdateManyWithoutInspectedByNestedInput
  }

  export type PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    update: XOR<PurchaseItemUpdateWithoutPurchaseInput, PurchaseItemUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    data: XOR<PurchaseItemUpdateWithoutPurchaseInput, PurchaseItemUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchaseItemUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchaseItemScalarWhereInput
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type QualityInspectionUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: QualityInspectionWhereUniqueInput
    update: XOR<QualityInspectionUpdateWithoutPurchaseInput, QualityInspectionUncheckedUpdateWithoutPurchaseInput>
    create: XOR<QualityInspectionCreateWithoutPurchaseInput, QualityInspectionUncheckedCreateWithoutPurchaseInput>
  }

  export type QualityInspectionUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: QualityInspectionWhereUniqueInput
    data: XOR<QualityInspectionUpdateWithoutPurchaseInput, QualityInspectionUncheckedUpdateWithoutPurchaseInput>
  }

  export type QualityInspectionUpdateManyWithWhereWithoutPurchaseInput = {
    where: QualityInspectionScalarWhereInput
    data: XOR<QualityInspectionUpdateManyMutationInput, QualityInspectionUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchaseCreateWithoutItemsInput = {
    id?: string
    referenceNo: string
    createdAt?: Date | string
    createdBy: EmployeeCreateNestedOneWithoutPurchasesInput
    inspections?: QualityInspectionCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutItemsInput = {
    id?: string
    referenceNo: string
    createdById: string
    createdAt?: Date | string
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutItemsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutPurchaseItemsInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    productionItems?: ProductionItemCreateNestedManyWithoutProductInput
    productionsAsFinished?: ProductionCreateNestedManyWithoutProducedProductInput
  }

  export type ProductUncheckedCreateWithoutPurchaseItemsInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    productionItems?: ProductionItemUncheckedCreateNestedManyWithoutProductInput
    productionsAsFinished?: ProductionUncheckedCreateNestedManyWithoutProducedProductInput
  }

  export type ProductCreateOrConnectWithoutPurchaseItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPurchaseItemsInput, ProductUncheckedCreateWithoutPurchaseItemsInput>
  }

  export type PurchaseUpsertWithoutItemsInput = {
    update: XOR<PurchaseUpdateWithoutItemsInput, PurchaseUncheckedUpdateWithoutItemsInput>
    create: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutItemsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutItemsInput, PurchaseUncheckedUpdateWithoutItemsInput>
  }

  export type PurchaseUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: EmployeeUpdateOneRequiredWithoutPurchasesNestedInput
    inspections?: QualityInspectionUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: QualityInspectionUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type ProductUpsertWithoutPurchaseItemsInput = {
    update: XOR<ProductUpdateWithoutPurchaseItemsInput, ProductUncheckedUpdateWithoutPurchaseItemsInput>
    create: XOR<ProductCreateWithoutPurchaseItemsInput, ProductUncheckedCreateWithoutPurchaseItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPurchaseItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPurchaseItemsInput, ProductUncheckedUpdateWithoutPurchaseItemsInput>
  }

  export type ProductUpdateWithoutPurchaseItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    productionItems?: ProductionItemUpdateManyWithoutProductNestedInput
    productionsAsFinished?: ProductionUpdateManyWithoutProducedProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPurchaseItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    productionItems?: ProductionItemUncheckedUpdateManyWithoutProductNestedInput
    productionsAsFinished?: ProductionUncheckedUpdateManyWithoutProducedProductNestedInput
  }

  export type CustomerCreateWithoutSalesInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSalesInput = {
    id?: string
    userId?: string | null
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutSalesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
  }

  export type EmployeeCreateWithoutSalesInput = {
    id?: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    productions?: ProductionCreateNestedManyWithoutCreatedByInput
    purchases?: PurchaseCreateNestedManyWithoutCreatedByInput
    inspections?: QualityInspectionCreateNestedManyWithoutInspectedByInput
  }

  export type EmployeeUncheckedCreateWithoutSalesInput = {
    id?: string
    userId: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutCreatedByInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByInput
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutInspectedByInput
  }

  export type EmployeeCreateOrConnectWithoutSalesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSalesInput, EmployeeUncheckedCreateWithoutSalesInput>
  }

  export type SaleItemCreateWithoutSaleInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateWithoutSaleInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateOrConnectWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemCreateManySaleInputEnvelope = {
    data: SaleItemCreateManySaleInput | SaleItemCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutSalesInput = {
    update: XOR<CustomerUpdateWithoutSalesInput, CustomerUncheckedUpdateWithoutSalesInput>
    create: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSalesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSalesInput, CustomerUncheckedUpdateWithoutSalesInput>
  }

  export type CustomerUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithoutSalesInput = {
    update: XOR<EmployeeUpdateWithoutSalesInput, EmployeeUncheckedUpdateWithoutSalesInput>
    create: XOR<EmployeeCreateWithoutSalesInput, EmployeeUncheckedCreateWithoutSalesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutSalesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutSalesInput, EmployeeUncheckedUpdateWithoutSalesInput>
  }

  export type EmployeeUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    productions?: ProductionUpdateManyWithoutCreatedByNestedInput
    purchases?: PurchaseUpdateManyWithoutCreatedByNestedInput
    inspections?: QualityInspectionUpdateManyWithoutInspectedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutCreatedByNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutCreatedByNestedInput
    inspections?: QualityInspectionUncheckedUpdateManyWithoutInspectedByNestedInput
  }

  export type SaleItemUpsertWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutSaleInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutSaleInput>
  }

  export type SaleCreateWithoutItemsInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSalesInput
    createdBy: EmployeeCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutItemsInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    customerId: string
    createdById: string
    createdAt?: Date | string
  }

  export type SaleCreateOrConnectWithoutItemsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutSaleItemsInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    purchaseItems?: PurchaseItemCreateNestedManyWithoutProductInput
    productionItems?: ProductionItemCreateNestedManyWithoutProductInput
    productionsAsFinished?: ProductionCreateNestedManyWithoutProducedProductInput
  }

  export type ProductUncheckedCreateWithoutSaleItemsInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    purchaseItems?: PurchaseItemUncheckedCreateNestedManyWithoutProductInput
    productionItems?: ProductionItemUncheckedCreateNestedManyWithoutProductInput
    productionsAsFinished?: ProductionUncheckedCreateNestedManyWithoutProducedProductInput
  }

  export type ProductCreateOrConnectWithoutSaleItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
  }

  export type SaleUpsertWithoutItemsInput = {
    update: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutItemsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type SaleUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSalesNestedInput
    createdBy?: EmployeeUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    customerId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutSaleItemsInput = {
    update: XOR<ProductUpdateWithoutSaleItemsInput, ProductUncheckedUpdateWithoutSaleItemsInput>
    create: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSaleItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSaleItemsInput, ProductUncheckedUpdateWithoutSaleItemsInput>
  }

  export type ProductUpdateWithoutSaleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItems?: PurchaseItemUpdateManyWithoutProductNestedInput
    productionItems?: ProductionItemUpdateManyWithoutProductNestedInput
    productionsAsFinished?: ProductionUpdateManyWithoutProducedProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSaleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItems?: PurchaseItemUncheckedUpdateManyWithoutProductNestedInput
    productionItems?: ProductionItemUncheckedUpdateManyWithoutProductNestedInput
    productionsAsFinished?: ProductionUncheckedUpdateManyWithoutProducedProductNestedInput
  }

  export type ProductCreateWithoutProductionsAsFinishedInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemCreateNestedManyWithoutProductInput
    productionItems?: ProductionItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductionsAsFinishedInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemUncheckedCreateNestedManyWithoutProductInput
    productionItems?: ProductionItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductionsAsFinishedInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductionsAsFinishedInput, ProductUncheckedCreateWithoutProductionsAsFinishedInput>
  }

  export type EmployeeCreateWithoutProductionsInput = {
    id?: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    sales?: SaleCreateNestedManyWithoutCreatedByInput
    purchases?: PurchaseCreateNestedManyWithoutCreatedByInput
    inspections?: QualityInspectionCreateNestedManyWithoutInspectedByInput
  }

  export type EmployeeUncheckedCreateWithoutProductionsInput = {
    id?: string
    userId: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutCreatedByInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByInput
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutInspectedByInput
  }

  export type EmployeeCreateOrConnectWithoutProductionsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutProductionsInput, EmployeeUncheckedCreateWithoutProductionsInput>
  }

  export type ProductionItemCreateWithoutProductionInput = {
    id?: string
    quantity: number
    product: ProductCreateNestedOneWithoutProductionItemsInput
  }

  export type ProductionItemUncheckedCreateWithoutProductionInput = {
    id?: string
    productId: string
    quantity: number
  }

  export type ProductionItemCreateOrConnectWithoutProductionInput = {
    where: ProductionItemWhereUniqueInput
    create: XOR<ProductionItemCreateWithoutProductionInput, ProductionItemUncheckedCreateWithoutProductionInput>
  }

  export type ProductionItemCreateManyProductionInputEnvelope = {
    data: ProductionItemCreateManyProductionInput | ProductionItemCreateManyProductionInput[]
    skipDuplicates?: boolean
  }

  export type QualityInspectionCreateWithoutProductionInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    createdAt?: Date | string
    purchase?: PurchaseCreateNestedOneWithoutInspectionsInput
    inspectedBy: EmployeeCreateNestedOneWithoutInspectionsInput
  }

  export type QualityInspectionUncheckedCreateWithoutProductionInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    purchaseId?: string | null
    inspectedById: string
    createdAt?: Date | string
  }

  export type QualityInspectionCreateOrConnectWithoutProductionInput = {
    where: QualityInspectionWhereUniqueInput
    create: XOR<QualityInspectionCreateWithoutProductionInput, QualityInspectionUncheckedCreateWithoutProductionInput>
  }

  export type QualityInspectionCreateManyProductionInputEnvelope = {
    data: QualityInspectionCreateManyProductionInput | QualityInspectionCreateManyProductionInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutProductionsAsFinishedInput = {
    update: XOR<ProductUpdateWithoutProductionsAsFinishedInput, ProductUncheckedUpdateWithoutProductionsAsFinishedInput>
    create: XOR<ProductCreateWithoutProductionsAsFinishedInput, ProductUncheckedCreateWithoutProductionsAsFinishedInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductionsAsFinishedInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductionsAsFinishedInput, ProductUncheckedUpdateWithoutProductionsAsFinishedInput>
  }

  export type ProductUpdateWithoutProductionsAsFinishedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUpdateManyWithoutProductNestedInput
    productionItems?: ProductionItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductionsAsFinishedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUncheckedUpdateManyWithoutProductNestedInput
    productionItems?: ProductionItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type EmployeeUpsertWithoutProductionsInput = {
    update: XOR<EmployeeUpdateWithoutProductionsInput, EmployeeUncheckedUpdateWithoutProductionsInput>
    create: XOR<EmployeeCreateWithoutProductionsInput, EmployeeUncheckedCreateWithoutProductionsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutProductionsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutProductionsInput, EmployeeUncheckedUpdateWithoutProductionsInput>
  }

  export type EmployeeUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    sales?: SaleUpdateManyWithoutCreatedByNestedInput
    purchases?: PurchaseUpdateManyWithoutCreatedByNestedInput
    inspections?: QualityInspectionUpdateManyWithoutInspectedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutCreatedByNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutCreatedByNestedInput
    inspections?: QualityInspectionUncheckedUpdateManyWithoutInspectedByNestedInput
  }

  export type ProductionItemUpsertWithWhereUniqueWithoutProductionInput = {
    where: ProductionItemWhereUniqueInput
    update: XOR<ProductionItemUpdateWithoutProductionInput, ProductionItemUncheckedUpdateWithoutProductionInput>
    create: XOR<ProductionItemCreateWithoutProductionInput, ProductionItemUncheckedCreateWithoutProductionInput>
  }

  export type ProductionItemUpdateWithWhereUniqueWithoutProductionInput = {
    where: ProductionItemWhereUniqueInput
    data: XOR<ProductionItemUpdateWithoutProductionInput, ProductionItemUncheckedUpdateWithoutProductionInput>
  }

  export type ProductionItemUpdateManyWithWhereWithoutProductionInput = {
    where: ProductionItemScalarWhereInput
    data: XOR<ProductionItemUpdateManyMutationInput, ProductionItemUncheckedUpdateManyWithoutProductionInput>
  }

  export type QualityInspectionUpsertWithWhereUniqueWithoutProductionInput = {
    where: QualityInspectionWhereUniqueInput
    update: XOR<QualityInspectionUpdateWithoutProductionInput, QualityInspectionUncheckedUpdateWithoutProductionInput>
    create: XOR<QualityInspectionCreateWithoutProductionInput, QualityInspectionUncheckedCreateWithoutProductionInput>
  }

  export type QualityInspectionUpdateWithWhereUniqueWithoutProductionInput = {
    where: QualityInspectionWhereUniqueInput
    data: XOR<QualityInspectionUpdateWithoutProductionInput, QualityInspectionUncheckedUpdateWithoutProductionInput>
  }

  export type QualityInspectionUpdateManyWithWhereWithoutProductionInput = {
    where: QualityInspectionScalarWhereInput
    data: XOR<QualityInspectionUpdateManyMutationInput, QualityInspectionUncheckedUpdateManyWithoutProductionInput>
  }

  export type ProductionCreateWithoutItemsInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    createdAt?: Date | string
    producedProduct: ProductCreateNestedOneWithoutProductionsAsFinishedInput
    createdBy: EmployeeCreateNestedOneWithoutProductionsInput
    inspections?: QualityInspectionCreateNestedManyWithoutProductionInput
  }

  export type ProductionUncheckedCreateWithoutItemsInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    producedProductId: string
    createdById: string
    createdAt?: Date | string
    inspections?: QualityInspectionUncheckedCreateNestedManyWithoutProductionInput
  }

  export type ProductionCreateOrConnectWithoutItemsInput = {
    where: ProductionWhereUniqueInput
    create: XOR<ProductionCreateWithoutItemsInput, ProductionUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutProductionItemsInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemCreateNestedManyWithoutProductInput
    productionsAsFinished?: ProductionCreateNestedManyWithoutProducedProductInput
  }

  export type ProductUncheckedCreateWithoutProductionItemsInput = {
    id?: string
    name: string
    sku: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemUncheckedCreateNestedManyWithoutProductInput
    productionsAsFinished?: ProductionUncheckedCreateNestedManyWithoutProducedProductInput
  }

  export type ProductCreateOrConnectWithoutProductionItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductionItemsInput, ProductUncheckedCreateWithoutProductionItemsInput>
  }

  export type ProductionUpsertWithoutItemsInput = {
    update: XOR<ProductionUpdateWithoutItemsInput, ProductionUncheckedUpdateWithoutItemsInput>
    create: XOR<ProductionCreateWithoutItemsInput, ProductionUncheckedCreateWithoutItemsInput>
    where?: ProductionWhereInput
  }

  export type ProductionUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProductionWhereInput
    data: XOR<ProductionUpdateWithoutItemsInput, ProductionUncheckedUpdateWithoutItemsInput>
  }

  export type ProductionUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producedProduct?: ProductUpdateOneRequiredWithoutProductionsAsFinishedNestedInput
    createdBy?: EmployeeUpdateOneRequiredWithoutProductionsNestedInput
    inspections?: QualityInspectionUpdateManyWithoutProductionNestedInput
  }

  export type ProductionUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    producedProductId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: QualityInspectionUncheckedUpdateManyWithoutProductionNestedInput
  }

  export type ProductUpsertWithoutProductionItemsInput = {
    update: XOR<ProductUpdateWithoutProductionItemsInput, ProductUncheckedUpdateWithoutProductionItemsInput>
    create: XOR<ProductCreateWithoutProductionItemsInput, ProductUncheckedCreateWithoutProductionItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductionItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductionItemsInput, ProductUncheckedUpdateWithoutProductionItemsInput>
  }

  export type ProductUpdateWithoutProductionItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUpdateManyWithoutProductNestedInput
    productionsAsFinished?: ProductionUpdateManyWithoutProducedProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductionItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUncheckedUpdateManyWithoutProductNestedInput
    productionsAsFinished?: ProductionUncheckedUpdateManyWithoutProducedProductNestedInput
  }

  export type ProductionCreateWithoutInspectionsInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    createdAt?: Date | string
    producedProduct: ProductCreateNestedOneWithoutProductionsAsFinishedInput
    createdBy: EmployeeCreateNestedOneWithoutProductionsInput
    items?: ProductionItemCreateNestedManyWithoutProductionInput
  }

  export type ProductionUncheckedCreateWithoutInspectionsInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    producedProductId: string
    createdById: string
    createdAt?: Date | string
    items?: ProductionItemUncheckedCreateNestedManyWithoutProductionInput
  }

  export type ProductionCreateOrConnectWithoutInspectionsInput = {
    where: ProductionWhereUniqueInput
    create: XOR<ProductionCreateWithoutInspectionsInput, ProductionUncheckedCreateWithoutInspectionsInput>
  }

  export type PurchaseCreateWithoutInspectionsInput = {
    id?: string
    referenceNo: string
    createdAt?: Date | string
    createdBy: EmployeeCreateNestedOneWithoutPurchasesInput
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutInspectionsInput = {
    id?: string
    referenceNo: string
    createdById: string
    createdAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutInspectionsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutInspectionsInput, PurchaseUncheckedCreateWithoutInspectionsInput>
  }

  export type EmployeeCreateWithoutInspectionsInput = {
    id?: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    productions?: ProductionCreateNestedManyWithoutCreatedByInput
    sales?: SaleCreateNestedManyWithoutCreatedByInput
    purchases?: PurchaseCreateNestedManyWithoutCreatedByInput
  }

  export type EmployeeUncheckedCreateWithoutInspectionsInput = {
    id?: string
    userId: string
    designation?: string | null
    department?: string | null
    createdAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutCreatedByInput
    sales?: SaleUncheckedCreateNestedManyWithoutCreatedByInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type EmployeeCreateOrConnectWithoutInspectionsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutInspectionsInput, EmployeeUncheckedCreateWithoutInspectionsInput>
  }

  export type ProductionUpsertWithoutInspectionsInput = {
    update: XOR<ProductionUpdateWithoutInspectionsInput, ProductionUncheckedUpdateWithoutInspectionsInput>
    create: XOR<ProductionCreateWithoutInspectionsInput, ProductionUncheckedCreateWithoutInspectionsInput>
    where?: ProductionWhereInput
  }

  export type ProductionUpdateToOneWithWhereWithoutInspectionsInput = {
    where?: ProductionWhereInput
    data: XOR<ProductionUpdateWithoutInspectionsInput, ProductionUncheckedUpdateWithoutInspectionsInput>
  }

  export type ProductionUpdateWithoutInspectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producedProduct?: ProductUpdateOneRequiredWithoutProductionsAsFinishedNestedInput
    createdBy?: EmployeeUpdateOneRequiredWithoutProductionsNestedInput
    items?: ProductionItemUpdateManyWithoutProductionNestedInput
  }

  export type ProductionUncheckedUpdateWithoutInspectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    producedProductId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProductionItemUncheckedUpdateManyWithoutProductionNestedInput
  }

  export type PurchaseUpsertWithoutInspectionsInput = {
    update: XOR<PurchaseUpdateWithoutInspectionsInput, PurchaseUncheckedUpdateWithoutInspectionsInput>
    create: XOR<PurchaseCreateWithoutInspectionsInput, PurchaseUncheckedCreateWithoutInspectionsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutInspectionsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutInspectionsInput, PurchaseUncheckedUpdateWithoutInspectionsInput>
  }

  export type PurchaseUpdateWithoutInspectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: EmployeeUpdateOneRequiredWithoutPurchasesNestedInput
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutInspectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type EmployeeUpsertWithoutInspectionsInput = {
    update: XOR<EmployeeUpdateWithoutInspectionsInput, EmployeeUncheckedUpdateWithoutInspectionsInput>
    create: XOR<EmployeeCreateWithoutInspectionsInput, EmployeeUncheckedCreateWithoutInspectionsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutInspectionsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutInspectionsInput, EmployeeUncheckedUpdateWithoutInspectionsInput>
  }

  export type EmployeeUpdateWithoutInspectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    productions?: ProductionUpdateManyWithoutCreatedByNestedInput
    sales?: SaleUpdateManyWithoutCreatedByNestedInput
    purchases?: PurchaseUpdateManyWithoutCreatedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutInspectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutCreatedByNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCreatedByNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserRoleCreateManyUserInput = {
    roleId: string
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyRoleInput = {
    userId: string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionCreateManyCreatedByInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    producedProductId: string
    createdAt?: Date | string
  }

  export type SaleCreateManyCreatedByInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    customerId: string
    createdAt?: Date | string
  }

  export type PurchaseCreateManyCreatedByInput = {
    id?: string
    referenceNo: string
    createdAt?: Date | string
  }

  export type QualityInspectionCreateManyInspectedByInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    productionId?: string | null
    purchaseId?: string | null
    createdAt?: Date | string
  }

  export type ProductionUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producedProduct?: ProductUpdateOneRequiredWithoutProductionsAsFinishedNestedInput
    items?: ProductionItemUpdateManyWithoutProductionNestedInput
    inspections?: QualityInspectionUpdateManyWithoutProductionNestedInput
  }

  export type ProductionUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    producedProductId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProductionItemUncheckedUpdateManyWithoutProductionNestedInput
    inspections?: QualityInspectionUncheckedUpdateManyWithoutProductionNestedInput
  }

  export type ProductionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    producedProductId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    inspections?: QualityInspectionUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    inspections?: QualityInspectionUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualityInspectionUpdateWithoutInspectedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    production?: ProductionUpdateOneWithoutInspectionsNestedInput
    purchase?: PurchaseUpdateOneWithoutInspectionsNestedInput
  }

  export type QualityInspectionUncheckedUpdateWithoutInspectedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    productionId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualityInspectionUncheckedUpdateManyWithoutInspectedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    productionId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyCustomerInput = {
    id?: string
    invoiceNo: string
    status?: $Enums.SaleStatus
    createdById: string
    createdAt?: Date | string
  }

  export type SaleUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: EmployeeUpdateOneRequiredWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManyProductInput = {
    id?: string
    saleId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemCreateManyProductInput = {
    id?: string
    purchaseId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type ProductionItemCreateManyProductInput = {
    id?: string
    productionId: string
    quantity: number
  }

  export type ProductionCreateManyProducedProductInput = {
    id?: string
    batchNo: string
    status?: $Enums.ProductionStatus
    createdById: string
    createdAt?: Date | string
  }

  export type SaleItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase?: PurchaseUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PurchaseItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductionItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    production?: ProductionUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ProductionItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    productionId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductionItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    productionId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductionUpdateWithoutProducedProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: EmployeeUpdateOneRequiredWithoutProductionsNestedInput
    items?: ProductionItemUpdateManyWithoutProductionNestedInput
    inspections?: QualityInspectionUpdateManyWithoutProductionNestedInput
  }

  export type ProductionUncheckedUpdateWithoutProducedProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProductionItemUncheckedUpdateManyWithoutProductionNestedInput
    inspections?: QualityInspectionUncheckedUpdateManyWithoutProductionNestedInput
  }

  export type ProductionUncheckedUpdateManyWithoutProducedProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNo?: StringFieldUpdateOperationsInput | string
    status?: EnumProductionStatusFieldUpdateOperationsInput | $Enums.ProductionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateManyPurchaseInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type QualityInspectionCreateManyPurchaseInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    productionId?: string | null
    inspectedById: string
    createdAt?: Date | string
  }

  export type PurchaseItemUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutPurchaseItemsNestedInput
  }

  export type PurchaseItemUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseItemUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type QualityInspectionUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    production?: ProductionUpdateOneWithoutInspectionsNestedInput
    inspectedBy?: EmployeeUpdateOneRequiredWithoutInspectionsNestedInput
  }

  export type QualityInspectionUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    productionId?: NullableStringFieldUpdateOperationsInput | string | null
    inspectedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualityInspectionUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    productionId?: NullableStringFieldUpdateOperationsInput | string | null
    inspectedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManySaleInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductionItemCreateManyProductionInput = {
    id?: string
    productId: string
    quantity: number
  }

  export type QualityInspectionCreateManyProductionInput = {
    id?: string
    status?: $Enums.QualityStatus
    remarks?: string | null
    purchaseId?: string | null
    inspectedById: string
    createdAt?: Date | string
  }

  export type ProductionItemUpdateWithoutProductionInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutProductionItemsNestedInput
  }

  export type ProductionItemUncheckedUpdateWithoutProductionInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductionItemUncheckedUpdateManyWithoutProductionInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type QualityInspectionUpdateWithoutProductionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneWithoutInspectionsNestedInput
    inspectedBy?: EmployeeUpdateOneRequiredWithoutInspectionsNestedInput
  }

  export type QualityInspectionUncheckedUpdateWithoutProductionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    inspectedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualityInspectionUncheckedUpdateManyWithoutProductionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumQualityStatusFieldUpdateOperationsInput | $Enums.QualityStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    inspectedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}