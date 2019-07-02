#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const glob = require("glob");
const inquirer = require("inquirer");

const download = require("../lib/download");

// 初始化 commander
const program = require("commander");
program
  .usage("<project-name>")
  .version("0.0.1")
  .parse(process.argv);

// 当前所在目录名
let curCatalog = path.basename(process.cwd());
// 项目名称 (必传)
let projectName = program.args[0];
if (!projectName) {
  program.help();
  return;
}

// 是否进行下一步（确定项目根路径）
let next;
const list = glob.sync("*");
if (list.length) {
  if (
    list.filter(name => {
      const fileName = path.resolve(process.cwd(), path.join(".", name));
      const isDir = fs.statSync(fileName).isDirectory();
      return name.indexOf(projectName) !== -1 && isDir;
    }).length !== 0
  ) {
    console.log(`项目 ${projectName} 已经存在`);
    return;
  }
  next = Promise.resolve(projectName);
} else if (curCatalog === projectName) {
  next = inquirer
    .prompt([
      {
        name: "buildInCurrent",
        message:
          "当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？",
        type: "confirm",
        default: true
      }
    ])
    .then(answer => {
      return Promise.resolve(answer.buildInCurrent ? "." : projectName);
    });
} else {
  next = Promise.resolve(projectName);
}

// 下一步，下载模版
if (next) {
  next
    .then(projectRoot => {
      if (projectRoot !== ".") {
        fs.mkdirSync(projectRoot);
      }
      return download(projectRoot).then(target => {
        return {
          name: projectRoot, // 项目的名称
          root: projectRoot,
          downloadTemp: target
        };
      });
    })
    .then(context => {
      return inquirer
        .prompt([
          {
            name: "projectName",
            message: "项目的名称",
            default: context.name
          },
          {
            name: "projectVersion",
            message: "项目的版本号",
            default: "1.0.0"
          },
          {
            name: "projectDescription",
            message: "项目的简介",
            default: `A project named ${context.name}`
          }
        ])
        .then(answers => answers);
    })
    .then(context => {
      // 整合模版渲染信息
      console.log(context);
    })
    .catch(err => {
      console.error(err);
    });
}
