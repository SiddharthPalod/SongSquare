import Home1 from "./Home1";
import Home2 from "./Home2";
import LatestPlay from "./LatestPlay";
import Navbar from "./Navbar"
import {proxy} from "valtio"
import PopularPlay from "./PopularPlay";

const state = proxy({
    home: true,
    music: false,
    playlist: false,
    user: false,
    artist: false,
});

export {Navbar , state,
    Home1,Home2,
    LatestPlay,PopularPlay,
};