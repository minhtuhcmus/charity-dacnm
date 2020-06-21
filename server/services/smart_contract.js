// Ether Config
const Web3 = require('web3');
const fs = require("fs");
const web3 = new Web3("http://localhost:8545");

const bytecode = fs.readFileSync('contracts/contracts_voting_sol_Voting.bin').toString()
const abi = JSON.parse(fs.readFileSync('contracts/contracts_voting_sol_Voting.abi').toString())
const deployedContract = new web3.eth.Contract(abi)

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

module.exports = {smartContract}