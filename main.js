import './style.css';

import songs from './api/songs.json';
import { showsongs } from './songs';

import moreSongs from './api/moreSongs.json';
import { showMoreSongs } from './moreSongs';


const showAllSongs = document.querySelector("#showAllSongs");
showsongs(songs);
showMoreSongs(moreSongs);

const circle1 = document.querySelector("#circle1");
const circle2 = document.querySelector("#circle2");
const circle3 = document.querySelector("#circle3");
const circle4 = document.querySelector("#circle4");
const circle5 = document.querySelector("#circle5");
const circle6 = document.querySelector("#circle6");
const circle7 = document.querySelector("#circle7");

const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");
const card5 = document.querySelector("#card5");
const card6 = document.querySelector("#card6");
const card7 = document.querySelector("#card7");





card1.addEventListener("mouseenter", function () {
  circle1.style.display = "block";
});
card1.addEventListener("mouseleave", function () {
  circle1.style.display = "none";
});
card2.addEventListener("mouseenter", function () {
  circle2.style.display = "block";
});
card2.addEventListener("mouseleave", function () {
  circle2.style.display = "none";
});
card3.addEventListener("mouseenter", function () {
  circle3.style.display = "block";
});
card3.addEventListener("mouseleave", function () {
  circle3.style.display = "none";
});
card4.addEventListener("mouseenter", function () {
  circle4.style.display = "block";
});
card4.addEventListener("mouseleave", function () {
  circle4.style.display = "none";
});
card5.addEventListener("mouseenter", function () {
  circle5.style.display = "block";
});
card5.addEventListener("mouseleave", function () {
  circle5.style.display = "none";
});
card6.addEventListener("mouseenter", function () {
  circle6.style.display = "block";
});
card6.addEventListener("mouseleave", function () {
  circle6.style.display = "none";
});
card7.addEventListener("mouseenter", function () {
  circle7.style.display = "block";
});
card7.addEventListener("mouseleave", function () {
  circle7.style.display = "none";
});


document.addEventListener('DOMContentLoaded', () => {
  const songCards = document.querySelectorAll('.song');
  const audioPlayer = document.getElementById('audio-player');

  songCards.forEach(song => {
    song.addEventListener('click', () => {
      const songSrc = song.getAttribute('data-src');
      audioPlayer.src = songSrc;
      audioPlayer.play();

    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const moreSongCards = document.querySelectorAll('.moreSong');
  const audioPlayer = document.getElementById('audio-player');

  moreSongCards.forEach(moreSong => {
    moreSong.addEventListener('click', () => {
      const songSrc = moreSong.getAttribute('data-url');
      audioPlayer.src = songSrc;
      audioPlayer.play();

    });
  });
});