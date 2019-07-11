# @treecrow/cli

> 前端开发脚手架

## 相关文档

- [nodejs 工具开发(一)](https://zhuanlan.zhihu.com/p/40223877)
- [基于 nodejs 的脚手架工具开发经历](https://zhuanlan.zhihu.com/p/31988855)

## 快速开始

```sh
npm install -g @treecrow/cli // 安装
npm create <project-name> // 创建项目
```

## cli 功能概览

| 功能                                     | 是否支持 |
| ---------------------------------------- | -------- |
| 同名文件夹检测                           | ✅       |
| 出现同名文件夹时选择合并还是重写目标目录 | ✅       |
| 项目模版的选择                           | ✅       |
| 项目支持特性的选择                       | ✅       |

## 模版项目配置项（模版项目可以根据下面的数据做渲染）

| key              | more                                                     |
| ---------------- | -------------------------------------------------------- |
| projectName      | 项目名                                                   |
| projectPath      | 项目路径                                                 |
| description      | 项目描述                                                 |
| downloadTempPath | 下载临时目录                                             |
| conflict         | 默认项目名与文件夹名有冲突时如何解决（merge、overwrite） |
| template         | 现在仅有 vue-bms 可选                                    |
| features         | 支持的特性（可选：pwa、mock）                            |
