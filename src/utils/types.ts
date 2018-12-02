export type OneArgFn<T> = (arg: T) => any

export type FirstArg<T> = T extends (arg: (infer R)) => any ? R : never

export type PromiseType<T extends Promise<any>> = T extends Promise<infer R> ? R : never

export interface SimpleJSON<T = any> {
  [key: string]: T
}
