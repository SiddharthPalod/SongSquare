import Home1 from "./Home1";
import Home2 from "./Home2";
import LatestPlay from "./LatestPlay";
import PopularPlay from "./PopularPlay";
import Navbar from "./Navbar"
import {proxy} from "valtio"
import ArtistMusic from "./ArtistMusic";
import MusicPlayer from "./MusicPlayer";

const state = proxy({
    home: true,
    music: true,
    playlist: false,
    user: false,
    artist: false,
    searchon: false,
});

export {Navbar , state,
    Home1,Home2,
    LatestPlay,PopularPlay,
    ArtistMusic,MusicPlayer,
};