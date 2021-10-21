const Migrations = artifacts.require("Migrations");
const Account = artifacts.require("Account");
const Bank = artifacts.require("Bank");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Account);
  deployer.deploy(Bank);
};
