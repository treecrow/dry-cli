# zh-cli

> 前端开发脚手架

## 相关文档

- [nodejs 工具开发(一)](https://zhuanlan.zhihu.com/p/40223877)
- [基于 nodejs 的脚手架工具开发经历](https://zhuanlan.zhihu.com/p/31988855)
- [vue-cli 是如何工作的](https://segmentfault.com/a/1190000009803941)

## 项目目录

| 目录 | more         |
| ---- | ------------ |
| /bin | 命令执行文件 |
| /lib | 工具模块     |

## cli 功能

| command                            | more                                     |
| ---------------------------------- | ---------------------------------------- |
| create <projectName>               | 项目初始化 项目名                        |
| 目标目录已存在，，如何处理（多选） | 重写、合并、取消                         |
| 选择项目需要的特性（多选）         | pwa 、 TypeScript 、 UnitTesting 、 mock |
| 选择 path 模式（单选）             | history / hash                           |
| output.publicPath                  | 项目静态资源放置的目录                   |
