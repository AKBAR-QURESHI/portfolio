console.log("welcome to gana.com");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById("");

let songs = [
          { songname: "Beshram Rang", filepath: "songs/1.mp3", covers: "" },
          { songname: "Beshram Rang", filepath: "songs/2.mp3", covers: "" },
          { songname: "Beshram Rang", filepath: "songs/1.mp3", covers: "" },
          { songname: "Beshram Rang", filepath: "songs/1.mp3", covers: "" },
          { songname: "Beshram Rang", filepath: "songs/1.mp3", covers: "" }
];


masterplay.addEventListener('click' ,()=> {
     if(audioElement.paused || audioElement.currentTime<=0){
          audioElement.play();
          masterplay.classList.remove('play loading');
          masterplay.classList.add('play playing');
     }
     else{
          audioElement.pause();
          masterplay.classList.remove('play playing');
          masterplay.classList.add('play loading');
          
     }
})