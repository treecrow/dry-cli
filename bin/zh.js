const program = require("commander");

program
  .version("1.0.0")
  .usage("<command> [项目名称]")
  .command("init", "创建新项目", { isDefault: true }) // run the subcommand if no other subcommand is specified
  .parse(process.argv);
