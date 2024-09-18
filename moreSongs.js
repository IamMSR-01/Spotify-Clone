import { moreSongToggle } from "./moreSongToggle";

const moreSongCont = document.querySelector("#moreSongCont");

const songsTemplate = document.querySelector("#moreSongsTemplate");



export const showMoreSongs = (moreSongs) => {

   moreSongs.forEach((curmoreSong) => {
      const { id, image, name, Artist, Audio } = curmoreSong

      const moreSongClone = document.importNode(songsTemplate.content, true);

      moreSongClone.querySelector("#MoreSongImage").setAttribute("src", image);
      moreSongClone.querySelector("#moreSongName").textContent = name;
      moreSongClone.querySelector("#moreArtist").textContent = Artist;
      moreSongClone.querySelector(".moreSong").setAttribute("id", id);
      moreSongClone.querySelector(".moreSong").setAttribute("data-url", Audio);

      moreSongClone.querySelector(".moreSong").addEventListener("click", (event) => {
         moreSongToggle(event, id);
      });


      moreSongCont.append(moreSongClone);


   })

}