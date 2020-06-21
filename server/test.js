const Web3 = require('web3');
const web3 = new Web3("http://localhost:8545");
const fs = require("fs");

bytecode = fs.readFileSync('contracts/contracts_voting_sol_Voting.bin').toString()
abi = JSON.parse(fs.readFileSync('contracts/contracts_voting_sol_Voting.abi').toString())

deployedContract = new web3.eth.Contract(abi)
listOfCandidates = ['Rama', 'Nick', 'Jose']
deployedContract.deploy({
            data: bytecode,
            arguments: [listOfCandidates.map(name => web3.utils.utf8ToHex(name))]
        }).send({
        from: '0x2400ccFc76E38199d78626B39719E087028A73F4',
        gas: 6721975,
        gasPrice: web3.utils.toWei('0.00000000003', 'ether')
    }).then((newContractInstance) => {
        deployedContract.options.address = newContractInstance.options.address
        console.log(newContractInstance.options.address)
    });



