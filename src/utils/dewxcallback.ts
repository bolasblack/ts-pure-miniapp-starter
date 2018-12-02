import { OneArgFn } from './types'

type CallbackObj<T> = {
  success?: OneArgFn<T>
  fail?: OneArgFn<any>
  complete?: OneArgFn<any>
}

export type CleanCallbacks<R extends CallbackObj<any>> = {
  [K in keyof R]: K extends 'success' | 'fail' | 'complete' ? never : R[K]
}

export type UnwrapResp<P> = P extends CallbackObj<infer R> ? R : never

export function dewxcallback<P extends CallbackObj<any>>(fn: OneArgFn<P>, receiver: any) {
  return function(opts: CleanCallbacks<P>) {
    return new Promise<UnwrapResp<P>>((resolve, reject) => {
      fn.call(receiver, Object.assign({}, opts, {
        success(resp: any) { resolve(resp) },
        fail(err: any) { reject(err) },
      }))
    })
  }
}
