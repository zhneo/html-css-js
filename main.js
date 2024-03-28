let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");
let currentSongIndex = 0;

let musics = [
    {
        url: '/music/Скриптонит Привычка.mp3',
        artist: 'Скриптонит',
        title: 'Привычка',
        image: '/img/jah_khalib_ego.jpg'
    },
    {
        url: '/music/Скриптонит - Москва Любит.mp3',
        artist: 'Скриптонит',
        title: 'Москва Любит',
        image: '/img/Москва любит.png'
    },
    {
        url: '/music/skriptonit-shug.mp3',
        artist: 'Скриптонит',
        title: 'Шуг',
        image: '/img/Москва любит.png'
    }
];

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (song.paused) {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
}

setInterval(() => {
    progress.value = song.currentTime;
}, 500);

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= musics.length) {
        currentSongIndex = 0;
    }
    switchSong(currentSongIndex);
}

function switchSong(index) {
    song.src = musics[index].url;
    song.play();
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");

    document.getElementById('song_img').src = musics[index].image;
    document.getElementById('title').innerText = musics[index].title;
    document.getElementById('artist').innerText = musics[index].artist;
}

progress.oninput = function () {
    song.currentTime = progress.value;
}

function backSong() {
    if (song.currentTime > 3) {
        song.currentTime = 0;
    } else {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = musics.length - 1;
        }
        switchSong(currentSongIndex);
    }
}

function goToBack(icon) {
    if (icon === 'left') {
        window.location.href = '/playlist/2004/playlist_2004.html';
    }else if (icon === 'bars') {
        window.location.href = '#';
    }
}
