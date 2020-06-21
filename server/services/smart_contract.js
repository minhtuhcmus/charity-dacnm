// Ether Config
const Web3 = require('web3');
const fs = require("fs");
const ganache = require("ganache-core");
const web3 = new Web3(ganache.provider());

const bytecode = fs.readFileSync('contracts/contracts_voting_sol_Voting.bin').toString()
const abi = JSON.parse(fs.readFileSync('contracts/contracts_voting_sol_Voting.abi').toString())
const deployedContract = new web3.eth.Contract(abi)
var smartContract = {};

smartContract.getAccount = async () => {
    accs = await web3.eth.getAccounts();
    return accs
}

smartContract.createAccount = () => {
    acc = web3.eth.accounts.create();
    return acc
}

smartContract.setDefaultAccount = (address) => {
    web3.eth.defaultAccount = address;
}

smartContract.vote = async (candidateIndex) => {
    vote = await deployedContract.methods.vote(candidateIndex);
    return vote;
}

smartContract.getBallance = async (address) => {
    ballance = await web3.eth.getBalance(address);
    return ballance
}

module.exports = {smartContract}