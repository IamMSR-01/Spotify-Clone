import { songToggle } from "./songToggle";

const songsCont = document.querySelector("#songsCont");

const songsTemplate = document.querySelector("#songsTemplate");

// const audioPlayer = document.querySelector("#audio-palyer");

export const showsongs = (songs) => {
    if(!songs){
        return false;
    }

    songs.forEach((cursong) => {
        const {id, image, name, Artist, audio} = cursong;

        const songClone = document.importNode(songsTemplate.content, true);

        songClone.querySelector("#songValue").setAttribute("id", id);

        songClone.querySelector("#songImage").setAttribute("src", image);
        songClone.querySelector("#songName").textContent = name;
        songClone.querySelector("#Artist").textContent = Artist;
        songClone.querySelector(".song").setAttribute("data-src",audio);
        songClone.querySelector(".song").addEventListener("click", (event) =>{
            songToggle(event, id);
        });

        songsCont.append(songClone);
    })
}