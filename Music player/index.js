data = [
    {
        id: "1",
        name: "Đừng làm trái tim anh đau",
        author: "Sơn tùng",
        img: "1.jpeg",
        src: "./1.mp3",
    },
    {
        id: "2",
        name: "Chúng ta của tương lai",
        author: "Sơn tùng",
        img: "2.jpeg",
        src: "./2.mp3",
    },
];
let index = 0;
let pauseCLick = true;
const box = document.querySelector(".box");
function DisplayMedia(index) {
    let content = document.createElement("div");
    content.className = "content";
    let img = document.createElement("img");
    img.className = "img";
    img.src = data[index].img;
    let p1 = document.createElement("p");
    p1.className = "title";
    p1.innerHTML = data[index].name;
    let p2 = document.createElement("p");
    p2.className = "desc";
    p2.innerHTML = data[index].author;
    content.appendChild(img);
    content.appendChild(p1);
    content.appendChild(p2);
    box.appendChild(content);
}
function ProgressBar(index) {
    let music = document.createElement("div");
    music.className = "music";
    let audio = document.createElement("audio");
    audio.setAttribute("autoplay", "");
    audio.className = "audio";
    let source = document.createElement("source");
    source.src = data[index].src;
    source.setAttribute("type", "audio/mpeg");
    audio.appendChild(source);
    let time = document.createElement("div");
    time.className = "time";
    let start = document.createElement("span");
    start.className = "start";
    let range = document.createElement("div");
    range.className = "range";
    let line = document.createElement("div");
    line.className = "line";
    range.appendChild(line);
    let end = document.createElement("span");
    end.className = "end";
    time.appendChild(start);
    time.appendChild(range);
    time.appendChild(end);
    music.appendChild(audio);
    music.appendChild(time);
    box.appendChild(music);
}
function RunningProgressBar() {
    let audio = document.querySelector(".audio");
    let startText = document.querySelector(".start");
    let endText = document.querySelector(".end");
    let lineProgress = document.querySelector(".line");
    let duration;
    pauseCLick = true;
    audio.addEventListener("loadedmetadata", (e) => {
        duration = audio.duration;
        endText.innerHTML =
            Math.floor(duration / 60) + ":" + Math.floor(duration % 60);
    });
    startText.innerHTML = "0:00";
    audio.addEventListener("timeupdate", (e) => {
        seconds = audio.currentTime;
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = Math.floor(seconds % 60);
        startText.innerHTML = `${minutes}:${
            secondsLeft < 10 ? "0" : ""
        }${secondsLeft}`;
        lineProgress.style.width = `${(seconds / audio.duration) * 100}%`;
    });
}
function NextSong() {
    let backward = document.querySelector(".backward");
    let pause = document.querySelector(".pause");
    let forward = document.querySelector(".forward");
    index = 0;
    DisplayMedia(index);
    ProgressBar(index);
    RunningProgressBar();
    backward.addEventListener("click", (e) => {
        box.innerHTML = '';
        index--;
        if (index < 0) {
            index = 0;
            DisplayMedia(0);
            ProgressBar(0);
            RunningProgressBar();
        } else {
            DisplayMedia(index);
            ProgressBar(index);
            RunningProgressBar();
        }
    });
    forward.addEventListener("click", (e) => {
        box.innerHTML = '';
        index++;
        if (index === data.length) {
            index--;
            DisplayMedia(index);
            ProgressBar(index);
            RunningProgressBar();
        } else {
            DisplayMedia(index);
            ProgressBar(index);
            RunningProgressBar();
        }
    });
    pause.addEventListener('click',(e) => {
        let audio = document.querySelector(".audio");
        if (!pauseCLick) {
            pauseCLick = true;
            pause.src = './pause-solid.svg';
            audio.play();
        }
        else {
            pauseCLick = false;
            pause.src = './play-solid.svg';
            audio.pause();
        }
    })
}
function SeekAudio () {
    let range = document.querySelector('.range');
    range.addEventListener('click',(e)=> {
        console.log(e);
    })
}
SeekAudio();
// NextSong();
