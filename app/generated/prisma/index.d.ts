
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Startup
 * 
 */
export type Startup = $Result.DefaultSelection<Prisma.$StartupPayload>
/**
 * Model Investor
 * 
 */
export type Investor = $Result.DefaultSelection<Prisma.$InvestorPayload>
/**
 * Model PitchDeck
 * 
 */
export type PitchDeck = $Result.DefaultSelection<Prisma.$PitchDeckPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Analytics
 * 
 */
export type Analytics = $Result.DefaultSelection<Prisma.$AnalyticsPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Communication
 * 
 */
export type Communication = $Result.DefaultSelection<Prisma.$CommunicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  STARTUP: 'STARTUP',
  INVESTOR: 'INVESTOR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const MatchStatus: {
  PENDING: 'PENDING',
  CONTACTED: 'CONTACTED',
  REPLIED: 'REPLIED',
  MEETING_SCHEDULED: 'MEETING_SCHEDULED',
  PITCH_COMPLETED: 'PITCH_COMPLETED',
  INTERESTED: 'INTERESTED',
  NOT_INTERESTED: 'NOT_INTERESTED',
  DEAL_CLOSED: 'DEAL_CLOSED'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]


export const CommunicationType: {
  EMAIL: 'EMAIL',
  MEETING: 'MEETING',
  CALL: 'CALL',
  NOTE: 'NOTE',
  OTHER: 'OTHER'
};

