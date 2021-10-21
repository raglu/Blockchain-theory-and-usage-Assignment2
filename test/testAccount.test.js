const Account = artifacts.require("Account");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
*/
contract("Account", function (accounts) {

  it("Check balance", async function () {
    const account = await Account.deployed();

    const balance = (await account.checkBalance()).toNumber();

    return assert.equal(balance, 100);
  });

  it("Deposit money", async function () {
    const account = await Account.deployed();
    const amount = 20;

    const initialBalance = (await account.checkBalance()).toNumber();

    await account.deposit(amount);

    const endBalance = (await account.checkBalance()).toNumber();

    assert.equal(initialBalance, endBalance + amount);
  });

  it("Withdraw money", async function () {
    const account = await Account.deployed();
    const amount = 20;

    const initialBalance = (await account.checkBalance()).toNumber();

    await account.withdraw(amount);

    const endBalance = (await account.checkBalance()).toNumber();

    assert.equal(initialBalance, endBalance - amount);
  });
});
