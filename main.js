let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");

let playIcon = document.getElementById("playIcon");
let forwardIcon = document.getElementById("forwardIcon");
let currentSongIndex = 0;

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (controlIcon.classList.contains("fa-pause")) {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    } 
    else {
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;    
    } , 500);
}

function nextSong(){
    currentSongIndex++;
    if (currentSongIndex >= song.children.length) {
        currentSongIndex = 0;
    }
    switchSong(currentSongIndex);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
}


