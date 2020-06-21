// Ether Config
const Web3 = require('web3');
const fs = require("fs");
const ganache = require("ganache-core");
const { resolve } = require('path');
const web3 = new Web3(ganache.provider());
// const web3 = new Web3("http://locahost:8545");

const bytecode = fs.readFileSync('contracts/contracts_voting_sol_Voting.bin').toString()
const abi = JSON.parse(fs.readFileSync('contracts/contracts_voting_sol_Voting.abi').toString())
const deployedContract = new web3.eth.Contract(abi)
var smartContract = {};
var adminAccount = null;
smartContract.deploy = false;

smartContract.adminAccount = adminAccount;

smartContract.newElection = (lstCandidates) => {
    return new Promise(resolve => {
        smartContract.getAccount()
            .then((accounts) => {
                adminAccount = accounts[0]
                deployedContract.deploy({
                    data: bytecode,
                    arguments: [lstCandidates.map(name => web3.utils.utf8ToHex(name))]
                }).send({
                    from: adminAccount,
                    gas: 6721975,
                    gasPrice: web3.utils.toWei('0.00000000003', 'ether')
                }).then((newContractInstance) => {
                    deployedContract.options.address = newContractInstance.options.address
                    console.log(newContractInstance.options.address)
                    smartContract.deploy = true;
                    resolve();
                });
            })
    })
}

smartContract.getListCandidates = () => {
    return deployedContract.methods.getCadidateList().call()
}

smartContract.addVoter = (address) => {
    return deployedContract.methods.addParticipant(address)
    .send({
        from: adminAccount,
        gas: 6721975,
        gasPrice: web3.utils.toWei('0.00000000003', 'ether')
    })
}

smartContract.getAccount = () => {
    return web3.eth.getAccounts();
}

smartContract.createAccount = () => {
    acc = web3.eth.accounts.create();
    return acc
}
smartContract.vote = (candidateIndex, fromAccount) => {
    return deployedContract.methods.vote(candidateIndex)
    .send({
        from: fromAccount,
        gas: 6721975,
        gasPrice: web3.utils.toWei('0.00000000003', 'ether')
    })
}

smartContract.getBallance = (address) => {
    return web3.eth.getBalance(address);
}

smartContract.getParticipantList = () => {
    return deployedContract.methods.getParticipantList().call()
}

smartContract.getSender = (fromAccount) => {
    return deployedContract.methods.getSender().call({from: fromAccount});
}

smartContract.hexToUtf8 = (hex) =>{
    return web3.utils.hexToUtf8(hex);
}

module.exports = {smartContract}