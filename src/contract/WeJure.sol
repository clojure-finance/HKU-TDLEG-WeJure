// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

contract WeJure {
    struct Picture {
        string picHash; //ipfs hash of picture
        string description;
        address user;
    }

    uint public picsLength = 0; // length of map
    mapping(uint => Picture) public pics;

    function setPicture (string memory _ipfsHash, string memory _description) public {
        require(bytes(_ipfsHash).length > 0);
        require(bytes(_description).length > 0);
        
        pics[picsLength] = Picture(_ipfsHash, _description, msg.sender);
        picsLength++;
    }

    struct User {
        string name; // name of user
        string picHash; // ipfs hash of profile picture
    }

    mapping(address => User) public profiles;

    function setProfile (string memory _name, string memory _ipfsHash) public {
        require(bytes(_name).length > 0);
        require(bytes(_ipfsHash).length > 0);

        profiles[msg.sender] = User(_name, _ipfsHash);
    }
}