# ts-pure-miniapp-starter

用 TypeScript 来写纯的小程序代码

## 构建代码

```
yarn webpack         # 构建代码
yarn webpack --watch # 监听文件变化，自动重新构建
```

## 工作流程

* 开始工作
    1. 执行构建代码的命令
    2. 用微信开发者工具打开 `./dist`
* 添加小程序的组件等（参考 `vendors/mp_canvas_drawer`
    1. 用 [git-subrepo](https://github.com/ingydotnet/git-subrepo) 之类的工具把组件项目克隆到 `vendors` 目录下
    2. 添加软链接到 `src/components` 目录下