export type CommunicationType = (typeof CommunicationType)[keyof typeof CommunicationType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

export type CommunicationType = $Enums.CommunicationType

export const CommunicationType: typeof $Enums.CommunicationType

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
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.startup`: Exposes CRUD operations for the **Startup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Startups
    * const startups = await prisma.startup.findMany()
    * ```
    */
  get startup(): Prisma.StartupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investor`: Exposes CRUD operations for the **Investor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investors
    * const investors = await prisma.investor.findMany()
    * ```
    */
  get investor(): Prisma.InvestorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pitchDeck`: Exposes CRUD operations for the **PitchDeck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PitchDecks
    * const pitchDecks = await prisma.pitchDeck.findMany()
    * ```
    */
  get pitchDeck(): Prisma.PitchDeckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analytics
    * const analytics = await prisma.analytics.findMany()
    * ```
    */
  get analytics(): Prisma.AnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communication`: Exposes CRUD operations for the **Communication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communications
    * const communications = await prisma.communication.findMany()
    * ```
    */
  get communication(): Prisma.CommunicationDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Startup: 'Startup',
    Investor: 'Investor',
    PitchDeck: 'PitchDeck',
    Feedback: 'Feedback',
    Analytics: 'Analytics',
    Match: 'Match',
    Communication: 'Communication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "startup" | "investor" | "pitchDeck" | "feedback" | "analytics" | "match" | "communication"
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
      Startup: {
        payload: Prisma.$StartupPayload<ExtArgs>
        fields: Prisma.StartupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StartupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StartupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          findFirst: {
            args: Prisma.StartupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StartupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          findMany: {
            args: Prisma.StartupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>[]
          }
          create: {
            args: Prisma.StartupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          createMany: {
            args: Prisma.StartupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StartupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>[]
          }
          delete: {
            args: Prisma.StartupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          update: {
            args: Prisma.StartupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          deleteMany: {
            args: Prisma.StartupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StartupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StartupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>[]
          }
          upsert: {
            args: Prisma.StartupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          aggregate: {
            args: Prisma.StartupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStartup>
          }
          groupBy: {
            args: Prisma.StartupGroupByArgs<ExtArgs>
            result: $Utils.Optional<StartupGroupByOutputType>[]
          }
          count: {
            args: Prisma.StartupCountArgs<ExtArgs>
            result: $Utils.Optional<StartupCountAggregateOutputType> | number
          }
        }
      }
      Investor: {
        payload: Prisma.$InvestorPayload<ExtArgs>
        fields: Prisma.InvestorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          findFirst: {
            args: Prisma.InvestorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          findMany: {
            args: Prisma.InvestorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>[]
          }
          create: {
            args: Prisma.InvestorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          createMany: {
            args: Prisma.InvestorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>[]
          }
          delete: {
            args: Prisma.InvestorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          update: {
            args: Prisma.InvestorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          deleteMany: {
            args: Prisma.InvestorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>[]
          }
          upsert: {
            args: Prisma.InvestorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          aggregate: {
            args: Prisma.InvestorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestor>
          }
          groupBy: {
            args: Prisma.InvestorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestorCountArgs<ExtArgs>
            result: $Utils.Optional<InvestorCountAggregateOutputType> | number
          }
        }
      }
      PitchDeck: {
        payload: Prisma.$PitchDeckPayload<ExtArgs>
        fields: Prisma.PitchDeckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PitchDeckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PitchDeckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload>
          }
          findFirst: {
            args: Prisma.PitchDeckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PitchDeckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload>
          }
          findMany: {
            args: Prisma.PitchDeckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload>[]
          }
          create: {
            args: Prisma.PitchDeckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload>
          }
          createMany: {
            args: Prisma.PitchDeckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PitchDeckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload>[]
          }
          delete: {
            args: Prisma.PitchDeckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload>
          }
          update: {
            args: Prisma.PitchDeckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload>
          }
          deleteMany: {
            args: Prisma.PitchDeckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PitchDeckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PitchDeckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload>[]
          }
          upsert: {
            args: Prisma.PitchDeckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDeckPayload>
          }
          aggregate: {
            args: Prisma.PitchDeckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePitchDeck>
          }
          groupBy: {
            args: Prisma.PitchDeckGroupByArgs<ExtArgs>
            result: $Utils.Optional<PitchDeckGroupByOutputType>[]
          }
          count: {
            args: Prisma.PitchDeckCountArgs<ExtArgs>
            result: $Utils.Optional<PitchDeckCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Analytics: {
        payload: Prisma.$AnalyticsPayload<ExtArgs>
        fields: Prisma.AnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findMany: {
            args: Prisma.AnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          create: {
            args: Prisma.AnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          createMany: {
            args: Prisma.AnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          update: {
            args: Prisma.AnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalytics>
          }
          groupBy: {
            args: Prisma.AnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Communication: {
        payload: Prisma.$CommunicationPayload<ExtArgs>
        fields: Prisma.CommunicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          findFirst: {
            args: Prisma.CommunicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          findMany: {
            args: Prisma.CommunicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>[]
          }
          create: {
            args: Prisma.CommunicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          createMany: {
            args: Prisma.CommunicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>[]
          }
          delete: {
            args: Prisma.CommunicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          update: {
            args: Prisma.CommunicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          deleteMany: {
            args: Prisma.CommunicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>[]
          }
          upsert: {
            args: Prisma.CommunicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          aggregate: {
            args: Prisma.CommunicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunication>
          }
          groupBy: {
            args: Prisma.CommunicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunicationCountArgs<ExtArgs>
            result: $Utils.Optional<CommunicationCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    startup?: StartupOmit
    investor?: InvestorOmit
    pitchDeck?: PitchDeckOmit
    feedback?: FeedbackOmit
    analytics?: AnalyticsOmit
    match?: MatchOmit
    communication?: CommunicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type StartupCountOutputType
   */

  export type StartupCountOutputType = {
    matches: number
  }

  export type StartupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | StartupCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * StartupCountOutputType without action
   */
  export type StartupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupCountOutputType
     */
    select?: StartupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StartupCountOutputType without action
   */
  export type StartupCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type InvestorCountOutputType
   */

  export type InvestorCountOutputType = {
    matches: number
  }

  export type InvestorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | InvestorCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * InvestorCountOutputType without action
   */
  export type InvestorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorCountOutputType
     */
    select?: InvestorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestorCountOutputType without action
   */
  export type InvestorCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type PitchDeckCountOutputType
   */

  export type PitchDeckCountOutputType = {
    feedback: number
  }

  export type PitchDeckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | PitchDeckCountOutputTypeCountFeedbackArgs
  }

  // Custom InputTypes
  /**
   * PitchDeckCountOutputType without action
   */
  export type PitchDeckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeckCountOutputType
     */
    select?: PitchDeckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PitchDeckCountOutputType without action
   */
  export type PitchDeckCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    communications: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communications?: boolean | MatchCountOutputTypeCountCommunicationsArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountCommunicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationWhereInput
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
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
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
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.UserRole
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
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    startup?: boolean | User$startupArgs<ExtArgs>
    investor?: boolean | User$investorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | User$startupArgs<ExtArgs>
    investor?: boolean | User$investorArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      startup: Prisma.$StartupPayload<ExtArgs> | null
      investor: Prisma.$InvestorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.UserRole
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
    startup<T extends User$startupArgs<ExtArgs> = {}>(args?: Subset<T, User$startupArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    investor<T extends User$investorArgs<ExtArgs> = {}>(args?: Subset<T, User$investorArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
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
   * User.startup
   */
  export type User$startupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    where?: StartupWhereInput
  }

  /**
   * User.investor
   */
  export type User$investorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    where?: InvestorWhereInput
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
   * Model Startup
   */

  export type AggregateStartup = {
    _count: StartupCountAggregateOutputType | null
    _avg: StartupAvgAggregateOutputType | null
    _sum: StartupSumAggregateOutputType | null
    _min: StartupMinAggregateOutputType | null
    _max: StartupMaxAggregateOutputType | null
  }

  export type StartupAvgAggregateOutputType = {
    teamSize: number | null
    valuation: number | null
  }

  export type StartupSumAggregateOutputType = {
    teamSize: number | null
    valuation: number | null
  }

  export type StartupMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    description: string | null
    industry: string | null
    stage: string | null
    location: string | null
    foundedDate: Date | null
    teamSize: number | null
    valuation: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StartupMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    description: string | null
    industry: string | null
    stage: string | null
    location: string | null
    foundedDate: Date | null
    teamSize: number | null
    valuation: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StartupCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    description: number
    industry: number
    stage: number
    location: number
    foundedDate: number
    teamSize: number
    valuation: number
    createdAt: number
    updatedAt: number
    financialMetrics: number
    _all: number
  }


  export type StartupAvgAggregateInputType = {
    teamSize?: true
    valuation?: true
  }

  export type StartupSumAggregateInputType = {
    teamSize?: true
    valuation?: true
  }

  export type StartupMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    description?: true
    industry?: true
    stage?: true
    location?: true
    foundedDate?: true
    teamSize?: true
    valuation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StartupMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    description?: true
    industry?: true
    stage?: true
    location?: true
    foundedDate?: true
    teamSize?: true
    valuation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StartupCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    description?: true
    industry?: true
    stage?: true
    location?: true
    foundedDate?: true
    teamSize?: true
    valuation?: true
    createdAt?: true
    updatedAt?: true
    financialMetrics?: true
    _all?: true
  }

  export type StartupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Startup to aggregate.
     */
    where?: StartupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startups to fetch.
     */
    orderBy?: StartupOrderByWithRelationInput | StartupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StartupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Startups
    **/
    _count?: true | StartupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StartupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StartupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StartupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StartupMaxAggregateInputType
  }

  export type GetStartupAggregateType<T extends StartupAggregateArgs> = {
        [P in keyof T & keyof AggregateStartup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStartup[P]>
      : GetScalarType<T[P], AggregateStartup[P]>
  }




  export type StartupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StartupWhereInput
    orderBy?: StartupOrderByWithAggregationInput | StartupOrderByWithAggregationInput[]
    by: StartupScalarFieldEnum[] | StartupScalarFieldEnum
    having?: StartupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StartupCountAggregateInputType | true
    _avg?: StartupAvgAggregateInputType
    _sum?: StartupSumAggregateInputType
    _min?: StartupMinAggregateInputType
    _max?: StartupMaxAggregateInputType
  }

  export type StartupGroupByOutputType = {
    id: string
    userId: string
    companyName: string
    description: string | null
    industry: string
    stage: string
    location: string
    foundedDate: Date | null
    teamSize: number | null
    valuation: number | null
    createdAt: Date
    updatedAt: Date
    financialMetrics: JsonValue | null
    _count: StartupCountAggregateOutputType | null
    _avg: StartupAvgAggregateOutputType | null
    _sum: StartupSumAggregateOutputType | null
    _min: StartupMinAggregateOutputType | null
    _max: StartupMaxAggregateOutputType | null
  }

  type GetStartupGroupByPayload<T extends StartupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StartupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StartupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StartupGroupByOutputType[P]>
            : GetScalarType<T[P], StartupGroupByOutputType[P]>
        }
      >
    >


  export type StartupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    industry?: boolean
    stage?: boolean
    location?: boolean
    foundedDate?: boolean
    teamSize?: boolean
    valuation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    financialMetrics?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pitchDeck?: boolean | Startup$pitchDeckArgs<ExtArgs>
    matches?: boolean | Startup$matchesArgs<ExtArgs>
    _count?: boolean | StartupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["startup"]>

  export type StartupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    industry?: boolean
    stage?: boolean
    location?: boolean
    foundedDate?: boolean
    teamSize?: boolean
    valuation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    financialMetrics?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["startup"]>

  export type StartupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    industry?: boolean
    stage?: boolean
    location?: boolean
    foundedDate?: boolean
    teamSize?: boolean
    valuation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    financialMetrics?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["startup"]>

  export type StartupSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    industry?: boolean
    stage?: boolean
    location?: boolean
    foundedDate?: boolean
    teamSize?: boolean
    valuation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    financialMetrics?: boolean
  }

  export type StartupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "description" | "industry" | "stage" | "location" | "foundedDate" | "teamSize" | "valuation" | "createdAt" | "updatedAt" | "financialMetrics", ExtArgs["result"]["startup"]>
  export type StartupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pitchDeck?: boolean | Startup$pitchDeckArgs<ExtArgs>
    matches?: boolean | Startup$matchesArgs<ExtArgs>
    _count?: boolean | StartupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StartupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StartupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StartupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Startup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pitchDeck: Prisma.$PitchDeckPayload<ExtArgs> | null
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string
      description: string | null
      industry: string
      stage: string
      location: string
      foundedDate: Date | null
      teamSize: number | null
      valuation: number | null
      createdAt: Date
      updatedAt: Date
      financialMetrics: Prisma.JsonValue | null
    }, ExtArgs["result"]["startup"]>
    composites: {}
  }

  type StartupGetPayload<S extends boolean | null | undefined | StartupDefaultArgs> = $Result.GetResult<Prisma.$StartupPayload, S>

  type StartupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StartupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StartupCountAggregateInputType | true
    }

  export interface StartupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Startup'], meta: { name: 'Startup' } }
    /**
     * Find zero or one Startup that matches the filter.
     * @param {StartupFindUniqueArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StartupFindUniqueArgs>(args: SelectSubset<T, StartupFindUniqueArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Startup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StartupFindUniqueOrThrowArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StartupFindUniqueOrThrowArgs>(args: SelectSubset<T, StartupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Startup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupFindFirstArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StartupFindFirstArgs>(args?: SelectSubset<T, StartupFindFirstArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Startup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupFindFirstOrThrowArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StartupFindFirstOrThrowArgs>(args?: SelectSubset<T, StartupFindFirstOrThrowArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Startups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Startups
     * const startups = await prisma.startup.findMany()
     * 
     * // Get first 10 Startups
     * const startups = await prisma.startup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const startupWithIdOnly = await prisma.startup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StartupFindManyArgs>(args?: SelectSubset<T, StartupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Startup.
     * @param {StartupCreateArgs} args - Arguments to create a Startup.
     * @example
     * // Create one Startup
     * const Startup = await prisma.startup.create({
     *   data: {
     *     // ... data to create a Startup
     *   }
     * })
     * 
     */
    create<T extends StartupCreateArgs>(args: SelectSubset<T, StartupCreateArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Startups.
     * @param {StartupCreateManyArgs} args - Arguments to create many Startups.
     * @example
     * // Create many Startups
     * const startup = await prisma.startup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StartupCreateManyArgs>(args?: SelectSubset<T, StartupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Startups and returns the data saved in the database.
     * @param {StartupCreateManyAndReturnArgs} args - Arguments to create many Startups.
     * @example
     * // Create many Startups
     * const startup = await prisma.startup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Startups and only return the `id`
     * const startupWithIdOnly = await prisma.startup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StartupCreateManyAndReturnArgs>(args?: SelectSubset<T, StartupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Startup.
     * @param {StartupDeleteArgs} args - Arguments to delete one Startup.
     * @example
     * // Delete one Startup
     * const Startup = await prisma.startup.delete({
     *   where: {
     *     // ... filter to delete one Startup
     *   }
     * })
     * 
     */
    delete<T extends StartupDeleteArgs>(args: SelectSubset<T, StartupDeleteArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Startup.
     * @param {StartupUpdateArgs} args - Arguments to update one Startup.
     * @example
     * // Update one Startup
     * const startup = await prisma.startup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StartupUpdateArgs>(args: SelectSubset<T, StartupUpdateArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Startups.
     * @param {StartupDeleteManyArgs} args - Arguments to filter Startups to delete.
     * @example
     * // Delete a few Startups
     * const { count } = await prisma.startup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StartupDeleteManyArgs>(args?: SelectSubset<T, StartupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Startups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Startups
     * const startup = await prisma.startup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StartupUpdateManyArgs>(args: SelectSubset<T, StartupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Startups and returns the data updated in the database.
     * @param {StartupUpdateManyAndReturnArgs} args - Arguments to update many Startups.
     * @example
     * // Update many Startups
     * const startup = await prisma.startup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Startups and only return the `id`
     * const startupWithIdOnly = await prisma.startup.updateManyAndReturn({
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
    updateManyAndReturn<T extends StartupUpdateManyAndReturnArgs>(args: SelectSubset<T, StartupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Startup.
     * @param {StartupUpsertArgs} args - Arguments to update or create a Startup.
     * @example
     * // Update or create a Startup
     * const startup = await prisma.startup.upsert({
     *   create: {
     *     // ... data to create a Startup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Startup we want to update
     *   }
     * })
     */
    upsert<T extends StartupUpsertArgs>(args: SelectSubset<T, StartupUpsertArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Startups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupCountArgs} args - Arguments to filter Startups to count.
     * @example
     * // Count the number of Startups
     * const count = await prisma.startup.count({
     *   where: {
     *     // ... the filter for the Startups we want to count
     *   }
     * })
    **/
    count<T extends StartupCountArgs>(
      args?: Subset<T, StartupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StartupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Startup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StartupAggregateArgs>(args: Subset<T, StartupAggregateArgs>): Prisma.PrismaPromise<GetStartupAggregateType<T>>

    /**
     * Group by Startup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupGroupByArgs} args - Group by arguments.
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
      T extends StartupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StartupGroupByArgs['orderBy'] }
        : { orderBy?: StartupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StartupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStartupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Startup model
   */
  readonly fields: StartupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Startup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StartupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pitchDeck<T extends Startup$pitchDeckArgs<ExtArgs> = {}>(args?: Subset<T, Startup$pitchDeckArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    matches<T extends Startup$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Startup$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Startup model
   */
  interface StartupFieldRefs {
    readonly id: FieldRef<"Startup", 'String'>
    readonly userId: FieldRef<"Startup", 'String'>
    readonly companyName: FieldRef<"Startup", 'String'>
    readonly description: FieldRef<"Startup", 'String'>
    readonly industry: FieldRef<"Startup", 'String'>
    readonly stage: FieldRef<"Startup", 'String'>
    readonly location: FieldRef<"Startup", 'String'>
    readonly foundedDate: FieldRef<"Startup", 'DateTime'>
    readonly teamSize: FieldRef<"Startup", 'Int'>
    readonly valuation: FieldRef<"Startup", 'Float'>
    readonly createdAt: FieldRef<"Startup", 'DateTime'>
    readonly updatedAt: FieldRef<"Startup", 'DateTime'>
    readonly financialMetrics: FieldRef<"Startup", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Startup findUnique
   */
  export type StartupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter, which Startup to fetch.
     */
    where: StartupWhereUniqueInput
  }

  /**
   * Startup findUniqueOrThrow
   */
  export type StartupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter, which Startup to fetch.
     */
    where: StartupWhereUniqueInput
  }

  /**
   * Startup findFirst
   */
  export type StartupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter, which Startup to fetch.
     */
    where?: StartupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startups to fetch.
     */
    orderBy?: StartupOrderByWithRelationInput | StartupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Startups.
     */
    cursor?: StartupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Startups.
     */
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[]
  }

  /**
   * Startup findFirstOrThrow
   */
  export type StartupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter, which Startup to fetch.
     */
    where?: StartupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startups to fetch.
     */
    orderBy?: StartupOrderByWithRelationInput | StartupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Startups.
     */
    cursor?: StartupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Startups.
     */
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[]
  }

  /**
   * Startup findMany
   */
  export type StartupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter, which Startups to fetch.
     */
    where?: StartupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startups to fetch.
     */
    orderBy?: StartupOrderByWithRelationInput | StartupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Startups.
     */
    cursor?: StartupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startups.
     */
    skip?: number
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[]
  }

  /**
   * Startup create
   */
  export type StartupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * The data needed to create a Startup.
     */
    data: XOR<StartupCreateInput, StartupUncheckedCreateInput>
  }

  /**
   * Startup createMany
   */
  export type StartupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Startups.
     */
    data: StartupCreateManyInput | StartupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Startup createManyAndReturn
   */
  export type StartupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * The data used to create many Startups.
     */
    data: StartupCreateManyInput | StartupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Startup update
   */
  export type StartupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * The data needed to update a Startup.
     */
    data: XOR<StartupUpdateInput, StartupUncheckedUpdateInput>
    /**
     * Choose, which Startup to update.
     */
    where: StartupWhereUniqueInput
  }

  /**
   * Startup updateMany
   */
  export type StartupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Startups.
     */
    data: XOR<StartupUpdateManyMutationInput, StartupUncheckedUpdateManyInput>
    /**
     * Filter which Startups to update
     */
    where?: StartupWhereInput
    /**
     * Limit how many Startups to update.
     */
    limit?: number
  }

  /**
   * Startup updateManyAndReturn
   */
  export type StartupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * The data used to update Startups.
     */
    data: XOR<StartupUpdateManyMutationInput, StartupUncheckedUpdateManyInput>
    /**
     * Filter which Startups to update
     */
    where?: StartupWhereInput
    /**
     * Limit how many Startups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Startup upsert
   */
  export type StartupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * The filter to search for the Startup to update in case it exists.
     */
    where: StartupWhereUniqueInput
    /**
     * In case the Startup found by the `where` argument doesn't exist, create a new Startup with this data.
     */
    create: XOR<StartupCreateInput, StartupUncheckedCreateInput>
    /**
     * In case the Startup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StartupUpdateInput, StartupUncheckedUpdateInput>
  }

  /**
   * Startup delete
   */
  export type StartupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter which Startup to delete.
     */
    where: StartupWhereUniqueInput
  }

  /**
   * Startup deleteMany
   */
  export type StartupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Startups to delete
     */
    where?: StartupWhereInput
    /**
     * Limit how many Startups to delete.
     */
    limit?: number
  }

  /**
   * Startup.pitchDeck
   */
  export type Startup$pitchDeckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
    where?: PitchDeckWhereInput
  }

  /**
   * Startup.matches
   */
  export type Startup$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Startup without action
   */
  export type StartupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
  }


  /**
   * Model Investor
   */

  export type AggregateInvestor = {
    _count: InvestorCountAggregateOutputType | null
    _avg: InvestorAvgAggregateOutputType | null
    _sum: InvestorSumAggregateOutputType | null
    _min: InvestorMinAggregateOutputType | null
    _max: InvestorMaxAggregateOutputType | null
  }

  export type InvestorAvgAggregateOutputType = {
    portfolioSize: number | null
  }

  export type InvestorSumAggregateOutputType = {
    portfolioSize: number | null
  }

  export type InvestorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    firmName: string | null
    description: string | null
    location: string | null
    portfolioSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    firmName: string | null
    description: string | null
    location: string | null
    portfolioSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestorCountAggregateOutputType = {
    id: number
    userId: number
    firmName: number
    description: number
    investmentFocus: number
    stagePreference: number
    checkSize: number
    location: number
    portfolioSize: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvestorAvgAggregateInputType = {
    portfolioSize?: true
  }

  export type InvestorSumAggregateInputType = {
    portfolioSize?: true
  }

  export type InvestorMinAggregateInputType = {
    id?: true
    userId?: true
    firmName?: true
    description?: true
    location?: true
    portfolioSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestorMaxAggregateInputType = {
    id?: true
    userId?: true
    firmName?: true
    description?: true
    location?: true
    portfolioSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestorCountAggregateInputType = {
    id?: true
    userId?: true
    firmName?: true
    description?: true
    investmentFocus?: true
    stagePreference?: true
    checkSize?: true
    location?: true
    portfolioSize?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvestorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investor to aggregate.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investors
    **/
    _count?: true | InvestorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestorMaxAggregateInputType
  }

  export type GetInvestorAggregateType<T extends InvestorAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestor[P]>
      : GetScalarType<T[P], AggregateInvestor[P]>
  }




  export type InvestorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestorWhereInput
    orderBy?: InvestorOrderByWithAggregationInput | InvestorOrderByWithAggregationInput[]
    by: InvestorScalarFieldEnum[] | InvestorScalarFieldEnum
    having?: InvestorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestorCountAggregateInputType | true
    _avg?: InvestorAvgAggregateInputType
    _sum?: InvestorSumAggregateInputType
    _min?: InvestorMinAggregateInputType
    _max?: InvestorMaxAggregateInputType
  }

  export type InvestorGroupByOutputType = {
    id: string
    userId: string
    firmName: string
    description: string | null
    investmentFocus: string[]
    stagePreference: string[]
    checkSize: JsonValue
    location: string
    portfolioSize: number | null
    createdAt: Date
    updatedAt: Date
    _count: InvestorCountAggregateOutputType | null
    _avg: InvestorAvgAggregateOutputType | null
    _sum: InvestorSumAggregateOutputType | null
    _min: InvestorMinAggregateOutputType | null
    _max: InvestorMaxAggregateOutputType | null
  }

  type GetInvestorGroupByPayload<T extends InvestorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestorGroupByOutputType[P]>
            : GetScalarType<T[P], InvestorGroupByOutputType[P]>
        }
      >
    >


  export type InvestorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firmName?: boolean
    description?: boolean
    investmentFocus?: boolean
    stagePreference?: boolean
    checkSize?: boolean
    location?: boolean
    portfolioSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matches?: boolean | Investor$matchesArgs<ExtArgs>
    _count?: boolean | InvestorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investor"]>

  export type InvestorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firmName?: boolean
    description?: boolean
    investmentFocus?: boolean
    stagePreference?: boolean
    checkSize?: boolean
    location?: boolean
    portfolioSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investor"]>

  export type InvestorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firmName?: boolean
    description?: boolean
    investmentFocus?: boolean
    stagePreference?: boolean
    checkSize?: boolean
    location?: boolean
    portfolioSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investor"]>

  export type InvestorSelectScalar = {
    id?: boolean
    userId?: boolean
    firmName?: boolean
    description?: boolean
    investmentFocus?: boolean
    stagePreference?: boolean
    checkSize?: boolean
    location?: boolean
    portfolioSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvestorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firmName" | "description" | "investmentFocus" | "stagePreference" | "checkSize" | "location" | "portfolioSize" | "createdAt" | "updatedAt", ExtArgs["result"]["investor"]>
  export type InvestorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    matches?: boolean | Investor$matchesArgs<ExtArgs>
    _count?: boolean | InvestorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvestorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      firmName: string
      description: string | null
      investmentFocus: string[]
      stagePreference: string[]
      checkSize: Prisma.JsonValue
      location: string
      portfolioSize: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["investor"]>
    composites: {}
  }

  type InvestorGetPayload<S extends boolean | null | undefined | InvestorDefaultArgs> = $Result.GetResult<Prisma.$InvestorPayload, S>

  type InvestorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestorCountAggregateInputType | true
    }

  export interface InvestorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investor'], meta: { name: 'Investor' } }
    /**
     * Find zero or one Investor that matches the filter.
     * @param {InvestorFindUniqueArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestorFindUniqueArgs>(args: SelectSubset<T, InvestorFindUniqueArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestorFindUniqueOrThrowArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestorFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorFindFirstArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestorFindFirstArgs>(args?: SelectSubset<T, InvestorFindFirstArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorFindFirstOrThrowArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestorFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investors
     * const investors = await prisma.investor.findMany()
     * 
     * // Get first 10 Investors
     * const investors = await prisma.investor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investorWithIdOnly = await prisma.investor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestorFindManyArgs>(args?: SelectSubset<T, InvestorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investor.
     * @param {InvestorCreateArgs} args - Arguments to create a Investor.
     * @example
     * // Create one Investor
     * const Investor = await prisma.investor.create({
     *   data: {
     *     // ... data to create a Investor
     *   }
     * })
     * 
     */
    create<T extends InvestorCreateArgs>(args: SelectSubset<T, InvestorCreateArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investors.
     * @param {InvestorCreateManyArgs} args - Arguments to create many Investors.
     * @example
     * // Create many Investors
     * const investor = await prisma.investor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestorCreateManyArgs>(args?: SelectSubset<T, InvestorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investors and returns the data saved in the database.
     * @param {InvestorCreateManyAndReturnArgs} args - Arguments to create many Investors.
     * @example
     * // Create many Investors
     * const investor = await prisma.investor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investors and only return the `id`
     * const investorWithIdOnly = await prisma.investor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestorCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investor.
     * @param {InvestorDeleteArgs} args - Arguments to delete one Investor.
     * @example
     * // Delete one Investor
     * const Investor = await prisma.investor.delete({
     *   where: {
     *     // ... filter to delete one Investor
     *   }
     * })
     * 
     */
    delete<T extends InvestorDeleteArgs>(args: SelectSubset<T, InvestorDeleteArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investor.
     * @param {InvestorUpdateArgs} args - Arguments to update one Investor.
     * @example
     * // Update one Investor
     * const investor = await prisma.investor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestorUpdateArgs>(args: SelectSubset<T, InvestorUpdateArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investors.
     * @param {InvestorDeleteManyArgs} args - Arguments to filter Investors to delete.
     * @example
     * // Delete a few Investors
     * const { count } = await prisma.investor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestorDeleteManyArgs>(args?: SelectSubset<T, InvestorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investors
     * const investor = await prisma.investor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestorUpdateManyArgs>(args: SelectSubset<T, InvestorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investors and returns the data updated in the database.
     * @param {InvestorUpdateManyAndReturnArgs} args - Arguments to update many Investors.
     * @example
     * // Update many Investors
     * const investor = await prisma.investor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investors and only return the `id`
     * const investorWithIdOnly = await prisma.investor.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvestorUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investor.
     * @param {InvestorUpsertArgs} args - Arguments to update or create a Investor.
     * @example
     * // Update or create a Investor
     * const investor = await prisma.investor.upsert({
     *   create: {
     *     // ... data to create a Investor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investor we want to update
     *   }
     * })
     */
    upsert<T extends InvestorUpsertArgs>(args: SelectSubset<T, InvestorUpsertArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorCountArgs} args - Arguments to filter Investors to count.
     * @example
     * // Count the number of Investors
     * const count = await prisma.investor.count({
     *   where: {
     *     // ... the filter for the Investors we want to count
     *   }
     * })
    **/
    count<T extends InvestorCountArgs>(
      args?: Subset<T, InvestorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestorAggregateArgs>(args: Subset<T, InvestorAggregateArgs>): Prisma.PrismaPromise<GetInvestorAggregateType<T>>

    /**
     * Group by Investor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorGroupByArgs} args - Group by arguments.
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
      T extends InvestorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestorGroupByArgs['orderBy'] }
        : { orderBy?: InvestorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvestorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investor model
   */
  readonly fields: InvestorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matches<T extends Investor$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Investor$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Investor model
   */
  interface InvestorFieldRefs {
    readonly id: FieldRef<"Investor", 'String'>
    readonly userId: FieldRef<"Investor", 'String'>
    readonly firmName: FieldRef<"Investor", 'String'>
    readonly description: FieldRef<"Investor", 'String'>
    readonly investmentFocus: FieldRef<"Investor", 'String[]'>
    readonly stagePreference: FieldRef<"Investor", 'String[]'>
    readonly checkSize: FieldRef<"Investor", 'Json'>
    readonly location: FieldRef<"Investor", 'String'>
    readonly portfolioSize: FieldRef<"Investor", 'Int'>
    readonly createdAt: FieldRef<"Investor", 'DateTime'>
    readonly updatedAt: FieldRef<"Investor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investor findUnique
   */
  export type InvestorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor findUniqueOrThrow
   */
  export type InvestorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor findFirst
   */
  export type InvestorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investors.
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investors.
     */
    distinct?: InvestorScalarFieldEnum | InvestorScalarFieldEnum[]
  }

  /**
   * Investor findFirstOrThrow
   */
  export type InvestorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investors.
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investors.
     */
    distinct?: InvestorScalarFieldEnum | InvestorScalarFieldEnum[]
  }

  /**
   * Investor findMany
   */
  export type InvestorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter, which Investors to fetch.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investors.
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    distinct?: InvestorScalarFieldEnum | InvestorScalarFieldEnum[]
  }

  /**
   * Investor create
   */
  export type InvestorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * The data needed to create a Investor.
     */
    data: XOR<InvestorCreateInput, InvestorUncheckedCreateInput>
  }

  /**
   * Investor createMany
   */
  export type InvestorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investors.
     */
    data: InvestorCreateManyInput | InvestorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investor createManyAndReturn
   */
  export type InvestorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * The data used to create many Investors.
     */
    data: InvestorCreateManyInput | InvestorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investor update
   */
  export type InvestorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * The data needed to update a Investor.
     */
    data: XOR<InvestorUpdateInput, InvestorUncheckedUpdateInput>
    /**
     * Choose, which Investor to update.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor updateMany
   */
  export type InvestorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investors.
     */
    data: XOR<InvestorUpdateManyMutationInput, InvestorUncheckedUpdateManyInput>
    /**
     * Filter which Investors to update
     */
    where?: InvestorWhereInput
    /**
     * Limit how many Investors to update.
     */
    limit?: number
  }

  /**
   * Investor updateManyAndReturn
   */
  export type InvestorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * The data used to update Investors.
     */
    data: XOR<InvestorUpdateManyMutationInput, InvestorUncheckedUpdateManyInput>
    /**
     * Filter which Investors to update
     */
    where?: InvestorWhereInput
    /**
     * Limit how many Investors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investor upsert
   */
  export type InvestorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * The filter to search for the Investor to update in case it exists.
     */
    where: InvestorWhereUniqueInput
    /**
     * In case the Investor found by the `where` argument doesn't exist, create a new Investor with this data.
     */
    create: XOR<InvestorCreateInput, InvestorUncheckedCreateInput>
    /**
     * In case the Investor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestorUpdateInput, InvestorUncheckedUpdateInput>
  }

  /**
   * Investor delete
   */
  export type InvestorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter which Investor to delete.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor deleteMany
   */
  export type InvestorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investors to delete
     */
    where?: InvestorWhereInput
    /**
     * Limit how many Investors to delete.
     */
    limit?: number
  }

  /**
   * Investor.matches
   */
  export type Investor$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Investor without action
   */
  export type InvestorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
  }


  /**
   * Model PitchDeck
   */

  export type AggregatePitchDeck = {
    _count: PitchDeckCountAggregateOutputType | null
    _avg: PitchDeckAvgAggregateOutputType | null
    _sum: PitchDeckSumAggregateOutputType | null
    _min: PitchDeckMinAggregateOutputType | null
    _max: PitchDeckMaxAggregateOutputType | null
  }

  export type PitchDeckAvgAggregateOutputType = {
    currentVersion: number | null
  }

  export type PitchDeckSumAggregateOutputType = {
    currentVersion: number | null
  }

  export type PitchDeckMinAggregateOutputType = {
    id: string | null
    startupId: string | null
    currentVersion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PitchDeckMaxAggregateOutputType = {
    id: string | null
    startupId: string | null
    currentVersion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PitchDeckCountAggregateOutputType = {
    id: number
    startupId: number
    currentVersion: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PitchDeckAvgAggregateInputType = {
    currentVersion?: true
  }

  export type PitchDeckSumAggregateInputType = {
    currentVersion?: true
  }

  export type PitchDeckMinAggregateInputType = {
    id?: true
    startupId?: true
    currentVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PitchDeckMaxAggregateInputType = {
    id?: true
    startupId?: true
    currentVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PitchDeckCountAggregateInputType = {
    id?: true
    startupId?: true
    currentVersion?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PitchDeckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PitchDeck to aggregate.
     */
    where?: PitchDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PitchDecks to fetch.
     */
    orderBy?: PitchDeckOrderByWithRelationInput | PitchDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PitchDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PitchDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PitchDecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PitchDecks
    **/
    _count?: true | PitchDeckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PitchDeckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PitchDeckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PitchDeckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PitchDeckMaxAggregateInputType
  }

  export type GetPitchDeckAggregateType<T extends PitchDeckAggregateArgs> = {
        [P in keyof T & keyof AggregatePitchDeck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePitchDeck[P]>
      : GetScalarType<T[P], AggregatePitchDeck[P]>
  }




  export type PitchDeckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchDeckWhereInput
    orderBy?: PitchDeckOrderByWithAggregationInput | PitchDeckOrderByWithAggregationInput[]
    by: PitchDeckScalarFieldEnum[] | PitchDeckScalarFieldEnum
    having?: PitchDeckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PitchDeckCountAggregateInputType | true
    _avg?: PitchDeckAvgAggregateInputType
    _sum?: PitchDeckSumAggregateInputType
    _min?: PitchDeckMinAggregateInputType
    _max?: PitchDeckMaxAggregateInputType
  }

  export type PitchDeckGroupByOutputType = {
    id: string
    startupId: string
    currentVersion: number
    content: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PitchDeckCountAggregateOutputType | null
    _avg: PitchDeckAvgAggregateOutputType | null
    _sum: PitchDeckSumAggregateOutputType | null
    _min: PitchDeckMinAggregateOutputType | null
    _max: PitchDeckMaxAggregateOutputType | null
  }

  type GetPitchDeckGroupByPayload<T extends PitchDeckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PitchDeckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PitchDeckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PitchDeckGroupByOutputType[P]>
            : GetScalarType<T[P], PitchDeckGroupByOutputType[P]>
        }
      >
    >


  export type PitchDeckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupId?: boolean
    currentVersion?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
    feedback?: boolean | PitchDeck$feedbackArgs<ExtArgs>
    analytics?: boolean | PitchDeck$analyticsArgs<ExtArgs>
    _count?: boolean | PitchDeckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitchDeck"]>

  export type PitchDeckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupId?: boolean
    currentVersion?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitchDeck"]>

  export type PitchDeckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupId?: boolean
    currentVersion?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitchDeck"]>

  export type PitchDeckSelectScalar = {
    id?: boolean
    startupId?: boolean
    currentVersion?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PitchDeckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startupId" | "currentVersion" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["pitchDeck"]>
  export type PitchDeckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
    feedback?: boolean | PitchDeck$feedbackArgs<ExtArgs>
    analytics?: boolean | PitchDeck$analyticsArgs<ExtArgs>
    _count?: boolean | PitchDeckCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PitchDeckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }
  export type PitchDeckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }

  export type $PitchDeckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PitchDeck"
    objects: {
      startup: Prisma.$StartupPayload<ExtArgs>
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
      analytics: Prisma.$AnalyticsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startupId: string
      currentVersion: number
      content: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pitchDeck"]>
    composites: {}
  }

  type PitchDeckGetPayload<S extends boolean | null | undefined | PitchDeckDefaultArgs> = $Result.GetResult<Prisma.$PitchDeckPayload, S>

  type PitchDeckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PitchDeckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PitchDeckCountAggregateInputType | true
    }

  export interface PitchDeckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PitchDeck'], meta: { name: 'PitchDeck' } }
    /**
     * Find zero or one PitchDeck that matches the filter.
     * @param {PitchDeckFindUniqueArgs} args - Arguments to find a PitchDeck
     * @example
     * // Get one PitchDeck
     * const pitchDeck = await prisma.pitchDeck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PitchDeckFindUniqueArgs>(args: SelectSubset<T, PitchDeckFindUniqueArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PitchDeck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PitchDeckFindUniqueOrThrowArgs} args - Arguments to find a PitchDeck
     * @example
     * // Get one PitchDeck
     * const pitchDeck = await prisma.pitchDeck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PitchDeckFindUniqueOrThrowArgs>(args: SelectSubset<T, PitchDeckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PitchDeck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDeckFindFirstArgs} args - Arguments to find a PitchDeck
     * @example
     * // Get one PitchDeck
     * const pitchDeck = await prisma.pitchDeck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PitchDeckFindFirstArgs>(args?: SelectSubset<T, PitchDeckFindFirstArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PitchDeck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDeckFindFirstOrThrowArgs} args - Arguments to find a PitchDeck
     * @example
     * // Get one PitchDeck
     * const pitchDeck = await prisma.pitchDeck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PitchDeckFindFirstOrThrowArgs>(args?: SelectSubset<T, PitchDeckFindFirstOrThrowArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PitchDecks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDeckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PitchDecks
     * const pitchDecks = await prisma.pitchDeck.findMany()
     * 
     * // Get first 10 PitchDecks
     * const pitchDecks = await prisma.pitchDeck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pitchDeckWithIdOnly = await prisma.pitchDeck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PitchDeckFindManyArgs>(args?: SelectSubset<T, PitchDeckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PitchDeck.
     * @param {PitchDeckCreateArgs} args - Arguments to create a PitchDeck.
     * @example
     * // Create one PitchDeck
     * const PitchDeck = await prisma.pitchDeck.create({
     *   data: {
     *     // ... data to create a PitchDeck
     *   }
     * })
     * 
     */
    create<T extends PitchDeckCreateArgs>(args: SelectSubset<T, PitchDeckCreateArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PitchDecks.
     * @param {PitchDeckCreateManyArgs} args - Arguments to create many PitchDecks.
     * @example
     * // Create many PitchDecks
     * const pitchDeck = await prisma.pitchDeck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PitchDeckCreateManyArgs>(args?: SelectSubset<T, PitchDeckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PitchDecks and returns the data saved in the database.
     * @param {PitchDeckCreateManyAndReturnArgs} args - Arguments to create many PitchDecks.
     * @example
     * // Create many PitchDecks
     * const pitchDeck = await prisma.pitchDeck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PitchDecks and only return the `id`
     * const pitchDeckWithIdOnly = await prisma.pitchDeck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PitchDeckCreateManyAndReturnArgs>(args?: SelectSubset<T, PitchDeckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PitchDeck.
     * @param {PitchDeckDeleteArgs} args - Arguments to delete one PitchDeck.
     * @example
     * // Delete one PitchDeck
     * const PitchDeck = await prisma.pitchDeck.delete({
     *   where: {
     *     // ... filter to delete one PitchDeck
     *   }
     * })
     * 
     */
    delete<T extends PitchDeckDeleteArgs>(args: SelectSubset<T, PitchDeckDeleteArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PitchDeck.
     * @param {PitchDeckUpdateArgs} args - Arguments to update one PitchDeck.
     * @example
     * // Update one PitchDeck
     * const pitchDeck = await prisma.pitchDeck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PitchDeckUpdateArgs>(args: SelectSubset<T, PitchDeckUpdateArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PitchDecks.
     * @param {PitchDeckDeleteManyArgs} args - Arguments to filter PitchDecks to delete.
     * @example
     * // Delete a few PitchDecks
     * const { count } = await prisma.pitchDeck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PitchDeckDeleteManyArgs>(args?: SelectSubset<T, PitchDeckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PitchDecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDeckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PitchDecks
     * const pitchDeck = await prisma.pitchDeck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PitchDeckUpdateManyArgs>(args: SelectSubset<T, PitchDeckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PitchDecks and returns the data updated in the database.
     * @param {PitchDeckUpdateManyAndReturnArgs} args - Arguments to update many PitchDecks.
     * @example
     * // Update many PitchDecks
     * const pitchDeck = await prisma.pitchDeck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PitchDecks and only return the `id`
     * const pitchDeckWithIdOnly = await prisma.pitchDeck.updateManyAndReturn({
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
    updateManyAndReturn<T extends PitchDeckUpdateManyAndReturnArgs>(args: SelectSubset<T, PitchDeckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PitchDeck.
     * @param {PitchDeckUpsertArgs} args - Arguments to update or create a PitchDeck.
     * @example
     * // Update or create a PitchDeck
     * const pitchDeck = await prisma.pitchDeck.upsert({
     *   create: {
     *     // ... data to create a PitchDeck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PitchDeck we want to update
     *   }
     * })
     */
    upsert<T extends PitchDeckUpsertArgs>(args: SelectSubset<T, PitchDeckUpsertArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PitchDecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDeckCountArgs} args - Arguments to filter PitchDecks to count.
     * @example
     * // Count the number of PitchDecks
     * const count = await prisma.pitchDeck.count({
     *   where: {
     *     // ... the filter for the PitchDecks we want to count
     *   }
     * })
    **/
    count<T extends PitchDeckCountArgs>(
      args?: Subset<T, PitchDeckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PitchDeckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PitchDeck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDeckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PitchDeckAggregateArgs>(args: Subset<T, PitchDeckAggregateArgs>): Prisma.PrismaPromise<GetPitchDeckAggregateType<T>>

    /**
     * Group by PitchDeck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDeckGroupByArgs} args - Group by arguments.
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
      T extends PitchDeckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PitchDeckGroupByArgs['orderBy'] }
        : { orderBy?: PitchDeckGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PitchDeckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPitchDeckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PitchDeck model
   */
  readonly fields: PitchDeckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PitchDeck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PitchDeckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    startup<T extends StartupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StartupDefaultArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feedback<T extends PitchDeck$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, PitchDeck$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analytics<T extends PitchDeck$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, PitchDeck$analyticsArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PitchDeck model
   */
  interface PitchDeckFieldRefs {
    readonly id: FieldRef<"PitchDeck", 'String'>
    readonly startupId: FieldRef<"PitchDeck", 'String'>
    readonly currentVersion: FieldRef<"PitchDeck", 'Int'>
    readonly content: FieldRef<"PitchDeck", 'Json'>
    readonly createdAt: FieldRef<"PitchDeck", 'DateTime'>
    readonly updatedAt: FieldRef<"PitchDeck", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PitchDeck findUnique
   */
  export type PitchDeckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
    /**
     * Filter, which PitchDeck to fetch.
     */
    where: PitchDeckWhereUniqueInput
  }

  /**
   * PitchDeck findUniqueOrThrow
   */
  export type PitchDeckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
    /**
     * Filter, which PitchDeck to fetch.
     */
    where: PitchDeckWhereUniqueInput
  }

  /**
   * PitchDeck findFirst
   */
  export type PitchDeckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
    /**
     * Filter, which PitchDeck to fetch.
     */
    where?: PitchDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PitchDecks to fetch.
     */
    orderBy?: PitchDeckOrderByWithRelationInput | PitchDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PitchDecks.
     */
    cursor?: PitchDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PitchDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PitchDecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PitchDecks.
     */
    distinct?: PitchDeckScalarFieldEnum | PitchDeckScalarFieldEnum[]
  }

  /**
   * PitchDeck findFirstOrThrow
   */
  export type PitchDeckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
    /**
     * Filter, which PitchDeck to fetch.
     */
    where?: PitchDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PitchDecks to fetch.
     */
    orderBy?: PitchDeckOrderByWithRelationInput | PitchDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PitchDecks.
     */
    cursor?: PitchDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PitchDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PitchDecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PitchDecks.
     */
    distinct?: PitchDeckScalarFieldEnum | PitchDeckScalarFieldEnum[]
  }

  /**
   * PitchDeck findMany
   */
  export type PitchDeckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
    /**
     * Filter, which PitchDecks to fetch.
     */
    where?: PitchDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PitchDecks to fetch.
     */
    orderBy?: PitchDeckOrderByWithRelationInput | PitchDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PitchDecks.
     */
    cursor?: PitchDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PitchDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PitchDecks.
     */
    skip?: number
    distinct?: PitchDeckScalarFieldEnum | PitchDeckScalarFieldEnum[]
  }

  /**
   * PitchDeck create
   */
  export type PitchDeckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
    /**
     * The data needed to create a PitchDeck.
     */
    data: XOR<PitchDeckCreateInput, PitchDeckUncheckedCreateInput>
  }

  /**
   * PitchDeck createMany
   */
  export type PitchDeckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PitchDecks.
     */
    data: PitchDeckCreateManyInput | PitchDeckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PitchDeck createManyAndReturn
   */
  export type PitchDeckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * The data used to create many PitchDecks.
     */
    data: PitchDeckCreateManyInput | PitchDeckCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PitchDeck update
   */
  export type PitchDeckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
    /**
     * The data needed to update a PitchDeck.
     */
    data: XOR<PitchDeckUpdateInput, PitchDeckUncheckedUpdateInput>
    /**
     * Choose, which PitchDeck to update.
     */
    where: PitchDeckWhereUniqueInput
  }

  /**
   * PitchDeck updateMany
   */
  export type PitchDeckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PitchDecks.
     */
    data: XOR<PitchDeckUpdateManyMutationInput, PitchDeckUncheckedUpdateManyInput>
    /**
     * Filter which PitchDecks to update
     */
    where?: PitchDeckWhereInput
    /**
     * Limit how many PitchDecks to update.
     */
    limit?: number
  }

  /**
   * PitchDeck updateManyAndReturn
   */
  export type PitchDeckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * The data used to update PitchDecks.
     */
    data: XOR<PitchDeckUpdateManyMutationInput, PitchDeckUncheckedUpdateManyInput>
    /**
     * Filter which PitchDecks to update
     */
    where?: PitchDeckWhereInput
    /**
     * Limit how many PitchDecks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PitchDeck upsert
   */
  export type PitchDeckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
    /**
     * The filter to search for the PitchDeck to update in case it exists.
     */
    where: PitchDeckWhereUniqueInput
    /**
     * In case the PitchDeck found by the `where` argument doesn't exist, create a new PitchDeck with this data.
     */
    create: XOR<PitchDeckCreateInput, PitchDeckUncheckedCreateInput>
    /**
     * In case the PitchDeck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PitchDeckUpdateInput, PitchDeckUncheckedUpdateInput>
  }

  /**
   * PitchDeck delete
   */
  export type PitchDeckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
    /**
     * Filter which PitchDeck to delete.
     */
    where: PitchDeckWhereUniqueInput
  }

  /**
   * PitchDeck deleteMany
   */
  export type PitchDeckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PitchDecks to delete
     */
    where?: PitchDeckWhereInput
    /**
     * Limit how many PitchDecks to delete.
     */
    limit?: number
  }

  /**
   * PitchDeck.feedback
   */
  export type PitchDeck$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * PitchDeck.analytics
   */
  export type PitchDeck$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    where?: AnalyticsWhereInput
  }

  /**
   * PitchDeck without action
   */
  export type PitchDeckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDeck
     */
    select?: PitchDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDeck
     */
    omit?: PitchDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDeckInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    pitchDeckId: string | null
    content: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    pitchDeckId: string | null
    content: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    pitchDeckId: number
    content: number
    rating: number
    createdAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    pitchDeckId?: true
    content?: true
    rating?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    pitchDeckId?: true
    content?: true
    rating?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    pitchDeckId?: true
    content?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    pitchDeckId: string
    content: string
    rating: number | null
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pitchDeckId?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pitchDeckId?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pitchDeckId?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    pitchDeckId?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pitchDeckId" | "content" | "rating" | "createdAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      pitchDeck: Prisma.$PitchDeckPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pitchDeckId: string
      content: string
      rating: number | null
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pitchDeck<T extends PitchDeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PitchDeckDefaultArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly pitchDeckId: FieldRef<"Feedback", 'String'>
    readonly content: FieldRef<"Feedback", 'String'>
    readonly rating: FieldRef<"Feedback", 'Int'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Analytics
   */

  export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  export type AnalyticsAvgAggregateOutputType = {
    views: number | null
    uniqueViews: number | null
    averageTime: number | null
  }

  export type AnalyticsSumAggregateOutputType = {
    views: number | null
    uniqueViews: number | null
    averageTime: number | null
  }

  export type AnalyticsMinAggregateOutputType = {
    id: string | null
    pitchDeckId: string | null
    views: number | null
    uniqueViews: number | null
    averageTime: number | null
    lastViewed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalyticsMaxAggregateOutputType = {
    id: string | null
    pitchDeckId: string | null
    views: number | null
    uniqueViews: number | null
    averageTime: number | null
    lastViewed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalyticsCountAggregateOutputType = {
    id: number
    pitchDeckId: number
    views: number
    uniqueViews: number
    averageTime: number
    lastViewed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnalyticsAvgAggregateInputType = {
    views?: true
    uniqueViews?: true
    averageTime?: true
  }

  export type AnalyticsSumAggregateInputType = {
    views?: true
    uniqueViews?: true
    averageTime?: true
  }

  export type AnalyticsMinAggregateInputType = {
    id?: true
    pitchDeckId?: true
    views?: true
    uniqueViews?: true
    averageTime?: true
    lastViewed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalyticsMaxAggregateInputType = {
    id?: true
    pitchDeckId?: true
    views?: true
    uniqueViews?: true
    averageTime?: true
    lastViewed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalyticsCountAggregateInputType = {
    id?: true
    pitchDeckId?: true
    views?: true
    uniqueViews?: true
    averageTime?: true
    lastViewed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analytics
    **/
    _count?: true | AnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMaxAggregateInputType
  }

  export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics[P]>
      : GetScalarType<T[P], AggregateAnalytics[P]>
  }




  export type AnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithAggregationInput | AnalyticsOrderByWithAggregationInput[]
    by: AnalyticsScalarFieldEnum[] | AnalyticsScalarFieldEnum
    having?: AnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsCountAggregateInputType | true
    _avg?: AnalyticsAvgAggregateInputType
    _sum?: AnalyticsSumAggregateInputType
    _min?: AnalyticsMinAggregateInputType
    _max?: AnalyticsMaxAggregateInputType
  }

  export type AnalyticsGroupByOutputType = {
    id: string
    pitchDeckId: string
    views: number
    uniqueViews: number
    averageTime: number
    lastViewed: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pitchDeckId?: boolean
    views?: boolean
    uniqueViews?: boolean
    averageTime?: boolean
    lastViewed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pitchDeckId?: boolean
    views?: boolean
    uniqueViews?: boolean
    averageTime?: boolean
    lastViewed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pitchDeckId?: boolean
    views?: boolean
    uniqueViews?: boolean
    averageTime?: boolean
    lastViewed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectScalar = {
    id?: boolean
    pitchDeckId?: boolean
    views?: boolean
    uniqueViews?: boolean
    averageTime?: boolean
    lastViewed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pitchDeckId" | "views" | "uniqueViews" | "averageTime" | "lastViewed" | "createdAt" | "updatedAt", ExtArgs["result"]["analytics"]>
  export type AnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }
  export type AnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }
  export type AnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitchDeck?: boolean | PitchDeckDefaultArgs<ExtArgs>
  }

  export type $AnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analytics"
    objects: {
      pitchDeck: Prisma.$PitchDeckPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pitchDeckId: string
      views: number
      uniqueViews: number
      averageTime: number
      lastViewed: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["analytics"]>
    composites: {}
  }

  type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsPayload, S>

  type AnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsCountAggregateInputType | true
    }

  export interface AnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analytics'], meta: { name: 'Analytics' } }
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsFindUniqueArgs>(args: SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsFindFirstArgs>(args?: SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     * 
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsWithIdOnly = await prisma.analytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsFindManyArgs>(args?: SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     * 
     */
    create<T extends AnalyticsCreateArgs>(args: SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analytics.
     * @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsCreateManyArgs>(args?: SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analytics and returns the data saved in the database.
     * @param {AnalyticsCreateManyAndReturnArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsDeleteArgs>(args: SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsUpdateArgs>(args: SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsUpdateManyArgs>(args: SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics and returns the data updated in the database.
     * @param {AnalyticsUpdateManyAndReturnArgs} args - Arguments to update many Analytics.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsUpsertArgs>(args: SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsCountArgs>(
      args?: Subset<T, AnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsAggregateArgs>(args: Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>

    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analytics model
   */
  readonly fields: AnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pitchDeck<T extends PitchDeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PitchDeckDefaultArgs<ExtArgs>>): Prisma__PitchDeckClient<$Result.GetResult<Prisma.$PitchDeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Analytics model
   */
  interface AnalyticsFieldRefs {
    readonly id: FieldRef<"Analytics", 'String'>
    readonly pitchDeckId: FieldRef<"Analytics", 'String'>
    readonly views: FieldRef<"Analytics", 'Int'>
    readonly uniqueViews: FieldRef<"Analytics", 'Int'>
    readonly averageTime: FieldRef<"Analytics", 'Float'>
    readonly lastViewed: FieldRef<"Analytics", 'DateTime'>
    readonly createdAt: FieldRef<"Analytics", 'DateTime'>
    readonly updatedAt: FieldRef<"Analytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analytics findUnique
   */
  export type AnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findUniqueOrThrow
   */
  export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findFirst
   */
  export type AnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findFirstOrThrow
   */
  export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findMany
   */
  export type AnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics create
   */
  export type AnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a Analytics.
     */
    data: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
  }

  /**
   * Analytics createMany
   */
  export type AnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics createManyAndReturn
   */
  export type AnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analytics update
   */
  export type AnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a Analytics.
     */
    data: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
    /**
     * Choose, which Analytics to update.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics updateMany
   */
  export type AnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
  }

  /**
   * Analytics updateManyAndReturn
   */
  export type AnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analytics upsert
   */
  export type AnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: AnalyticsWhereUniqueInput
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
  }

  /**
   * Analytics delete
   */
  export type AnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter which Analytics to delete.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics deleteMany
   */
  export type AnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to delete
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to delete.
     */
    limit?: number
  }

  /**
   * Analytics without action
   */
  export type AnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    score: number | null
  }

  export type MatchSumAggregateOutputType = {
    score: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    startupId: string | null
    investorId: string | null
    score: number | null
    status: $Enums.MatchStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    startupId: string | null
    investorId: string | null
    score: number | null
    status: $Enums.MatchStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    startupId: number
    investorId: number
    score: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    score?: true
  }

  export type MatchSumAggregateInputType = {
    score?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    startupId?: true
    investorId?: true
    score?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    startupId?: true
    investorId?: true
    score?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    startupId?: true
    investorId?: true
    score?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    startupId: string
    investorId: string
    score: number
    status: $Enums.MatchStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupId?: boolean
    investorId?: boolean
    score?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
    investor?: boolean | InvestorDefaultArgs<ExtArgs>
    communications?: boolean | Match$communicationsArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupId?: boolean
    investorId?: boolean
    score?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
    investor?: boolean | InvestorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupId?: boolean
    investorId?: boolean
    score?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
    investor?: boolean | InvestorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    startupId?: boolean
    investorId?: boolean
    score?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startupId" | "investorId" | "score" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
    investor?: boolean | InvestorDefaultArgs<ExtArgs>
    communications?: boolean | Match$communicationsArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
    investor?: boolean | InvestorDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
    investor?: boolean | InvestorDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      startup: Prisma.$StartupPayload<ExtArgs>
      investor: Prisma.$InvestorPayload<ExtArgs>
      communications: Prisma.$CommunicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startupId: string
      investorId: string
      score: number
      status: $Enums.MatchStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    startup<T extends StartupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StartupDefaultArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    investor<T extends InvestorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvestorDefaultArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    communications<T extends Match$communicationsArgs<ExtArgs> = {}>(args?: Subset<T, Match$communicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly startupId: FieldRef<"Match", 'String'>
    readonly investorId: FieldRef<"Match", 'String'>
    readonly score: FieldRef<"Match", 'Float'>
    readonly status: FieldRef<"Match", 'MatchStatus'>
    readonly notes: FieldRef<"Match", 'String'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly updatedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.communications
   */
  export type Match$communicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    where?: CommunicationWhereInput
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    cursor?: CommunicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Communication
   */

  export type AggregateCommunication = {
    _count: CommunicationCountAggregateOutputType | null
    _min: CommunicationMinAggregateOutputType | null
    _max: CommunicationMaxAggregateOutputType | null
  }

  export type CommunicationMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    type: $Enums.CommunicationType | null
    content: string | null
    createdAt: Date | null
  }

  export type CommunicationMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    type: $Enums.CommunicationType | null
    content: string | null
    createdAt: Date | null
  }

  export type CommunicationCountAggregateOutputType = {
    id: number
    matchId: number
    type: number
    content: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type CommunicationMinAggregateInputType = {
    id?: true
    matchId?: true
    type?: true
    content?: true
    createdAt?: true
  }

  export type CommunicationMaxAggregateInputType = {
    id?: true
    matchId?: true
    type?: true
    content?: true
    createdAt?: true
  }

  export type CommunicationCountAggregateInputType = {
    id?: true
    matchId?: true
    type?: true
    content?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type CommunicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communication to aggregate.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communications
    **/
    _count?: true | CommunicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunicationMaxAggregateInputType
  }

  export type GetCommunicationAggregateType<T extends CommunicationAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunication[P]>
      : GetScalarType<T[P], AggregateCommunication[P]>
  }




  export type CommunicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationWhereInput
    orderBy?: CommunicationOrderByWithAggregationInput | CommunicationOrderByWithAggregationInput[]
    by: CommunicationScalarFieldEnum[] | CommunicationScalarFieldEnum
    having?: CommunicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunicationCountAggregateInputType | true
    _min?: CommunicationMinAggregateInputType
    _max?: CommunicationMaxAggregateInputType
  }

  export type CommunicationGroupByOutputType = {
    id: string
    matchId: string
    type: $Enums.CommunicationType
    content: string
    metadata: JsonValue | null
    createdAt: Date
    _count: CommunicationCountAggregateOutputType | null
    _min: CommunicationMinAggregateOutputType | null
    _max: CommunicationMaxAggregateOutputType | null
  }

  type GetCommunicationGroupByPayload<T extends CommunicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunicationGroupByOutputType[P]>
            : GetScalarType<T[P], CommunicationGroupByOutputType[P]>
        }
      >
    >


  export type CommunicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    type?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communication"]>

  export type CommunicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    type?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communication"]>

  export type CommunicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    type?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communication"]>

  export type CommunicationSelectScalar = {
    id?: boolean
    matchId?: boolean
    type?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type CommunicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "type" | "content" | "metadata" | "createdAt", ExtArgs["result"]["communication"]>
  export type CommunicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }
  export type CommunicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }
  export type CommunicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }

  export type $CommunicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Communication"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      type: $Enums.CommunicationType
      content: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["communication"]>
    composites: {}
  }

  type CommunicationGetPayload<S extends boolean | null | undefined | CommunicationDefaultArgs> = $Result.GetResult<Prisma.$CommunicationPayload, S>

  type CommunicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunicationCountAggregateInputType | true
    }

  export interface CommunicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Communication'], meta: { name: 'Communication' } }
    /**
     * Find zero or one Communication that matches the filter.
     * @param {CommunicationFindUniqueArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunicationFindUniqueArgs>(args: SelectSubset<T, CommunicationFindUniqueArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Communication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunicationFindUniqueOrThrowArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunicationFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Communication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationFindFirstArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunicationFindFirstArgs>(args?: SelectSubset<T, CommunicationFindFirstArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Communication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationFindFirstOrThrowArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunicationFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communications
     * const communications = await prisma.communication.findMany()
     * 
     * // Get first 10 Communications
     * const communications = await prisma.communication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communicationWithIdOnly = await prisma.communication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunicationFindManyArgs>(args?: SelectSubset<T, CommunicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Communication.
     * @param {CommunicationCreateArgs} args - Arguments to create a Communication.
     * @example
     * // Create one Communication
     * const Communication = await prisma.communication.create({
     *   data: {
     *     // ... data to create a Communication
     *   }
     * })
     * 
     */
    create<T extends CommunicationCreateArgs>(args: SelectSubset<T, CommunicationCreateArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communications.
     * @param {CommunicationCreateManyArgs} args - Arguments to create many Communications.
     * @example
     * // Create many Communications
     * const communication = await prisma.communication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunicationCreateManyArgs>(args?: SelectSubset<T, CommunicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communications and returns the data saved in the database.
     * @param {CommunicationCreateManyAndReturnArgs} args - Arguments to create many Communications.
     * @example
     * // Create many Communications
     * const communication = await prisma.communication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communications and only return the `id`
     * const communicationWithIdOnly = await prisma.communication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunicationCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Communication.
     * @param {CommunicationDeleteArgs} args - Arguments to delete one Communication.
     * @example
     * // Delete one Communication
     * const Communication = await prisma.communication.delete({
     *   where: {
     *     // ... filter to delete one Communication
     *   }
     * })
     * 
     */
    delete<T extends CommunicationDeleteArgs>(args: SelectSubset<T, CommunicationDeleteArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Communication.
     * @param {CommunicationUpdateArgs} args - Arguments to update one Communication.
     * @example
     * // Update one Communication
     * const communication = await prisma.communication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunicationUpdateArgs>(args: SelectSubset<T, CommunicationUpdateArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communications.
     * @param {CommunicationDeleteManyArgs} args - Arguments to filter Communications to delete.
     * @example
     * // Delete a few Communications
     * const { count } = await prisma.communication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunicationDeleteManyArgs>(args?: SelectSubset<T, CommunicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communications
     * const communication = await prisma.communication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunicationUpdateManyArgs>(args: SelectSubset<T, CommunicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communications and returns the data updated in the database.
     * @param {CommunicationUpdateManyAndReturnArgs} args - Arguments to update many Communications.
     * @example
     * // Update many Communications
     * const communication = await prisma.communication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communications and only return the `id`
     * const communicationWithIdOnly = await prisma.communication.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunicationUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Communication.
     * @param {CommunicationUpsertArgs} args - Arguments to update or create a Communication.
     * @example
     * // Update or create a Communication
     * const communication = await prisma.communication.upsert({
     *   create: {
     *     // ... data to create a Communication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Communication we want to update
     *   }
     * })
     */
    upsert<T extends CommunicationUpsertArgs>(args: SelectSubset<T, CommunicationUpsertArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationCountArgs} args - Arguments to filter Communications to count.
     * @example
     * // Count the number of Communications
     * const count = await prisma.communication.count({
     *   where: {
     *     // ... the filter for the Communications we want to count
     *   }
     * })
    **/
    count<T extends CommunicationCountArgs>(
      args?: Subset<T, CommunicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Communication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunicationAggregateArgs>(args: Subset<T, CommunicationAggregateArgs>): Prisma.PrismaPromise<GetCommunicationAggregateType<T>>

    /**
     * Group by Communication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationGroupByArgs} args - Group by arguments.
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
      T extends CommunicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunicationGroupByArgs['orderBy'] }
        : { orderBy?: CommunicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Communication model
   */
  readonly fields: CommunicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Communication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Communication model
   */
  interface CommunicationFieldRefs {
    readonly id: FieldRef<"Communication", 'String'>
    readonly matchId: FieldRef<"Communication", 'String'>
    readonly type: FieldRef<"Communication", 'CommunicationType'>
    readonly content: FieldRef<"Communication", 'String'>
    readonly metadata: FieldRef<"Communication", 'Json'>
    readonly createdAt: FieldRef<"Communication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Communication findUnique
   */
  export type CommunicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication findUniqueOrThrow
   */
  export type CommunicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication findFirst
   */
  export type CommunicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communications.
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communications.
     */
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Communication findFirstOrThrow
   */
  export type CommunicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communications.
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communications.
     */
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Communication findMany
   */
  export type CommunicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communications to fetch.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communications.
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Communication create
   */
  export type CommunicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Communication.
     */
    data: XOR<CommunicationCreateInput, CommunicationUncheckedCreateInput>
  }

  /**
   * Communication createMany
   */
  export type CommunicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communications.
     */
    data: CommunicationCreateManyInput | CommunicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Communication createManyAndReturn
   */
  export type CommunicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * The data used to create many Communications.
     */
    data: CommunicationCreateManyInput | CommunicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Communication update
   */
  export type CommunicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Communication.
     */
    data: XOR<CommunicationUpdateInput, CommunicationUncheckedUpdateInput>
    /**
     * Choose, which Communication to update.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication updateMany
   */
  export type CommunicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communications.
     */
    data: XOR<CommunicationUpdateManyMutationInput, CommunicationUncheckedUpdateManyInput>
    /**
     * Filter which Communications to update
     */
    where?: CommunicationWhereInput
    /**
     * Limit how many Communications to update.
     */
    limit?: number
  }

  /**
   * Communication updateManyAndReturn
   */
  export type CommunicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * The data used to update Communications.
     */
    data: XOR<CommunicationUpdateManyMutationInput, CommunicationUncheckedUpdateManyInput>
    /**
     * Filter which Communications to update
     */
    where?: CommunicationWhereInput
    /**
     * Limit how many Communications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Communication upsert
   */
  export type CommunicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Communication to update in case it exists.
     */
    where: CommunicationWhereUniqueInput
    /**
     * In case the Communication found by the `where` argument doesn't exist, create a new Communication with this data.
     */
    create: XOR<CommunicationCreateInput, CommunicationUncheckedCreateInput>
    /**
     * In case the Communication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunicationUpdateInput, CommunicationUncheckedUpdateInput>
  }

  /**
   * Communication delete
   */
  export type CommunicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter which Communication to delete.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication deleteMany
   */
  export type CommunicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communications to delete
     */
    where?: CommunicationWhereInput
    /**
     * Limit how many Communications to delete.
     */
    limit?: number
  }

  /**
   * Communication without action
   */
  export type CommunicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
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
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StartupScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    description: 'description',
    industry: 'industry',
    stage: 'stage',
    location: 'location',
    foundedDate: 'foundedDate',
    teamSize: 'teamSize',
    valuation: 'valuation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    financialMetrics: 'financialMetrics'
  };

  export type StartupScalarFieldEnum = (typeof StartupScalarFieldEnum)[keyof typeof StartupScalarFieldEnum]


  export const InvestorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firmName: 'firmName',
    description: 'description',
    investmentFocus: 'investmentFocus',
    stagePreference: 'stagePreference',
    checkSize: 'checkSize',
    location: 'location',
    portfolioSize: 'portfolioSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvestorScalarFieldEnum = (typeof InvestorScalarFieldEnum)[keyof typeof InvestorScalarFieldEnum]


  export const PitchDeckScalarFieldEnum: {
    id: 'id',
    startupId: 'startupId',
    currentVersion: 'currentVersion',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PitchDeckScalarFieldEnum = (typeof PitchDeckScalarFieldEnum)[keyof typeof PitchDeckScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    pitchDeckId: 'pitchDeckId',
    content: 'content',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const AnalyticsScalarFieldEnum: {
    id: 'id',
    pitchDeckId: 'pitchDeckId',
    views: 'views',
    uniqueViews: 'uniqueViews',
    averageTime: 'averageTime',
    lastViewed: 'lastViewed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    startupId: 'startupId',
    investorId: 'investorId',
    score: 'score',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const CommunicationScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    type: 'type',
    content: 'content',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type CommunicationScalarFieldEnum = (typeof CommunicationScalarFieldEnum)[keyof typeof CommunicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'MatchStatus[]'
   */
  export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>
    


  /**
   * Reference to a field of type 'CommunicationType'
   */
  export type EnumCommunicationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunicationType'>
    


  /**
   * Reference to a field of type 'CommunicationType[]'
   */
  export type ListEnumCommunicationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunicationType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    startup?: XOR<StartupNullableScalarRelationFilter, StartupWhereInput> | null
    investor?: XOR<InvestorNullableScalarRelationFilter, InvestorWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    startup?: StartupOrderByWithRelationInput
    investor?: InvestorOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    startup?: XOR<StartupNullableScalarRelationFilter, StartupWhereInput> | null
    investor?: XOR<InvestorNullableScalarRelationFilter, InvestorWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type StartupWhereInput = {
    AND?: StartupWhereInput | StartupWhereInput[]
    OR?: StartupWhereInput[]
    NOT?: StartupWhereInput | StartupWhereInput[]
    id?: StringFilter<"Startup"> | string
    userId?: StringFilter<"Startup"> | string
    companyName?: StringFilter<"Startup"> | string
    description?: StringNullableFilter<"Startup"> | string | null
    industry?: StringFilter<"Startup"> | string
    stage?: StringFilter<"Startup"> | string
    location?: StringFilter<"Startup"> | string
    foundedDate?: DateTimeNullableFilter<"Startup"> | Date | string | null
    teamSize?: IntNullableFilter<"Startup"> | number | null
    valuation?: FloatNullableFilter<"Startup"> | number | null
    createdAt?: DateTimeFilter<"Startup"> | Date | string
    updatedAt?: DateTimeFilter<"Startup"> | Date | string
    financialMetrics?: JsonNullableFilter<"Startup">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pitchDeck?: XOR<PitchDeckNullableScalarRelationFilter, PitchDeckWhereInput> | null
    matches?: MatchListRelationFilter
  }

  export type StartupOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrderInput | SortOrder
    industry?: SortOrder
    stage?: SortOrder
    location?: SortOrder
    foundedDate?: SortOrderInput | SortOrder
    teamSize?: SortOrderInput | SortOrder
    valuation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    financialMetrics?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    pitchDeck?: PitchDeckOrderByWithRelationInput
    matches?: MatchOrderByRelationAggregateInput
  }

  export type StartupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StartupWhereInput | StartupWhereInput[]
    OR?: StartupWhereInput[]
    NOT?: StartupWhereInput | StartupWhereInput[]
    companyName?: StringFilter<"Startup"> | string
    description?: StringNullableFilter<"Startup"> | string | null
    industry?: StringFilter<"Startup"> | string
    stage?: StringFilter<"Startup"> | string
    location?: StringFilter<"Startup"> | string
    foundedDate?: DateTimeNullableFilter<"Startup"> | Date | string | null
    teamSize?: IntNullableFilter<"Startup"> | number | null
    valuation?: FloatNullableFilter<"Startup"> | number | null
    createdAt?: DateTimeFilter<"Startup"> | Date | string
    updatedAt?: DateTimeFilter<"Startup"> | Date | string
    financialMetrics?: JsonNullableFilter<"Startup">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pitchDeck?: XOR<PitchDeckNullableScalarRelationFilter, PitchDeckWhereInput> | null
    matches?: MatchListRelationFilter
  }, "id" | "userId">

  export type StartupOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrderInput | SortOrder
    industry?: SortOrder
    stage?: SortOrder
    location?: SortOrder
    foundedDate?: SortOrderInput | SortOrder
    teamSize?: SortOrderInput | SortOrder
    valuation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    financialMetrics?: SortOrderInput | SortOrder
    _count?: StartupCountOrderByAggregateInput
    _avg?: StartupAvgOrderByAggregateInput
    _max?: StartupMaxOrderByAggregateInput
    _min?: StartupMinOrderByAggregateInput
    _sum?: StartupSumOrderByAggregateInput
  }

  export type StartupScalarWhereWithAggregatesInput = {
    AND?: StartupScalarWhereWithAggregatesInput | StartupScalarWhereWithAggregatesInput[]
    OR?: StartupScalarWhereWithAggregatesInput[]
    NOT?: StartupScalarWhereWithAggregatesInput | StartupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Startup"> | string
    userId?: StringWithAggregatesFilter<"Startup"> | string
    companyName?: StringWithAggregatesFilter<"Startup"> | string
    description?: StringNullableWithAggregatesFilter<"Startup"> | string | null
    industry?: StringWithAggregatesFilter<"Startup"> | string
    stage?: StringWithAggregatesFilter<"Startup"> | string
    location?: StringWithAggregatesFilter<"Startup"> | string
    foundedDate?: DateTimeNullableWithAggregatesFilter<"Startup"> | Date | string | null
    teamSize?: IntNullableWithAggregatesFilter<"Startup"> | number | null
    valuation?: FloatNullableWithAggregatesFilter<"Startup"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Startup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Startup"> | Date | string
    financialMetrics?: JsonNullableWithAggregatesFilter<"Startup">
  }

  export type InvestorWhereInput = {
    AND?: InvestorWhereInput | InvestorWhereInput[]
    OR?: InvestorWhereInput[]
    NOT?: InvestorWhereInput | InvestorWhereInput[]
    id?: StringFilter<"Investor"> | string
    userId?: StringFilter<"Investor"> | string
    firmName?: StringFilter<"Investor"> | string
    description?: StringNullableFilter<"Investor"> | string | null
    investmentFocus?: StringNullableListFilter<"Investor">
    stagePreference?: StringNullableListFilter<"Investor">
    checkSize?: JsonFilter<"Investor">
    location?: StringFilter<"Investor"> | string
    portfolioSize?: IntNullableFilter<"Investor"> | number | null
    createdAt?: DateTimeFilter<"Investor"> | Date | string
    updatedAt?: DateTimeFilter<"Investor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matches?: MatchListRelationFilter
  }

  export type InvestorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firmName?: SortOrder
    description?: SortOrderInput | SortOrder
    investmentFocus?: SortOrder
    stagePreference?: SortOrder
    checkSize?: SortOrder
    location?: SortOrder
    portfolioSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    matches?: MatchOrderByRelationAggregateInput
  }

  export type InvestorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: InvestorWhereInput | InvestorWhereInput[]
    OR?: InvestorWhereInput[]
    NOT?: InvestorWhereInput | InvestorWhereInput[]
    firmName?: StringFilter<"Investor"> | string
    description?: StringNullableFilter<"Investor"> | string | null
    investmentFocus?: StringNullableListFilter<"Investor">
    stagePreference?: StringNullableListFilter<"Investor">
    checkSize?: JsonFilter<"Investor">
    location?: StringFilter<"Investor"> | string
    portfolioSize?: IntNullableFilter<"Investor"> | number | null
    createdAt?: DateTimeFilter<"Investor"> | Date | string
    updatedAt?: DateTimeFilter<"Investor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matches?: MatchListRelationFilter
  }, "id" | "userId">

  export type InvestorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firmName?: SortOrder
    description?: SortOrderInput | SortOrder
    investmentFocus?: SortOrder
    stagePreference?: SortOrder
    checkSize?: SortOrder
    location?: SortOrder
    portfolioSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvestorCountOrderByAggregateInput
    _avg?: InvestorAvgOrderByAggregateInput
    _max?: InvestorMaxOrderByAggregateInput
    _min?: InvestorMinOrderByAggregateInput
    _sum?: InvestorSumOrderByAggregateInput
  }

  export type InvestorScalarWhereWithAggregatesInput = {
    AND?: InvestorScalarWhereWithAggregatesInput | InvestorScalarWhereWithAggregatesInput[]
    OR?: InvestorScalarWhereWithAggregatesInput[]
    NOT?: InvestorScalarWhereWithAggregatesInput | InvestorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investor"> | string
    userId?: StringWithAggregatesFilter<"Investor"> | string
    firmName?: StringWithAggregatesFilter<"Investor"> | string
    description?: StringNullableWithAggregatesFilter<"Investor"> | string | null
    investmentFocus?: StringNullableListFilter<"Investor">
    stagePreference?: StringNullableListFilter<"Investor">
    checkSize?: JsonWithAggregatesFilter<"Investor">
    location?: StringWithAggregatesFilter<"Investor"> | string
    portfolioSize?: IntNullableWithAggregatesFilter<"Investor"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Investor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Investor"> | Date | string
  }

  export type PitchDeckWhereInput = {
    AND?: PitchDeckWhereInput | PitchDeckWhereInput[]
    OR?: PitchDeckWhereInput[]
    NOT?: PitchDeckWhereInput | PitchDeckWhereInput[]
    id?: StringFilter<"PitchDeck"> | string
    startupId?: StringFilter<"PitchDeck"> | string
    currentVersion?: IntFilter<"PitchDeck"> | number
    content?: JsonFilter<"PitchDeck">
    createdAt?: DateTimeFilter<"PitchDeck"> | Date | string
    updatedAt?: DateTimeFilter<"PitchDeck"> | Date | string
    startup?: XOR<StartupScalarRelationFilter, StartupWhereInput>
    feedback?: FeedbackListRelationFilter
    analytics?: XOR<AnalyticsNullableScalarRelationFilter, AnalyticsWhereInput> | null
  }

  export type PitchDeckOrderByWithRelationInput = {
    id?: SortOrder
    startupId?: SortOrder
    currentVersion?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startup?: StartupOrderByWithRelationInput
    feedback?: FeedbackOrderByRelationAggregateInput
    analytics?: AnalyticsOrderByWithRelationInput
  }

  export type PitchDeckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    startupId?: string
    AND?: PitchDeckWhereInput | PitchDeckWhereInput[]
    OR?: PitchDeckWhereInput[]
    NOT?: PitchDeckWhereInput | PitchDeckWhereInput[]
    currentVersion?: IntFilter<"PitchDeck"> | number
    content?: JsonFilter<"PitchDeck">
    createdAt?: DateTimeFilter<"PitchDeck"> | Date | string
    updatedAt?: DateTimeFilter<"PitchDeck"> | Date | string
    startup?: XOR<StartupScalarRelationFilter, StartupWhereInput>
    feedback?: FeedbackListRelationFilter
    analytics?: XOR<AnalyticsNullableScalarRelationFilter, AnalyticsWhereInput> | null
  }, "id" | "startupId">

  export type PitchDeckOrderByWithAggregationInput = {
    id?: SortOrder
    startupId?: SortOrder
    currentVersion?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PitchDeckCountOrderByAggregateInput
    _avg?: PitchDeckAvgOrderByAggregateInput
    _max?: PitchDeckMaxOrderByAggregateInput
    _min?: PitchDeckMinOrderByAggregateInput
    _sum?: PitchDeckSumOrderByAggregateInput
  }

  export type PitchDeckScalarWhereWithAggregatesInput = {
    AND?: PitchDeckScalarWhereWithAggregatesInput | PitchDeckScalarWhereWithAggregatesInput[]
    OR?: PitchDeckScalarWhereWithAggregatesInput[]
    NOT?: PitchDeckScalarWhereWithAggregatesInput | PitchDeckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PitchDeck"> | string
    startupId?: StringWithAggregatesFilter<"PitchDeck"> | string
    currentVersion?: IntWithAggregatesFilter<"PitchDeck"> | number
    content?: JsonWithAggregatesFilter<"PitchDeck">
    createdAt?: DateTimeWithAggregatesFilter<"PitchDeck"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PitchDeck"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    pitchDeckId?: StringFilter<"Feedback"> | string
    content?: StringFilter<"Feedback"> | string
    rating?: IntNullableFilter<"Feedback"> | number | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    pitchDeck?: XOR<PitchDeckScalarRelationFilter, PitchDeckWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    pitchDeckId?: SortOrder
    content?: SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pitchDeck?: PitchDeckOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    pitchDeckId?: StringFilter<"Feedback"> | string
    content?: StringFilter<"Feedback"> | string
    rating?: IntNullableFilter<"Feedback"> | number | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    pitchDeck?: XOR<PitchDeckScalarRelationFilter, PitchDeckWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    pitchDeckId?: SortOrder
    content?: SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    pitchDeckId?: StringWithAggregatesFilter<"Feedback"> | string
    content?: StringWithAggregatesFilter<"Feedback"> | string
    rating?: IntNullableWithAggregatesFilter<"Feedback"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    id?: StringFilter<"Analytics"> | string
    pitchDeckId?: StringFilter<"Analytics"> | string
    views?: IntFilter<"Analytics"> | number
    uniqueViews?: IntFilter<"Analytics"> | number
    averageTime?: FloatFilter<"Analytics"> | number
    lastViewed?: DateTimeNullableFilter<"Analytics"> | Date | string | null
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    updatedAt?: DateTimeFilter<"Analytics"> | Date | string
    pitchDeck?: XOR<PitchDeckScalarRelationFilter, PitchDeckWhereInput>
  }

  export type AnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    pitchDeckId?: SortOrder
    views?: SortOrder
    uniqueViews?: SortOrder
    averageTime?: SortOrder
    lastViewed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pitchDeck?: PitchDeckOrderByWithRelationInput
  }

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pitchDeckId?: string
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    views?: IntFilter<"Analytics"> | number
    uniqueViews?: IntFilter<"Analytics"> | number
    averageTime?: FloatFilter<"Analytics"> | number
    lastViewed?: DateTimeNullableFilter<"Analytics"> | Date | string | null
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    updatedAt?: DateTimeFilter<"Analytics"> | Date | string
    pitchDeck?: XOR<PitchDeckScalarRelationFilter, PitchDeckWhereInput>
  }, "id" | "pitchDeckId">

  export type AnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    pitchDeckId?: SortOrder
    views?: SortOrder
    uniqueViews?: SortOrder
    averageTime?: SortOrder
    lastViewed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnalyticsCountOrderByAggregateInput
    _avg?: AnalyticsAvgOrderByAggregateInput
    _max?: AnalyticsMaxOrderByAggregateInput
    _min?: AnalyticsMinOrderByAggregateInput
    _sum?: AnalyticsSumOrderByAggregateInput
  }

  export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    OR?: AnalyticsScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analytics"> | string
    pitchDeckId?: StringWithAggregatesFilter<"Analytics"> | string
    views?: IntWithAggregatesFilter<"Analytics"> | number
    uniqueViews?: IntWithAggregatesFilter<"Analytics"> | number
    averageTime?: FloatWithAggregatesFilter<"Analytics"> | number
    lastViewed?: DateTimeNullableWithAggregatesFilter<"Analytics"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    startupId?: StringFilter<"Match"> | string
    investorId?: StringFilter<"Match"> | string
    score?: FloatFilter<"Match"> | number
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    notes?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    startup?: XOR<StartupScalarRelationFilter, StartupWhereInput>
    investor?: XOR<InvestorScalarRelationFilter, InvestorWhereInput>
    communications?: CommunicationListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    startupId?: SortOrder
    investorId?: SortOrder
    score?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startup?: StartupOrderByWithRelationInput
    investor?: InvestorOrderByWithRelationInput
    communications?: CommunicationOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    startupId_investorId?: MatchStartupIdInvestorIdCompoundUniqueInput
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    startupId?: StringFilter<"Match"> | string
    investorId?: StringFilter<"Match"> | string
    score?: FloatFilter<"Match"> | number
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    notes?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    startup?: XOR<StartupScalarRelationFilter, StartupWhereInput>
    investor?: XOR<InvestorScalarRelationFilter, InvestorWhereInput>
    communications?: CommunicationListRelationFilter
  }, "id" | "startupId_investorId">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    startupId?: SortOrder
    investorId?: SortOrder
    score?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    startupId?: StringWithAggregatesFilter<"Match"> | string
    investorId?: StringWithAggregatesFilter<"Match"> | string
    score?: FloatWithAggregatesFilter<"Match"> | number
    status?: EnumMatchStatusWithAggregatesFilter<"Match"> | $Enums.MatchStatus
    notes?: StringNullableWithAggregatesFilter<"Match"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type CommunicationWhereInput = {
    AND?: CommunicationWhereInput | CommunicationWhereInput[]
    OR?: CommunicationWhereInput[]
    NOT?: CommunicationWhereInput | CommunicationWhereInput[]
    id?: StringFilter<"Communication"> | string
    matchId?: StringFilter<"Communication"> | string
    type?: EnumCommunicationTypeFilter<"Communication"> | $Enums.CommunicationType
    content?: StringFilter<"Communication"> | string
    metadata?: JsonNullableFilter<"Communication">
    createdAt?: DateTimeFilter<"Communication"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
  }

  export type CommunicationOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    match?: MatchOrderByWithRelationInput
  }

  export type CommunicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunicationWhereInput | CommunicationWhereInput[]
    OR?: CommunicationWhereInput[]
    NOT?: CommunicationWhereInput | CommunicationWhereInput[]
    matchId?: StringFilter<"Communication"> | string
    type?: EnumCommunicationTypeFilter<"Communication"> | $Enums.CommunicationType
    content?: StringFilter<"Communication"> | string
    metadata?: JsonNullableFilter<"Communication">
    createdAt?: DateTimeFilter<"Communication"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
  }, "id">

  export type CommunicationOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CommunicationCountOrderByAggregateInput
    _max?: CommunicationMaxOrderByAggregateInput
    _min?: CommunicationMinOrderByAggregateInput
  }

  export type CommunicationScalarWhereWithAggregatesInput = {
    AND?: CommunicationScalarWhereWithAggregatesInput | CommunicationScalarWhereWithAggregatesInput[]
    OR?: CommunicationScalarWhereWithAggregatesInput[]
    NOT?: CommunicationScalarWhereWithAggregatesInput | CommunicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Communication"> | string
    matchId?: StringWithAggregatesFilter<"Communication"> | string
    type?: EnumCommunicationTypeWithAggregatesFilter<"Communication"> | $Enums.CommunicationType
    content?: StringWithAggregatesFilter<"Communication"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Communication">
    createdAt?: DateTimeWithAggregatesFilter<"Communication"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    startup?: StartupCreateNestedOneWithoutUserInput
    investor?: InvestorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    startup?: StartupUncheckedCreateNestedOneWithoutUserInput
    investor?: InvestorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    startup?: StartupUpdateOneWithoutUserNestedInput
    investor?: InvestorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    startup?: StartupUncheckedUpdateOneWithoutUserNestedInput
    investor?: InvestorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type StartupCreateInput = {
    id?: string
    companyName: string
    description?: string | null
    industry: string
    stage: string
    location: string
    foundedDate?: Date | string | null
    teamSize?: number | null
    valuation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutStartupInput
    pitchDeck?: PitchDeckCreateNestedOneWithoutStartupInput
    matches?: MatchCreateNestedManyWithoutStartupInput
  }

  export type StartupUncheckedCreateInput = {
    id?: string
    userId: string
    companyName: string
    description?: string | null
    industry: string
    stage: string
    location: string
    foundedDate?: Date | string | null
    teamSize?: number | null
    valuation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    pitchDeck?: PitchDeckUncheckedCreateNestedOneWithoutStartupInput
    matches?: MatchUncheckedCreateNestedManyWithoutStartupInput
  }

  export type StartupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutStartupNestedInput
    pitchDeck?: PitchDeckUpdateOneWithoutStartupNestedInput
    matches?: MatchUpdateManyWithoutStartupNestedInput
  }

  export type StartupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    pitchDeck?: PitchDeckUncheckedUpdateOneWithoutStartupNestedInput
    matches?: MatchUncheckedUpdateManyWithoutStartupNestedInput
  }

  export type StartupCreateManyInput = {
    id?: string
    userId: string
    companyName: string
    description?: string | null
    industry: string
    stage: string
    location: string
    foundedDate?: Date | string | null
    teamSize?: number | null
    valuation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StartupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StartupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InvestorCreateInput = {
    id?: string
    firmName: string
    description?: string | null
    investmentFocus?: InvestorCreateinvestmentFocusInput | string[]
    stagePreference?: InvestorCreatestagePreferenceInput | string[]
    checkSize: JsonNullValueInput | InputJsonValue
    location: string
    portfolioSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvestorInput
    matches?: MatchCreateNestedManyWithoutInvestorInput
  }

  export type InvestorUncheckedCreateInput = {
    id?: string
    userId: string
    firmName: string
    description?: string | null
    investmentFocus?: InvestorCreateinvestmentFocusInput | string[]
    stagePreference?: InvestorCreatestagePreferenceInput | string[]
    checkSize: JsonNullValueInput | InputJsonValue
    location: string
    portfolioSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type InvestorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    investmentFocus?: InvestorUpdateinvestmentFocusInput | string[]
    stagePreference?: InvestorUpdatestagePreferenceInput | string[]
    checkSize?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    portfolioSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestorNestedInput
    matches?: MatchUpdateManyWithoutInvestorNestedInput
  }

  export type InvestorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    investmentFocus?: InvestorUpdateinvestmentFocusInput | string[]
    stagePreference?: InvestorUpdatestagePreferenceInput | string[]
    checkSize?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    portfolioSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type InvestorCreateManyInput = {
    id?: string
    userId: string
    firmName: string
    description?: string | null
    investmentFocus?: InvestorCreateinvestmentFocusInput | string[]
    stagePreference?: InvestorCreatestagePreferenceInput | string[]
    checkSize: JsonNullValueInput | InputJsonValue
    location: string
    portfolioSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    investmentFocus?: InvestorUpdateinvestmentFocusInput | string[]
    stagePreference?: InvestorUpdatestagePreferenceInput | string[]
    checkSize?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    portfolioSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    investmentFocus?: InvestorUpdateinvestmentFocusInput | string[]
    stagePreference?: InvestorUpdatestagePreferenceInput | string[]
    checkSize?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    portfolioSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PitchDeckCreateInput = {
    id?: string
    currentVersion?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    startup: StartupCreateNestedOneWithoutPitchDeckInput
    feedback?: FeedbackCreateNestedManyWithoutPitchDeckInput
    analytics?: AnalyticsCreateNestedOneWithoutPitchDeckInput
  }

  export type PitchDeckUncheckedCreateInput = {
    id?: string
    startupId: string
    currentVersion?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutPitchDeckInput
    analytics?: AnalyticsUncheckedCreateNestedOneWithoutPitchDeckInput
  }

  export type PitchDeckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentVersion?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startup?: StartupUpdateOneRequiredWithoutPitchDeckNestedInput
    feedback?: FeedbackUpdateManyWithoutPitchDeckNestedInput
    analytics?: AnalyticsUpdateOneWithoutPitchDeckNestedInput
  }

  export type PitchDeckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupId?: StringFieldUpdateOperationsInput | string
    currentVersion?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateManyWithoutPitchDeckNestedInput
    analytics?: AnalyticsUncheckedUpdateOneWithoutPitchDeckNestedInput
  }

  export type PitchDeckCreateManyInput = {
    id?: string
    startupId: string
    currentVersion?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PitchDeckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentVersion?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PitchDeckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupId?: StringFieldUpdateOperationsInput | string
    currentVersion?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    content: string
    rating?: number | null
    createdAt?: Date | string
    pitchDeck: PitchDeckCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    pitchDeckId: string
    content: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitchDeck?: PitchDeckUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchDeckId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    pitchDeckId: string
    content: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchDeckId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateInput = {
    id?: string
    views?: number
    uniqueViews?: number
    averageTime?: number
    lastViewed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pitchDeck: PitchDeckCreateNestedOneWithoutAnalyticsInput
  }

  export type AnalyticsUncheckedCreateInput = {
    id?: string
    pitchDeckId: string
    views?: number
    uniqueViews?: number
    averageTime?: number
    lastViewed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueViews?: IntFieldUpdateOperationsInput | number
    averageTime?: FloatFieldUpdateOperationsInput | number
    lastViewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitchDeck?: PitchDeckUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type AnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchDeckId?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueViews?: IntFieldUpdateOperationsInput | number
    averageTime?: FloatFieldUpdateOperationsInput | number
    lastViewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateManyInput = {
    id?: string
    pitchDeckId: string
    views?: number
    uniqueViews?: number
    averageTime?: number
    lastViewed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueViews?: IntFieldUpdateOperationsInput | number
    averageTime?: FloatFieldUpdateOperationsInput | number
    lastViewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchDeckId?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueViews?: IntFieldUpdateOperationsInput | number
    averageTime?: FloatFieldUpdateOperationsInput | number
    lastViewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startup: StartupCreateNestedOneWithoutMatchesInput
    investor: InvestorCreateNestedOneWithoutMatchesInput
    communications?: CommunicationCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    startupId: string
    investorId: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communications?: CommunicationUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startup?: StartupUpdateOneRequiredWithoutMatchesNestedInput
    investor?: InvestorUpdateOneRequiredWithoutMatchesNestedInput
    communications?: CommunicationUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupId?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communications?: CommunicationUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    startupId: string
    investorId: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupId?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationCreateInput = {
    id?: string
    type: $Enums.CommunicationType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutCommunicationsInput
  }

  export type CommunicationUncheckedCreateInput = {
    id?: string
    matchId: string
    type: $Enums.CommunicationType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CommunicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutCommunicationsNestedInput
  }

  export type CommunicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationCreateManyInput = {
    id?: string
    matchId: string
    type: $Enums.CommunicationType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CommunicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StartupNullableScalarRelationFilter = {
    is?: StartupWhereInput | null
    isNot?: StartupWhereInput | null
  }

  export type InvestorNullableScalarRelationFilter = {
    is?: InvestorWhereInput | null
    isNot?: InvestorWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PitchDeckNullableScalarRelationFilter = {
    is?: PitchDeckWhereInput | null
    isNot?: PitchDeckWhereInput | null
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StartupCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    stage?: SortOrder
    location?: SortOrder
    foundedDate?: SortOrder
    teamSize?: SortOrder
    valuation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    financialMetrics?: SortOrder
  }

  export type StartupAvgOrderByAggregateInput = {
    teamSize?: SortOrder
    valuation?: SortOrder
  }

  export type StartupMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    stage?: SortOrder
    location?: SortOrder
    foundedDate?: SortOrder
    teamSize?: SortOrder
    valuation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StartupMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    stage?: SortOrder
    location?: SortOrder
    foundedDate?: SortOrder
    teamSize?: SortOrder
    valuation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StartupSumOrderByAggregateInput = {
    teamSize?: SortOrder
    valuation?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InvestorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firmName?: SortOrder
    description?: SortOrder
    investmentFocus?: SortOrder
    stagePreference?: SortOrder
    checkSize?: SortOrder
    location?: SortOrder
    portfolioSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestorAvgOrderByAggregateInput = {
    portfolioSize?: SortOrder
  }

  export type InvestorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firmName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    portfolioSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firmName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    portfolioSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestorSumOrderByAggregateInput = {
    portfolioSize?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type StartupScalarRelationFilter = {
    is?: StartupWhereInput
    isNot?: StartupWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type AnalyticsNullableScalarRelationFilter = {
    is?: AnalyticsWhereInput | null
    isNot?: AnalyticsWhereInput | null
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PitchDeckCountOrderByAggregateInput = {
    id?: SortOrder
    startupId?: SortOrder
    currentVersion?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PitchDeckAvgOrderByAggregateInput = {
    currentVersion?: SortOrder
  }

  export type PitchDeckMaxOrderByAggregateInput = {
    id?: SortOrder
    startupId?: SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PitchDeckMinOrderByAggregateInput = {
    id?: SortOrder
    startupId?: SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PitchDeckSumOrderByAggregateInput = {
    currentVersion?: SortOrder
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

  export type PitchDeckScalarRelationFilter = {
    is?: PitchDeckWhereInput
    isNot?: PitchDeckWhereInput
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    pitchDeckId?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    pitchDeckId?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    pitchDeckId?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    pitchDeckId?: SortOrder
    views?: SortOrder
    uniqueViews?: SortOrder
    averageTime?: SortOrder
    lastViewed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalyticsAvgOrderByAggregateInput = {
    views?: SortOrder
    uniqueViews?: SortOrder
    averageTime?: SortOrder
  }

  export type AnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    pitchDeckId?: SortOrder
    views?: SortOrder
    uniqueViews?: SortOrder
    averageTime?: SortOrder
    lastViewed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    pitchDeckId?: SortOrder
    views?: SortOrder
    uniqueViews?: SortOrder
    averageTime?: SortOrder
    lastViewed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalyticsSumOrderByAggregateInput = {
    views?: SortOrder
    uniqueViews?: SortOrder
    averageTime?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type InvestorScalarRelationFilter = {
    is?: InvestorWhereInput
    isNot?: InvestorWhereInput
  }

  export type CommunicationListRelationFilter = {
    every?: CommunicationWhereInput
    some?: CommunicationWhereInput
    none?: CommunicationWhereInput
  }

  export type CommunicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchStartupIdInvestorIdCompoundUniqueInput = {
    startupId: string
    investorId: string
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    startupId?: SortOrder
    investorId?: SortOrder
    score?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    startupId?: SortOrder
    investorId?: SortOrder
    score?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    startupId?: SortOrder
    investorId?: SortOrder
    score?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type EnumCommunicationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationType | EnumCommunicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationTypeFilter<$PrismaModel> | $Enums.CommunicationType
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type CommunicationCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunicationMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunicationMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCommunicationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationType | EnumCommunicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationTypeWithAggregatesFilter<$PrismaModel> | $Enums.CommunicationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunicationTypeFilter<$PrismaModel>
    _max?: NestedEnumCommunicationTypeFilter<$PrismaModel>
  }

  export type StartupCreateNestedOneWithoutUserInput = {
    create?: XOR<StartupCreateWithoutUserInput, StartupUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupCreateOrConnectWithoutUserInput
    connect?: StartupWhereUniqueInput
  }

  export type InvestorCreateNestedOneWithoutUserInput = {
    create?: XOR<InvestorCreateWithoutUserInput, InvestorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvestorCreateOrConnectWithoutUserInput
    connect?: InvestorWhereUniqueInput
  }

  export type StartupUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StartupCreateWithoutUserInput, StartupUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupCreateOrConnectWithoutUserInput
    connect?: StartupWhereUniqueInput
  }

  export type InvestorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InvestorCreateWithoutUserInput, InvestorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvestorCreateOrConnectWithoutUserInput
    connect?: InvestorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type StartupUpdateOneWithoutUserNestedInput = {
    create?: XOR<StartupCreateWithoutUserInput, StartupUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupCreateOrConnectWithoutUserInput
    upsert?: StartupUpsertWithoutUserInput
    disconnect?: StartupWhereInput | boolean
    delete?: StartupWhereInput | boolean
    connect?: StartupWhereUniqueInput
    update?: XOR<XOR<StartupUpdateToOneWithWhereWithoutUserInput, StartupUpdateWithoutUserInput>, StartupUncheckedUpdateWithoutUserInput>
  }

  export type InvestorUpdateOneWithoutUserNestedInput = {
    create?: XOR<InvestorCreateWithoutUserInput, InvestorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvestorCreateOrConnectWithoutUserInput
    upsert?: InvestorUpsertWithoutUserInput
    disconnect?: InvestorWhereInput | boolean
    delete?: InvestorWhereInput | boolean
    connect?: InvestorWhereUniqueInput
    update?: XOR<XOR<InvestorUpdateToOneWithWhereWithoutUserInput, InvestorUpdateWithoutUserInput>, InvestorUncheckedUpdateWithoutUserInput>
  }

  export type StartupUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StartupCreateWithoutUserInput, StartupUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupCreateOrConnectWithoutUserInput
    upsert?: StartupUpsertWithoutUserInput
    disconnect?: StartupWhereInput | boolean
    delete?: StartupWhereInput | boolean
    connect?: StartupWhereUniqueInput
    update?: XOR<XOR<StartupUpdateToOneWithWhereWithoutUserInput, StartupUpdateWithoutUserInput>, StartupUncheckedUpdateWithoutUserInput>
  }

  export type InvestorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InvestorCreateWithoutUserInput, InvestorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvestorCreateOrConnectWithoutUserInput
    upsert?: InvestorUpsertWithoutUserInput
    disconnect?: InvestorWhereInput | boolean
    delete?: InvestorWhereInput | boolean
    connect?: InvestorWhereUniqueInput
    update?: XOR<XOR<InvestorUpdateToOneWithWhereWithoutUserInput, InvestorUpdateWithoutUserInput>, InvestorUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutStartupInput = {
    create?: XOR<UserCreateWithoutStartupInput, UserUncheckedCreateWithoutStartupInput>
    connectOrCreate?: UserCreateOrConnectWithoutStartupInput
    connect?: UserWhereUniqueInput
  }

  export type PitchDeckCreateNestedOneWithoutStartupInput = {
    create?: XOR<PitchDeckCreateWithoutStartupInput, PitchDeckUncheckedCreateWithoutStartupInput>
    connectOrCreate?: PitchDeckCreateOrConnectWithoutStartupInput
    connect?: PitchDeckWhereUniqueInput
  }

  export type MatchCreateNestedManyWithoutStartupInput = {
    create?: XOR<MatchCreateWithoutStartupInput, MatchUncheckedCreateWithoutStartupInput> | MatchCreateWithoutStartupInput[] | MatchUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStartupInput | MatchCreateOrConnectWithoutStartupInput[]
    createMany?: MatchCreateManyStartupInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type PitchDeckUncheckedCreateNestedOneWithoutStartupInput = {
    create?: XOR<PitchDeckCreateWithoutStartupInput, PitchDeckUncheckedCreateWithoutStartupInput>
    connectOrCreate?: PitchDeckCreateOrConnectWithoutStartupInput
    connect?: PitchDeckWhereUniqueInput
  }

  export type MatchUncheckedCreateNestedManyWithoutStartupInput = {
    create?: XOR<MatchCreateWithoutStartupInput, MatchUncheckedCreateWithoutStartupInput> | MatchCreateWithoutStartupInput[] | MatchUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStartupInput | MatchCreateOrConnectWithoutStartupInput[]
    createMany?: MatchCreateManyStartupInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStartupNestedInput = {
    create?: XOR<UserCreateWithoutStartupInput, UserUncheckedCreateWithoutStartupInput>
    connectOrCreate?: UserCreateOrConnectWithoutStartupInput
    upsert?: UserUpsertWithoutStartupInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStartupInput, UserUpdateWithoutStartupInput>, UserUncheckedUpdateWithoutStartupInput>
  }

  export type PitchDeckUpdateOneWithoutStartupNestedInput = {
    create?: XOR<PitchDeckCreateWithoutStartupInput, PitchDeckUncheckedCreateWithoutStartupInput>
    connectOrCreate?: PitchDeckCreateOrConnectWithoutStartupInput
    upsert?: PitchDeckUpsertWithoutStartupInput
    disconnect?: PitchDeckWhereInput | boolean
    delete?: PitchDeckWhereInput | boolean
    connect?: PitchDeckWhereUniqueInput
    update?: XOR<XOR<PitchDeckUpdateToOneWithWhereWithoutStartupInput, PitchDeckUpdateWithoutStartupInput>, PitchDeckUncheckedUpdateWithoutStartupInput>
  }

  export type MatchUpdateManyWithoutStartupNestedInput = {
    create?: XOR<MatchCreateWithoutStartupInput, MatchUncheckedCreateWithoutStartupInput> | MatchCreateWithoutStartupInput[] | MatchUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStartupInput | MatchCreateOrConnectWithoutStartupInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutStartupInput | MatchUpsertWithWhereUniqueWithoutStartupInput[]
    createMany?: MatchCreateManyStartupInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutStartupInput | MatchUpdateWithWhereUniqueWithoutStartupInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutStartupInput | MatchUpdateManyWithWhereWithoutStartupInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type PitchDeckUncheckedUpdateOneWithoutStartupNestedInput = {
    create?: XOR<PitchDeckCreateWithoutStartupInput, PitchDeckUncheckedCreateWithoutStartupInput>
    connectOrCreate?: PitchDeckCreateOrConnectWithoutStartupInput
    upsert?: PitchDeckUpsertWithoutStartupInput
    disconnect?: PitchDeckWhereInput | boolean
    delete?: PitchDeckWhereInput | boolean
    connect?: PitchDeckWhereUniqueInput
    update?: XOR<XOR<PitchDeckUpdateToOneWithWhereWithoutStartupInput, PitchDeckUpdateWithoutStartupInput>, PitchDeckUncheckedUpdateWithoutStartupInput>
  }

  export type MatchUncheckedUpdateManyWithoutStartupNestedInput = {
    create?: XOR<MatchCreateWithoutStartupInput, MatchUncheckedCreateWithoutStartupInput> | MatchCreateWithoutStartupInput[] | MatchUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStartupInput | MatchCreateOrConnectWithoutStartupInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutStartupInput | MatchUpsertWithWhereUniqueWithoutStartupInput[]
    createMany?: MatchCreateManyStartupInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutStartupInput | MatchUpdateWithWhereUniqueWithoutStartupInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutStartupInput | MatchUpdateManyWithWhereWithoutStartupInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type InvestorCreateinvestmentFocusInput = {
    set: string[]
  }

  export type InvestorCreatestagePreferenceInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutInvestorInput = {
    create?: XOR<UserCreateWithoutInvestorInput, UserUncheckedCreateWithoutInvestorInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestorInput
    connect?: UserWhereUniqueInput
  }

  export type MatchCreateNestedManyWithoutInvestorInput = {
    create?: XOR<MatchCreateWithoutInvestorInput, MatchUncheckedCreateWithoutInvestorInput> | MatchCreateWithoutInvestorInput[] | MatchUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutInvestorInput | MatchCreateOrConnectWithoutInvestorInput[]
    createMany?: MatchCreateManyInvestorInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: XOR<MatchCreateWithoutInvestorInput, MatchUncheckedCreateWithoutInvestorInput> | MatchCreateWithoutInvestorInput[] | MatchUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutInvestorInput | MatchCreateOrConnectWithoutInvestorInput[]
    createMany?: MatchCreateManyInvestorInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type InvestorUpdateinvestmentFocusInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InvestorUpdatestagePreferenceInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutInvestorNestedInput = {
    create?: XOR<UserCreateWithoutInvestorInput, UserUncheckedCreateWithoutInvestorInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestorInput
    upsert?: UserUpsertWithoutInvestorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestorInput, UserUpdateWithoutInvestorInput>, UserUncheckedUpdateWithoutInvestorInput>
  }

  export type MatchUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<MatchCreateWithoutInvestorInput, MatchUncheckedCreateWithoutInvestorInput> | MatchCreateWithoutInvestorInput[] | MatchUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutInvestorInput | MatchCreateOrConnectWithoutInvestorInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutInvestorInput | MatchUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: MatchCreateManyInvestorInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutInvestorInput | MatchUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutInvestorInput | MatchUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<MatchCreateWithoutInvestorInput, MatchUncheckedCreateWithoutInvestorInput> | MatchCreateWithoutInvestorInput[] | MatchUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutInvestorInput | MatchCreateOrConnectWithoutInvestorInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutInvestorInput | MatchUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: MatchCreateManyInvestorInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutInvestorInput | MatchUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutInvestorInput | MatchUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type StartupCreateNestedOneWithoutPitchDeckInput = {
    create?: XOR<StartupCreateWithoutPitchDeckInput, StartupUncheckedCreateWithoutPitchDeckInput>
    connectOrCreate?: StartupCreateOrConnectWithoutPitchDeckInput
    connect?: StartupWhereUniqueInput
  }

  export type FeedbackCreateNestedManyWithoutPitchDeckInput = {
    create?: XOR<FeedbackCreateWithoutPitchDeckInput, FeedbackUncheckedCreateWithoutPitchDeckInput> | FeedbackCreateWithoutPitchDeckInput[] | FeedbackUncheckedCreateWithoutPitchDeckInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPitchDeckInput | FeedbackCreateOrConnectWithoutPitchDeckInput[]
    createMany?: FeedbackCreateManyPitchDeckInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type AnalyticsCreateNestedOneWithoutPitchDeckInput = {
    create?: XOR<AnalyticsCreateWithoutPitchDeckInput, AnalyticsUncheckedCreateWithoutPitchDeckInput>
    connectOrCreate?: AnalyticsCreateOrConnectWithoutPitchDeckInput
    connect?: AnalyticsWhereUniqueInput
  }

  export type FeedbackUncheckedCreateNestedManyWithoutPitchDeckInput = {
    create?: XOR<FeedbackCreateWithoutPitchDeckInput, FeedbackUncheckedCreateWithoutPitchDeckInput> | FeedbackCreateWithoutPitchDeckInput[] | FeedbackUncheckedCreateWithoutPitchDeckInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPitchDeckInput | FeedbackCreateOrConnectWithoutPitchDeckInput[]
    createMany?: FeedbackCreateManyPitchDeckInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type AnalyticsUncheckedCreateNestedOneWithoutPitchDeckInput = {
    create?: XOR<AnalyticsCreateWithoutPitchDeckInput, AnalyticsUncheckedCreateWithoutPitchDeckInput>
    connectOrCreate?: AnalyticsCreateOrConnectWithoutPitchDeckInput
    connect?: AnalyticsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StartupUpdateOneRequiredWithoutPitchDeckNestedInput = {
    create?: XOR<StartupCreateWithoutPitchDeckInput, StartupUncheckedCreateWithoutPitchDeckInput>
    connectOrCreate?: StartupCreateOrConnectWithoutPitchDeckInput
    upsert?: StartupUpsertWithoutPitchDeckInput
    connect?: StartupWhereUniqueInput
    update?: XOR<XOR<StartupUpdateToOneWithWhereWithoutPitchDeckInput, StartupUpdateWithoutPitchDeckInput>, StartupUncheckedUpdateWithoutPitchDeckInput>
  }

  export type FeedbackUpdateManyWithoutPitchDeckNestedInput = {
    create?: XOR<FeedbackCreateWithoutPitchDeckInput, FeedbackUncheckedCreateWithoutPitchDeckInput> | FeedbackCreateWithoutPitchDeckInput[] | FeedbackUncheckedCreateWithoutPitchDeckInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPitchDeckInput | FeedbackCreateOrConnectWithoutPitchDeckInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutPitchDeckInput | FeedbackUpsertWithWhereUniqueWithoutPitchDeckInput[]
    createMany?: FeedbackCreateManyPitchDeckInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutPitchDeckInput | FeedbackUpdateWithWhereUniqueWithoutPitchDeckInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutPitchDeckInput | FeedbackUpdateManyWithWhereWithoutPitchDeckInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type AnalyticsUpdateOneWithoutPitchDeckNestedInput = {
    create?: XOR<AnalyticsCreateWithoutPitchDeckInput, AnalyticsUncheckedCreateWithoutPitchDeckInput>
    connectOrCreate?: AnalyticsCreateOrConnectWithoutPitchDeckInput
    upsert?: AnalyticsUpsertWithoutPitchDeckInput
    disconnect?: AnalyticsWhereInput | boolean
    delete?: AnalyticsWhereInput | boolean
    connect?: AnalyticsWhereUniqueInput
    update?: XOR<XOR<AnalyticsUpdateToOneWithWhereWithoutPitchDeckInput, AnalyticsUpdateWithoutPitchDeckInput>, AnalyticsUncheckedUpdateWithoutPitchDeckInput>
  }

  export type FeedbackUncheckedUpdateManyWithoutPitchDeckNestedInput = {
    create?: XOR<FeedbackCreateWithoutPitchDeckInput, FeedbackUncheckedCreateWithoutPitchDeckInput> | FeedbackCreateWithoutPitchDeckInput[] | FeedbackUncheckedCreateWithoutPitchDeckInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPitchDeckInput | FeedbackCreateOrConnectWithoutPitchDeckInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutPitchDeckInput | FeedbackUpsertWithWhereUniqueWithoutPitchDeckInput[]
    createMany?: FeedbackCreateManyPitchDeckInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutPitchDeckInput | FeedbackUpdateWithWhereUniqueWithoutPitchDeckInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutPitchDeckInput | FeedbackUpdateManyWithWhereWithoutPitchDeckInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type AnalyticsUncheckedUpdateOneWithoutPitchDeckNestedInput = {
    create?: XOR<AnalyticsCreateWithoutPitchDeckInput, AnalyticsUncheckedCreateWithoutPitchDeckInput>
    connectOrCreate?: AnalyticsCreateOrConnectWithoutPitchDeckInput
    upsert?: AnalyticsUpsertWithoutPitchDeckInput
    disconnect?: AnalyticsWhereInput | boolean
    delete?: AnalyticsWhereInput | boolean
    connect?: AnalyticsWhereUniqueInput
    update?: XOR<XOR<AnalyticsUpdateToOneWithWhereWithoutPitchDeckInput, AnalyticsUpdateWithoutPitchDeckInput>, AnalyticsUncheckedUpdateWithoutPitchDeckInput>
  }

  export type PitchDeckCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<PitchDeckCreateWithoutFeedbackInput, PitchDeckUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: PitchDeckCreateOrConnectWithoutFeedbackInput
    connect?: PitchDeckWhereUniqueInput
  }

  export type PitchDeckUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<PitchDeckCreateWithoutFeedbackInput, PitchDeckUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: PitchDeckCreateOrConnectWithoutFeedbackInput
    upsert?: PitchDeckUpsertWithoutFeedbackInput
    connect?: PitchDeckWhereUniqueInput
    update?: XOR<XOR<PitchDeckUpdateToOneWithWhereWithoutFeedbackInput, PitchDeckUpdateWithoutFeedbackInput>, PitchDeckUncheckedUpdateWithoutFeedbackInput>
  }

  export type PitchDeckCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<PitchDeckCreateWithoutAnalyticsInput, PitchDeckUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: PitchDeckCreateOrConnectWithoutAnalyticsInput
    connect?: PitchDeckWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PitchDeckUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<PitchDeckCreateWithoutAnalyticsInput, PitchDeckUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: PitchDeckCreateOrConnectWithoutAnalyticsInput
    upsert?: PitchDeckUpsertWithoutAnalyticsInput
    connect?: PitchDeckWhereUniqueInput
    update?: XOR<XOR<PitchDeckUpdateToOneWithWhereWithoutAnalyticsInput, PitchDeckUpdateWithoutAnalyticsInput>, PitchDeckUncheckedUpdateWithoutAnalyticsInput>
  }

  export type StartupCreateNestedOneWithoutMatchesInput = {
    create?: XOR<StartupCreateWithoutMatchesInput, StartupUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: StartupCreateOrConnectWithoutMatchesInput
    connect?: StartupWhereUniqueInput
  }

  export type InvestorCreateNestedOneWithoutMatchesInput = {
    create?: XOR<InvestorCreateWithoutMatchesInput, InvestorUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: InvestorCreateOrConnectWithoutMatchesInput
    connect?: InvestorWhereUniqueInput
  }

  export type CommunicationCreateNestedManyWithoutMatchInput = {
    create?: XOR<CommunicationCreateWithoutMatchInput, CommunicationUncheckedCreateWithoutMatchInput> | CommunicationCreateWithoutMatchInput[] | CommunicationUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutMatchInput | CommunicationCreateOrConnectWithoutMatchInput[]
    createMany?: CommunicationCreateManyMatchInputEnvelope
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
  }

  export type CommunicationUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<CommunicationCreateWithoutMatchInput, CommunicationUncheckedCreateWithoutMatchInput> | CommunicationCreateWithoutMatchInput[] | CommunicationUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutMatchInput | CommunicationCreateOrConnectWithoutMatchInput[]
    createMany?: CommunicationCreateManyMatchInputEnvelope
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type StartupUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<StartupCreateWithoutMatchesInput, StartupUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: StartupCreateOrConnectWithoutMatchesInput
    upsert?: StartupUpsertWithoutMatchesInput
    connect?: StartupWhereUniqueInput
    update?: XOR<XOR<StartupUpdateToOneWithWhereWithoutMatchesInput, StartupUpdateWithoutMatchesInput>, StartupUncheckedUpdateWithoutMatchesInput>
  }

  export type InvestorUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<InvestorCreateWithoutMatchesInput, InvestorUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: InvestorCreateOrConnectWithoutMatchesInput
    upsert?: InvestorUpsertWithoutMatchesInput
    connect?: InvestorWhereUniqueInput
    update?: XOR<XOR<InvestorUpdateToOneWithWhereWithoutMatchesInput, InvestorUpdateWithoutMatchesInput>, InvestorUncheckedUpdateWithoutMatchesInput>
  }

  export type CommunicationUpdateManyWithoutMatchNestedInput = {
    create?: XOR<CommunicationCreateWithoutMatchInput, CommunicationUncheckedCreateWithoutMatchInput> | CommunicationCreateWithoutMatchInput[] | CommunicationUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutMatchInput | CommunicationCreateOrConnectWithoutMatchInput[]
    upsert?: CommunicationUpsertWithWhereUniqueWithoutMatchInput | CommunicationUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: CommunicationCreateManyMatchInputEnvelope
    set?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    disconnect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    delete?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    update?: CommunicationUpdateWithWhereUniqueWithoutMatchInput | CommunicationUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: CommunicationUpdateManyWithWhereWithoutMatchInput | CommunicationUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
  }

  export type CommunicationUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<CommunicationCreateWithoutMatchInput, CommunicationUncheckedCreateWithoutMatchInput> | CommunicationCreateWithoutMatchInput[] | CommunicationUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutMatchInput | CommunicationCreateOrConnectWithoutMatchInput[]
    upsert?: CommunicationUpsertWithWhereUniqueWithoutMatchInput | CommunicationUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: CommunicationCreateManyMatchInputEnvelope
    set?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    disconnect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    delete?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    update?: CommunicationUpdateWithWhereUniqueWithoutMatchInput | CommunicationUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: CommunicationUpdateManyWithWhereWithoutMatchInput | CommunicationUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
  }

  export type MatchCreateNestedOneWithoutCommunicationsInput = {
    create?: XOR<MatchCreateWithoutCommunicationsInput, MatchUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutCommunicationsInput
    connect?: MatchWhereUniqueInput
  }

  export type EnumCommunicationTypeFieldUpdateOperationsInput = {
    set?: $Enums.CommunicationType
  }

  export type MatchUpdateOneRequiredWithoutCommunicationsNestedInput = {
    create?: XOR<MatchCreateWithoutCommunicationsInput, MatchUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutCommunicationsInput
    upsert?: MatchUpsertWithoutCommunicationsInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutCommunicationsInput, MatchUpdateWithoutCommunicationsInput>, MatchUncheckedUpdateWithoutCommunicationsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type NestedEnumCommunicationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationType | EnumCommunicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationTypeFilter<$PrismaModel> | $Enums.CommunicationType
  }

  export type NestedEnumCommunicationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationType | EnumCommunicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationTypeWithAggregatesFilter<$PrismaModel> | $Enums.CommunicationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunicationTypeFilter<$PrismaModel>
    _max?: NestedEnumCommunicationTypeFilter<$PrismaModel>
  }

  export type StartupCreateWithoutUserInput = {
    id?: string
    companyName: string
    description?: string | null
    industry: string
    stage: string
    location: string
    foundedDate?: Date | string | null
    teamSize?: number | null
    valuation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    pitchDeck?: PitchDeckCreateNestedOneWithoutStartupInput
    matches?: MatchCreateNestedManyWithoutStartupInput
  }

  export type StartupUncheckedCreateWithoutUserInput = {
    id?: string
    companyName: string
    description?: string | null
    industry: string
    stage: string
    location: string
    foundedDate?: Date | string | null
    teamSize?: number | null
    valuation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    pitchDeck?: PitchDeckUncheckedCreateNestedOneWithoutStartupInput
    matches?: MatchUncheckedCreateNestedManyWithoutStartupInput
  }

  export type StartupCreateOrConnectWithoutUserInput = {
    where: StartupWhereUniqueInput
    create: XOR<StartupCreateWithoutUserInput, StartupUncheckedCreateWithoutUserInput>
  }

  export type InvestorCreateWithoutUserInput = {
    id?: string
    firmName: string
    description?: string | null
    investmentFocus?: InvestorCreateinvestmentFocusInput | string[]
    stagePreference?: InvestorCreatestagePreferenceInput | string[]
    checkSize: JsonNullValueInput | InputJsonValue
    location: string
    portfolioSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchCreateNestedManyWithoutInvestorInput
  }

  export type InvestorUncheckedCreateWithoutUserInput = {
    id?: string
    firmName: string
    description?: string | null
    investmentFocus?: InvestorCreateinvestmentFocusInput | string[]
    stagePreference?: InvestorCreatestagePreferenceInput | string[]
    checkSize: JsonNullValueInput | InputJsonValue
    location: string
    portfolioSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type InvestorCreateOrConnectWithoutUserInput = {
    where: InvestorWhereUniqueInput
    create: XOR<InvestorCreateWithoutUserInput, InvestorUncheckedCreateWithoutUserInput>
  }

  export type StartupUpsertWithoutUserInput = {
    update: XOR<StartupUpdateWithoutUserInput, StartupUncheckedUpdateWithoutUserInput>
    create: XOR<StartupCreateWithoutUserInput, StartupUncheckedCreateWithoutUserInput>
    where?: StartupWhereInput
  }

  export type StartupUpdateToOneWithWhereWithoutUserInput = {
    where?: StartupWhereInput
    data: XOR<StartupUpdateWithoutUserInput, StartupUncheckedUpdateWithoutUserInput>
  }

  export type StartupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    pitchDeck?: PitchDeckUpdateOneWithoutStartupNestedInput
    matches?: MatchUpdateManyWithoutStartupNestedInput
  }

  export type StartupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    pitchDeck?: PitchDeckUncheckedUpdateOneWithoutStartupNestedInput
    matches?: MatchUncheckedUpdateManyWithoutStartupNestedInput
  }

  export type InvestorUpsertWithoutUserInput = {
    update: XOR<InvestorUpdateWithoutUserInput, InvestorUncheckedUpdateWithoutUserInput>
    create: XOR<InvestorCreateWithoutUserInput, InvestorUncheckedCreateWithoutUserInput>
    where?: InvestorWhereInput
  }

  export type InvestorUpdateToOneWithWhereWithoutUserInput = {
    where?: InvestorWhereInput
    data: XOR<InvestorUpdateWithoutUserInput, InvestorUncheckedUpdateWithoutUserInput>
  }

  export type InvestorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    investmentFocus?: InvestorUpdateinvestmentFocusInput | string[]
    stagePreference?: InvestorUpdatestagePreferenceInput | string[]
    checkSize?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    portfolioSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUpdateManyWithoutInvestorNestedInput
  }

  export type InvestorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    investmentFocus?: InvestorUpdateinvestmentFocusInput | string[]
    stagePreference?: InvestorUpdatestagePreferenceInput | string[]
    checkSize?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    portfolioSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type UserCreateWithoutStartupInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    investor?: InvestorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStartupInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    investor?: InvestorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStartupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStartupInput, UserUncheckedCreateWithoutStartupInput>
  }

  export type PitchDeckCreateWithoutStartupInput = {
    id?: string
    currentVersion?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackCreateNestedManyWithoutPitchDeckInput
    analytics?: AnalyticsCreateNestedOneWithoutPitchDeckInput
  }

  export type PitchDeckUncheckedCreateWithoutStartupInput = {
    id?: string
    currentVersion?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutPitchDeckInput
    analytics?: AnalyticsUncheckedCreateNestedOneWithoutPitchDeckInput
  }

  export type PitchDeckCreateOrConnectWithoutStartupInput = {
    where: PitchDeckWhereUniqueInput
    create: XOR<PitchDeckCreateWithoutStartupInput, PitchDeckUncheckedCreateWithoutStartupInput>
  }

  export type MatchCreateWithoutStartupInput = {
    id?: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investor: InvestorCreateNestedOneWithoutMatchesInput
    communications?: CommunicationCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutStartupInput = {
    id?: string
    investorId: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communications?: CommunicationUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutStartupInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutStartupInput, MatchUncheckedCreateWithoutStartupInput>
  }

  export type MatchCreateManyStartupInputEnvelope = {
    data: MatchCreateManyStartupInput | MatchCreateManyStartupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStartupInput = {
    update: XOR<UserUpdateWithoutStartupInput, UserUncheckedUpdateWithoutStartupInput>
    create: XOR<UserCreateWithoutStartupInput, UserUncheckedCreateWithoutStartupInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStartupInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStartupInput, UserUncheckedUpdateWithoutStartupInput>
  }

  export type UserUpdateWithoutStartupInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    investor?: InvestorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStartupInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    investor?: InvestorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PitchDeckUpsertWithoutStartupInput = {
    update: XOR<PitchDeckUpdateWithoutStartupInput, PitchDeckUncheckedUpdateWithoutStartupInput>
    create: XOR<PitchDeckCreateWithoutStartupInput, PitchDeckUncheckedCreateWithoutStartupInput>
    where?: PitchDeckWhereInput
  }

  export type PitchDeckUpdateToOneWithWhereWithoutStartupInput = {
    where?: PitchDeckWhereInput
    data: XOR<PitchDeckUpdateWithoutStartupInput, PitchDeckUncheckedUpdateWithoutStartupInput>
  }

  export type PitchDeckUpdateWithoutStartupInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentVersion?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUpdateManyWithoutPitchDeckNestedInput
    analytics?: AnalyticsUpdateOneWithoutPitchDeckNestedInput
  }

  export type PitchDeckUncheckedUpdateWithoutStartupInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentVersion?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateManyWithoutPitchDeckNestedInput
    analytics?: AnalyticsUncheckedUpdateOneWithoutPitchDeckNestedInput
  }

  export type MatchUpsertWithWhereUniqueWithoutStartupInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutStartupInput, MatchUncheckedUpdateWithoutStartupInput>
    create: XOR<MatchCreateWithoutStartupInput, MatchUncheckedCreateWithoutStartupInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutStartupInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutStartupInput, MatchUncheckedUpdateWithoutStartupInput>
  }

  export type MatchUpdateManyWithWhereWithoutStartupInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutStartupInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    startupId?: StringFilter<"Match"> | string
    investorId?: StringFilter<"Match"> | string
    score?: FloatFilter<"Match"> | number
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    notes?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type UserCreateWithoutInvestorInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    startup?: StartupCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvestorInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    startup?: StartupUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvestorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestorInput, UserUncheckedCreateWithoutInvestorInput>
  }

  export type MatchCreateWithoutInvestorInput = {
    id?: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startup: StartupCreateNestedOneWithoutMatchesInput
    communications?: CommunicationCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutInvestorInput = {
    id?: string
    startupId: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communications?: CommunicationUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutInvestorInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutInvestorInput, MatchUncheckedCreateWithoutInvestorInput>
  }

  export type MatchCreateManyInvestorInputEnvelope = {
    data: MatchCreateManyInvestorInput | MatchCreateManyInvestorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInvestorInput = {
    update: XOR<UserUpdateWithoutInvestorInput, UserUncheckedUpdateWithoutInvestorInput>
    create: XOR<UserCreateWithoutInvestorInput, UserUncheckedCreateWithoutInvestorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestorInput, UserUncheckedUpdateWithoutInvestorInput>
  }

  export type UserUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    startup?: StartupUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    startup?: StartupUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MatchUpsertWithWhereUniqueWithoutInvestorInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutInvestorInput, MatchUncheckedUpdateWithoutInvestorInput>
    create: XOR<MatchCreateWithoutInvestorInput, MatchUncheckedCreateWithoutInvestorInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutInvestorInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutInvestorInput, MatchUncheckedUpdateWithoutInvestorInput>
  }

  export type MatchUpdateManyWithWhereWithoutInvestorInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutInvestorInput>
  }

  export type StartupCreateWithoutPitchDeckInput = {
    id?: string
    companyName: string
    description?: string | null
    industry: string
    stage: string
    location: string
    foundedDate?: Date | string | null
    teamSize?: number | null
    valuation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutStartupInput
    matches?: MatchCreateNestedManyWithoutStartupInput
  }

  export type StartupUncheckedCreateWithoutPitchDeckInput = {
    id?: string
    userId: string
    companyName: string
    description?: string | null
    industry: string
    stage: string
    location: string
    foundedDate?: Date | string | null
    teamSize?: number | null
    valuation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    matches?: MatchUncheckedCreateNestedManyWithoutStartupInput
  }

  export type StartupCreateOrConnectWithoutPitchDeckInput = {
    where: StartupWhereUniqueInput
    create: XOR<StartupCreateWithoutPitchDeckInput, StartupUncheckedCreateWithoutPitchDeckInput>
  }

  export type FeedbackCreateWithoutPitchDeckInput = {
    id?: string
    content: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type FeedbackUncheckedCreateWithoutPitchDeckInput = {
    id?: string
    content: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutPitchDeckInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutPitchDeckInput, FeedbackUncheckedCreateWithoutPitchDeckInput>
  }

  export type FeedbackCreateManyPitchDeckInputEnvelope = {
    data: FeedbackCreateManyPitchDeckInput | FeedbackCreateManyPitchDeckInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsCreateWithoutPitchDeckInput = {
    id?: string
    views?: number
    uniqueViews?: number
    averageTime?: number
    lastViewed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsUncheckedCreateWithoutPitchDeckInput = {
    id?: string
    views?: number
    uniqueViews?: number
    averageTime?: number
    lastViewed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsCreateOrConnectWithoutPitchDeckInput = {
    where: AnalyticsWhereUniqueInput
    create: XOR<AnalyticsCreateWithoutPitchDeckInput, AnalyticsUncheckedCreateWithoutPitchDeckInput>
  }

  export type StartupUpsertWithoutPitchDeckInput = {
    update: XOR<StartupUpdateWithoutPitchDeckInput, StartupUncheckedUpdateWithoutPitchDeckInput>
    create: XOR<StartupCreateWithoutPitchDeckInput, StartupUncheckedCreateWithoutPitchDeckInput>
    where?: StartupWhereInput
  }

  export type StartupUpdateToOneWithWhereWithoutPitchDeckInput = {
    where?: StartupWhereInput
    data: XOR<StartupUpdateWithoutPitchDeckInput, StartupUncheckedUpdateWithoutPitchDeckInput>
  }

  export type StartupUpdateWithoutPitchDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutStartupNestedInput
    matches?: MatchUpdateManyWithoutStartupNestedInput
  }

  export type StartupUncheckedUpdateWithoutPitchDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    matches?: MatchUncheckedUpdateManyWithoutStartupNestedInput
  }

  export type FeedbackUpsertWithWhereUniqueWithoutPitchDeckInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutPitchDeckInput, FeedbackUncheckedUpdateWithoutPitchDeckInput>
    create: XOR<FeedbackCreateWithoutPitchDeckInput, FeedbackUncheckedCreateWithoutPitchDeckInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutPitchDeckInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutPitchDeckInput, FeedbackUncheckedUpdateWithoutPitchDeckInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutPitchDeckInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutPitchDeckInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: StringFilter<"Feedback"> | string
    pitchDeckId?: StringFilter<"Feedback"> | string
    content?: StringFilter<"Feedback"> | string
    rating?: IntNullableFilter<"Feedback"> | number | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type AnalyticsUpsertWithoutPitchDeckInput = {
    update: XOR<AnalyticsUpdateWithoutPitchDeckInput, AnalyticsUncheckedUpdateWithoutPitchDeckInput>
    create: XOR<AnalyticsCreateWithoutPitchDeckInput, AnalyticsUncheckedCreateWithoutPitchDeckInput>
    where?: AnalyticsWhereInput
  }

  export type AnalyticsUpdateToOneWithWhereWithoutPitchDeckInput = {
    where?: AnalyticsWhereInput
    data: XOR<AnalyticsUpdateWithoutPitchDeckInput, AnalyticsUncheckedUpdateWithoutPitchDeckInput>
  }

  export type AnalyticsUpdateWithoutPitchDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueViews?: IntFieldUpdateOperationsInput | number
    averageTime?: FloatFieldUpdateOperationsInput | number
    lastViewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateWithoutPitchDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueViews?: IntFieldUpdateOperationsInput | number
    averageTime?: FloatFieldUpdateOperationsInput | number
    lastViewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PitchDeckCreateWithoutFeedbackInput = {
    id?: string
    currentVersion?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    startup: StartupCreateNestedOneWithoutPitchDeckInput
    analytics?: AnalyticsCreateNestedOneWithoutPitchDeckInput
  }

  export type PitchDeckUncheckedCreateWithoutFeedbackInput = {
    id?: string
    startupId: string
    currentVersion?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    analytics?: AnalyticsUncheckedCreateNestedOneWithoutPitchDeckInput
  }

  export type PitchDeckCreateOrConnectWithoutFeedbackInput = {
    where: PitchDeckWhereUniqueInput
    create: XOR<PitchDeckCreateWithoutFeedbackInput, PitchDeckUncheckedCreateWithoutFeedbackInput>
  }

  export type PitchDeckUpsertWithoutFeedbackInput = {
    update: XOR<PitchDeckUpdateWithoutFeedbackInput, PitchDeckUncheckedUpdateWithoutFeedbackInput>
    create: XOR<PitchDeckCreateWithoutFeedbackInput, PitchDeckUncheckedCreateWithoutFeedbackInput>
    where?: PitchDeckWhereInput
  }

  export type PitchDeckUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: PitchDeckWhereInput
    data: XOR<PitchDeckUpdateWithoutFeedbackInput, PitchDeckUncheckedUpdateWithoutFeedbackInput>
  }

  export type PitchDeckUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentVersion?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startup?: StartupUpdateOneRequiredWithoutPitchDeckNestedInput
    analytics?: AnalyticsUpdateOneWithoutPitchDeckNestedInput
  }

  export type PitchDeckUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupId?: StringFieldUpdateOperationsInput | string
    currentVersion?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analytics?: AnalyticsUncheckedUpdateOneWithoutPitchDeckNestedInput
  }

  export type PitchDeckCreateWithoutAnalyticsInput = {
    id?: string
    currentVersion?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    startup: StartupCreateNestedOneWithoutPitchDeckInput
    feedback?: FeedbackCreateNestedManyWithoutPitchDeckInput
  }

  export type PitchDeckUncheckedCreateWithoutAnalyticsInput = {
    id?: string
    startupId: string
    currentVersion?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutPitchDeckInput
  }

  export type PitchDeckCreateOrConnectWithoutAnalyticsInput = {
    where: PitchDeckWhereUniqueInput
    create: XOR<PitchDeckCreateWithoutAnalyticsInput, PitchDeckUncheckedCreateWithoutAnalyticsInput>
  }

  export type PitchDeckUpsertWithoutAnalyticsInput = {
    update: XOR<PitchDeckUpdateWithoutAnalyticsInput, PitchDeckUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<PitchDeckCreateWithoutAnalyticsInput, PitchDeckUncheckedCreateWithoutAnalyticsInput>
    where?: PitchDeckWhereInput
  }

  export type PitchDeckUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: PitchDeckWhereInput
    data: XOR<PitchDeckUpdateWithoutAnalyticsInput, PitchDeckUncheckedUpdateWithoutAnalyticsInput>
  }

  export type PitchDeckUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentVersion?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startup?: StartupUpdateOneRequiredWithoutPitchDeckNestedInput
    feedback?: FeedbackUpdateManyWithoutPitchDeckNestedInput
  }

  export type PitchDeckUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupId?: StringFieldUpdateOperationsInput | string
    currentVersion?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateManyWithoutPitchDeckNestedInput
  }

  export type StartupCreateWithoutMatchesInput = {
    id?: string
    companyName: string
    description?: string | null
    industry: string
    stage: string
    location: string
    foundedDate?: Date | string | null
    teamSize?: number | null
    valuation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutStartupInput
    pitchDeck?: PitchDeckCreateNestedOneWithoutStartupInput
  }

  export type StartupUncheckedCreateWithoutMatchesInput = {
    id?: string
    userId: string
    companyName: string
    description?: string | null
    industry: string
    stage: string
    location: string
    foundedDate?: Date | string | null
    teamSize?: number | null
    valuation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    pitchDeck?: PitchDeckUncheckedCreateNestedOneWithoutStartupInput
  }

  export type StartupCreateOrConnectWithoutMatchesInput = {
    where: StartupWhereUniqueInput
    create: XOR<StartupCreateWithoutMatchesInput, StartupUncheckedCreateWithoutMatchesInput>
  }

  export type InvestorCreateWithoutMatchesInput = {
    id?: string
    firmName: string
    description?: string | null
    investmentFocus?: InvestorCreateinvestmentFocusInput | string[]
    stagePreference?: InvestorCreatestagePreferenceInput | string[]
    checkSize: JsonNullValueInput | InputJsonValue
    location: string
    portfolioSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvestorInput
  }

  export type InvestorUncheckedCreateWithoutMatchesInput = {
    id?: string
    userId: string
    firmName: string
    description?: string | null
    investmentFocus?: InvestorCreateinvestmentFocusInput | string[]
    stagePreference?: InvestorCreatestagePreferenceInput | string[]
    checkSize: JsonNullValueInput | InputJsonValue
    location: string
    portfolioSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestorCreateOrConnectWithoutMatchesInput = {
    where: InvestorWhereUniqueInput
    create: XOR<InvestorCreateWithoutMatchesInput, InvestorUncheckedCreateWithoutMatchesInput>
  }

  export type CommunicationCreateWithoutMatchInput = {
    id?: string
    type: $Enums.CommunicationType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CommunicationUncheckedCreateWithoutMatchInput = {
    id?: string
    type: $Enums.CommunicationType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CommunicationCreateOrConnectWithoutMatchInput = {
    where: CommunicationWhereUniqueInput
    create: XOR<CommunicationCreateWithoutMatchInput, CommunicationUncheckedCreateWithoutMatchInput>
  }

  export type CommunicationCreateManyMatchInputEnvelope = {
    data: CommunicationCreateManyMatchInput | CommunicationCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type StartupUpsertWithoutMatchesInput = {
    update: XOR<StartupUpdateWithoutMatchesInput, StartupUncheckedUpdateWithoutMatchesInput>
    create: XOR<StartupCreateWithoutMatchesInput, StartupUncheckedCreateWithoutMatchesInput>
    where?: StartupWhereInput
  }

  export type StartupUpdateToOneWithWhereWithoutMatchesInput = {
    where?: StartupWhereInput
    data: XOR<StartupUpdateWithoutMatchesInput, StartupUncheckedUpdateWithoutMatchesInput>
  }

  export type StartupUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutStartupNestedInput
    pitchDeck?: PitchDeckUpdateOneWithoutStartupNestedInput
  }

  export type StartupUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialMetrics?: NullableJsonNullValueInput | InputJsonValue
    pitchDeck?: PitchDeckUncheckedUpdateOneWithoutStartupNestedInput
  }

  export type InvestorUpsertWithoutMatchesInput = {
    update: XOR<InvestorUpdateWithoutMatchesInput, InvestorUncheckedUpdateWithoutMatchesInput>
    create: XOR<InvestorCreateWithoutMatchesInput, InvestorUncheckedCreateWithoutMatchesInput>
    where?: InvestorWhereInput
  }

  export type InvestorUpdateToOneWithWhereWithoutMatchesInput = {
    where?: InvestorWhereInput
    data: XOR<InvestorUpdateWithoutMatchesInput, InvestorUncheckedUpdateWithoutMatchesInput>
  }

  export type InvestorUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    investmentFocus?: InvestorUpdateinvestmentFocusInput | string[]
    stagePreference?: InvestorUpdatestagePreferenceInput | string[]
    checkSize?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    portfolioSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestorNestedInput
  }

  export type InvestorUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    investmentFocus?: InvestorUpdateinvestmentFocusInput | string[]
    stagePreference?: InvestorUpdatestagePreferenceInput | string[]
    checkSize?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    portfolioSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationUpsertWithWhereUniqueWithoutMatchInput = {
    where: CommunicationWhereUniqueInput
    update: XOR<CommunicationUpdateWithoutMatchInput, CommunicationUncheckedUpdateWithoutMatchInput>
    create: XOR<CommunicationCreateWithoutMatchInput, CommunicationUncheckedCreateWithoutMatchInput>
  }

  export type CommunicationUpdateWithWhereUniqueWithoutMatchInput = {
    where: CommunicationWhereUniqueInput
    data: XOR<CommunicationUpdateWithoutMatchInput, CommunicationUncheckedUpdateWithoutMatchInput>
  }

  export type CommunicationUpdateManyWithWhereWithoutMatchInput = {
    where: CommunicationScalarWhereInput
    data: XOR<CommunicationUpdateManyMutationInput, CommunicationUncheckedUpdateManyWithoutMatchInput>
  }

  export type CommunicationScalarWhereInput = {
    AND?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
    OR?: CommunicationScalarWhereInput[]
    NOT?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
    id?: StringFilter<"Communication"> | string
    matchId?: StringFilter<"Communication"> | string
    type?: EnumCommunicationTypeFilter<"Communication"> | $Enums.CommunicationType
    content?: StringFilter<"Communication"> | string
    metadata?: JsonNullableFilter<"Communication">
    createdAt?: DateTimeFilter<"Communication"> | Date | string
  }

  export type MatchCreateWithoutCommunicationsInput = {
    id?: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startup: StartupCreateNestedOneWithoutMatchesInput
    investor: InvestorCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutCommunicationsInput = {
    id?: string
    startupId: string
    investorId: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutCommunicationsInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutCommunicationsInput, MatchUncheckedCreateWithoutCommunicationsInput>
  }

  export type MatchUpsertWithoutCommunicationsInput = {
    update: XOR<MatchUpdateWithoutCommunicationsInput, MatchUncheckedUpdateWithoutCommunicationsInput>
    create: XOR<MatchCreateWithoutCommunicationsInput, MatchUncheckedCreateWithoutCommunicationsInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutCommunicationsInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutCommunicationsInput, MatchUncheckedUpdateWithoutCommunicationsInput>
  }

  export type MatchUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startup?: StartupUpdateOneRequiredWithoutMatchesNestedInput
    investor?: InvestorUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupId?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyStartupInput = {
    id?: string
    investorId: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateWithoutStartupInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investor?: InvestorUpdateOneRequiredWithoutMatchesNestedInput
    communications?: CommunicationUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutStartupInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communications?: CommunicationUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutStartupInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyInvestorInput = {
    id?: string
    startupId: string
    score: number
    status?: $Enums.MatchStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startup?: StartupUpdateOneRequiredWithoutMatchesNestedInput
    communications?: CommunicationUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communications?: CommunicationUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyPitchDeckInput = {
    id?: string
    content: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateWithoutPitchDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateWithoutPitchDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutPitchDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationCreateManyMatchInput = {
    id?: string
    type: $Enums.CommunicationType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CommunicationUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
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