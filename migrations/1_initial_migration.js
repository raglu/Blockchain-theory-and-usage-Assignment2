const Migrations = artifacts.require("Migrations");
const Account = artifacts.require("Account");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Account);
};
