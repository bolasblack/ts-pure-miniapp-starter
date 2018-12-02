/// <reference path="./wx-app.d.ts" />
/// <reference path="../../node_modules/@minapp/wx/typing/behavior.d.ts" />
/// <reference path="../../node_modules/@minapp/wx/typing/component.d.ts" />
/// <reference path="../../node_modules/@minapp/wx/typing/page.d.ts" />
/// <reference path="../../node_modules/@minapp/wx/typing/wx.d.ts" />

/// ------------------------ app.d.ts -----------------------------

interface AppExtraInfo {
  globalData: {
  }
}

declare namespace App {
  interface Options extends AppExtraInfo {
  }
}

interface App extends AppExtraInfo {
  onUserInfoReady?: (userInfo: wx.getUserInfo.ParamPropSuccessParam) => void
}

/// ------------------------ wx.d.ts -----------------------------

declare namespace wx {
  export interface SimpleJSON<V = any> {
    [key: string]: V
  }

  export namespace env {
    export const USER_DATA_PATH: string
  }

  export function base64ToArrayBuffer(base64: string): ArrayBuffer

  export function arrayBufferToBase64(arraybuffer: ArrayBuffer): string

  export function getStorageSync<T>(key: string): T | undefined

  export function getFileSystemManager(): FileSystemManager

  /** https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.html */
  export interface FileSystemManager {
    /** 判断文件/目录是否存在 */
    access(OBJECT: FileSystemManager.access.Param): void
    /** 创建目录 */
    mkdir(OBJECT: FileSystemManager.mkdir.Param): void
    /** 删除目录 */
    rmdir(OBJECT: FileSystemManager.rmdir.Param): void
    /** 写文件 */
    writeFile(OBJECT: FileSystemManager.writeFile.Param): void
  }

  /** https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.html */
  export namespace FileSystemManager {
    export namespace access {
      export interface Param {
        /** 要判断是否存在的文件/目录路径 */
        path: string
        /** 接口调用成功的回调函数 */
        success?: ParamSuccess
        /** 接口调用失败的回调函数 */
        fail?: ParamFail
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ParamComplete
      }

      export type ParamSuccess = (res: ParamSuccessParam) => void
      export interface ParamSuccessParam {
        errMsg: string
      }

      export type ParamFail = (res: ParamFailParam) => void
      export interface ParamFailParam extends ParamSuccessParam {
      }

      export type ParamComplete = (res: ParamCompleteParam) => void
      export interface ParamCompleteParam extends ParamSuccessParam {
      }
    }

    export namespace mkdir {
      export interface Param {
        /** 要创建的目录路径 */
        dirPath: string
        /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。 */
        recursive?: boolean
        /** 接口调用成功的回调函数 */
        success?: ParamSuccess
        /** 接口调用失败的回调函数 */
        fail?: ParamFail
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ParamComplete
      }

      export type ParamSuccess = (res: ParamSuccessParam) => void
      export interface ParamSuccessParam {
        errMsg: string
      }

      export type ParamFail = (res: ParamFailParam) => void
      export interface ParamFailParam extends ParamSuccessParam {
      }

      export type ParamComplete = (res: ParamCompleteParam) => void
      export interface ParamCompleteParam extends ParamSuccessParam {
      }
    }

    export namespace rmdir {
      export interface Param {
        /** 要删除的目录路径 */
        dirPath: string
        /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。 */
        recursive?: boolean
        /** 接口调用成功的回调函数 */
        success?: ParamSuccess
        /** 接口调用失败的回调函数 */
        fail?: ParamFail
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ParamComplete
      }

      export type ParamSuccess = (res: ParamSuccessParam) => void
      export interface ParamSuccessParam {
        errMsg: string
      }

      export type ParamFail = (res: ParamFailParam) => void
      export interface ParamFailParam extends ParamSuccessParam {
      }

      export type ParamComplete = (res: ParamCompleteParam) => void
      export interface ParamCompleteParam extends ParamSuccessParam {
      }
    }

    export namespace writeFile {
      export interface Param {
        /** 要写入的文件路径 */
        filePath: string
        /** 要写入的文本或二进制数据 */
        data: string | ArrayBuffer
        /** 指定写入文件的字符编码 */
        encoding?: 'ascii' | 'base64' | 'binary' | 'hex' | 'ucs2' | 'ucs-2' | 'utf16le' | 'utf-16le' | 'utf-8' | 'utf8' | 'latin1'
        /** 接口调用成功的回调函数 */
        success?: ParamSuccess
        /** 接口调用失败的回调函数 */
        fail?: ParamFail
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ParamComplete
      }

      export type ParamSuccess = (res: ParamSuccessParam) => void
      export interface ParamSuccessParam {
        errMsg: string
      }

      export type ParamFail = (res: ParamFailParam) => void
      export interface ParamFailParam extends ParamSuccessParam {
      }

      export type ParamComplete = (res: ParamCompleteParam) => void
      export interface ParamCompleteParam extends ParamSuccessParam {
      }
    }
  }

  export interface SelectorQuery {
    select(selector: string): NodesRef
  }

  export interface NodesRef {
    boundingClientRect<D extends SimpleJSON = SimpleJSON>(
      callback: (rect: NodesRef.BoundingClientRect<D>,
    ) => void): SelectorQuery
  }
  export namespace NodesRef {
    export interface BoundingClientRect<D extends SimpleJSON = SimpleJSON> {
      id: string
      dataset: D
      left: number
      right: number
      top: number
      bottom: number
      width: number
      height: number
    }
  }
}
