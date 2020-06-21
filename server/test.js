var {smartContract} = require("./services/smart_contract")

smartContract.newElection(['A', 'B'])
    .then((d) => {
        console.log(smartContract.adminAccount)
        console.log(d)
        smartContract.getListCandidates()
            .then((re)=>{
                smartContract.getAccount()
                .then((acc) => {
                        smartContract.addVoter(acc[1])
                        smartContract.getParticipantList()
                            .then(console.log);
                        smartContract.vote(1,acc[1])
                            .then(() => {
                                smartContract.getListCandidates()
                                    .then(console.log);
                            });

                    })
                
        })
    })
            
            

// const Web3 = require('web3');
// const web3 = new Web3("http://localhost:8545");
// const fs = require("fs");

// bytecode = fs.readFileSync('contracts/contracts_voting_sol_Voting.bin').toString()
// abi = JSON.parse(fs.readFileSync('contracts/contracts_voting_sol_Voting.abi').toString())

// deployedContract = new web3.eth.Contract(abi)
// listOfCandidates = ['Rama', 'Nick', 'Jose']
// deployedContract.deploy({
//             data: bytecode,
//             arguments: [listOfCandidates.map(name => web3.utils.utf8ToHex(name))]
//         }).send({
//         from: '0x8e2F5cc783acb6D1f3ad1FD0e9957D8292f621CD',
//         gas: 6721975,
//         gasPrice: web3.utils.toWei('0.00000000003', 'ether')
//     }).then((newContractInstance) => {
//         deployedContract.options.address = newContractInstance.options.address
//         console.log(newContractInstance.options.address)
//     });

// defaultAccount = "0x78dC781cb52b5ed474cD825D47775951681baAD8"
// deployedContract.methods.vote(1).call({from: defaultAccount},console.log)
// deployedContract.methods.getCadidateList().call(console.log)
// deployedContract.methods.getParticipantList().call().then(console.log)
// deployedContract.methods.addParticipant(defaultAccount).call({from: "0x8e2F5cc783acb6D1f3ad1FD0e9957D8292f621CD"}).then(console.log)