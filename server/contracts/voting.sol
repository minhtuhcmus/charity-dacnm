// SPDX-License-Identifier: MIT
pragma solidity ^0.6.4;
pragma experimental ABIEncoderV2;

contract Voting {
  address public chairperson;
  struct Voter  {
    bool voted;
    uint vote;
  }
  struct Candidate {
    bytes32 name;
    uint voteCount;
  }
  Candidate[] public candidates;
  address[] public participants;
  mapping(address => Voter) public voters;

  constructor(bytes32[] memory candidateName) public {
    chairperson = msg.sender;
    for (uint i = 0; i < candidateName.length; i++){
      candidates.push(Candidate({name: candidateName[i], voteCount: 0}));
    }
    // participants.push(chairperson);
  }

  function addParticipant(address participant) public {
    require(
      msg.sender == chairperson,
      "Only chairperson can add participant."
    );
    require (
      !validParticipant(participant),
      "Participant is exist."
    );
    participants.push(participant);
  }

  function validParticipant(address participant) private view returns (bool) {
    for(uint i = 0; i < participants.length; i++) {
      if (participants[i] == participant) {
        return true;
      }
    }
    return false;
  }

  function getSender () public view returns (address){
        return msg.sender; // just return msg.sender
  }

  function vote(uint candidateIndex) public{
    Voter storage sender = voters[msg.sender];
    require(validParticipant(msg.sender), "Participant have not permission.");
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

  function getParticipantList() public view returns (address[] memory){
    return participants;
  }
}