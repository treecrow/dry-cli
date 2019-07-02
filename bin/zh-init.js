#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const glob = require("glob");

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

// 确定项目根路径
let rootName = "";
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
  rootName = projectName;
} else if (curCatalog === projectName) {
  rootName = ".";
} else {
  rootName = projectName;
}

download(rootName)
  .then(target => console.log(target))
  .catch(err => console.log(err));
