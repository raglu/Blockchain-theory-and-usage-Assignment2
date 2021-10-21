const Bank = artifacts.require("Bank");

contract('Bank', (accounts) => {
  it('should put 10000 Bank in the first account', async () => {
    const bankInstance = await Bank.deployed();
    const balance = await bankInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });
  it('should send coin correctly', async () => {
    const bankInstance = await Bank.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account.
    const accountOneStartingBalance = (await bankInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await bankInstance.getBalance.call(accountTwo)).toNumber();

    // Make transaction from first account to second.
    const amount = 10;
    await bankInstance.sendCoin(accountTwo, amount, { from: accountOne });

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = (await bankInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await bankInstance.getBalance.call(accountTwo)).toNumber();


    assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
  });
});
