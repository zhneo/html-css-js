let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");

let forwardIcon = document.getElementById("forwardIcon");
let currentSongIndex = 0;

let musics =['/music/Скриптонит - Москва Любит.mp3' , '/music/ASAP Rocky feat. Skepta - Praise The Lord.mp3']

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

function switchSong(index) {
    song.children[index].selected = true;
    song.load();
    song.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
}

progress.oninput = function() {
    song.currentTime = progress.value;
}


//кнопки назад и  меню

function goToBack(icon) {
    if (icon === 'left') {
        window.location.href = '/main_page/main_menu.html';
    }else if (icon === 'bars') {
        window.location.href = '#'; // Замените 'your_bars_page_url.html' на URL вашей страницы
    }
}