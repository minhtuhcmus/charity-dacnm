node_modules/.bin/solcjs --bin --abi contracts/voting.sol
mv -f contracts_voting_sol_Voting.abi ./contracts/
mv -f contracts_voting_sol_Voting.bin ./contracts/
