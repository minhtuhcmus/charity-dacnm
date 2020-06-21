// SPDX-License-Identifier: MIT
pragma solidity ^0.6.4;
pragma experimental ABIEncoderV2;

contract Voting {
  address public chairperson;
  struct Voter  {
    bool voted;
    uint vote;
    bool isValue;
  }
  struct Candidate {
    bytes32 name;
    uint voteCount;
  }
  Candidate[] public candidates;
  mapping(address => Voter) public voters;

  constructor(bytes32[] memory candidateName) public {
    chairperson = msg.sender;
    for (uint i = 0; i < candidateName.length; i++){
      candidates.push(Candidate({name: candidateName[i], voteCount: 0}));
    }
    voters[chairperson].voted = false;
    voters[chairperson].isValue = true;
  }

  function addParticipant(address participant) public {
    require(
      msg.sender == chairperson,
      "Only chairperson can add participant."
    );
    require (
      !voters[participant].isValue,
      "Participant is exist."
    );
    voters[participant].voted = false;
    voters[participant].isValue = true;
  }

  function vote(uint candidateIndex) public {
    Voter storage sender = voters[msg.sender];
    require(sender.isValue, "Participant have not permission.");
    require(!sender.voted, "Already voted");
    require(candidateIndex < candidates.length, "Candidate uncorrect");
    sender.voted = true;
    sender.vote = candidateIndex;
    candidates[candidateIndex].voteCount += 1;
  }

  function winningCandidate() public view returns (uint winningCadidate_) {
    uint winningVoteCount = 0;
    for (uint p = 0; p < candidates.length; p++) {
            if (candidates[p].voteCount > winningVoteCount) {
                winningVoteCount = candidates[p].voteCount;
                winningCadidate_ = p;
            }
        }
  }

  function winnerName() public view
            returns (bytes32 winnerName_)
    {
        winnerName_ = candidates[winningCandidate()].name;
    }

  function getCadidateList() public view returns (Candidate[] memory){
    return candidates;
  }
}