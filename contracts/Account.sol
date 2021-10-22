pragma solidity >=0.4.22 <0.9.0;

contract Account {
    address private accountAddress;
    uint256 private balance;

    constructor() public {
        balance = 100;
    }

    function deposit(uint256 amount) public {
        balance += amount;
    }

    function withdraw(uint256 amount) public {
        balance -= amount;
    }

    function checkBalance() public view returns (uint256) {
        return balance;
    }
}
