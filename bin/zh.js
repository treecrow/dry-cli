const program = require("commander");

program
  .version("1.0.0")
  .command("init", "创建新项目")
  .parse(process.argv);
