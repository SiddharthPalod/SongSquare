// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract SongSquare{
    uint256 public songCount= 0;
    
    struct Song{
        uint id;
        string name;
        address payable artist;
        string link;
        uint totalTipped;
    }
    
    mapping(uint256=>Song) public Songs;
    mapping(address=>uint256[]) public songsByArtist;

    event SongAdded(
        uint id,
        string name,
        address artist,
        string link,
        uint totalTipped
    );

    event Tipped(
        uint id,
        address artist,
        uint totalTipped
    );

    constructor(){
    }

    function addSong(string memory _name, string memory _link) external {
        songCount++;
        Songs[songCount] = Song(songCount, _name, payable(msg.sender), _link, 0);
        songsByArtist[msg.sender].push(songCount);
        emit SongAdded(songCount,_name,msg.sender,_link,0);
    }

    function tipArtist(uint256 _id) payable external {
        require(_id>0 && _id <= songCount);
        require(msg.sender != Songs[_id].artist);
        require(msg.value>0);

        Song memory _song = Songs[_id];
        address payable _artist = _song.artist;
        _artist.transfer(msg.value);
        _song.totalTipped = _song.totalTipped + msg.value;
        Songs[_id] = _song;
        emit Tipped(_id,msg.sender,_song.totalTipped);
    }
}