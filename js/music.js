/*==========================================================
    BLUE MEMORIES
    MUSIC.JS
    PART 1
==========================================================*/


/*==============================
        LOGIN CHECK
==============================*/

if (localStorage.getItem("blueMemoriesLogin") !== "true") {

    window.location.href = "index.html";

}



/*==============================
        ELEMENT
==============================*/

const audio = document.getElementById("audio");

const playBtn = document.getElementById("play");

const cover = document.querySelector(".cover");

const progress = document.querySelector(".progress");

const progressBar = document.getElementById("progressBar");

const currentTime = document.getElementById("current");

const duration = document.getElementById("duration");



/*==============================
        AUDIO SOURCE
==============================*/

// Pastikan file berada di folder:
// music/about-you-1975.mp3



audio.preload = "metadata";



/*==============================
        PLAY / PAUSE
==============================*/

let isPlaying = false;

function playMusic() {

    audio.play();

    isPlaying = true;

    playBtn.innerHTML = "❚❚";

    cover.classList.add("playing");

}

function pauseMusic() {

    audio.pause();

    isPlaying = false;

    playBtn.innerHTML = "▶";

    cover.classList.remove("playing");

}

playBtn.addEventListener("click", () => {

    if (isPlaying) {

        pauseMusic();

    } else {

        playMusic();

    }

});



/*==============================
        FORMAT TIME
==============================*/

function formatTime(time) {

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

}



/*==============================
        DURATION
==============================*/

audio.addEventListener("loadedmetadata", () => {

    duration.textContent = formatTime(audio.duration);

});



/*==============================
        PROGRESS BAR
==============================*/

audio.addEventListener("timeupdate", () => {

    const percent =

        (audio.currentTime / audio.duration) * 100;

    progressBar.style.width = percent + "%";

    currentTime.textContent =

        formatTime(audio.currentTime);

});



/*==============================
        SONG FINISHED
==============================*/

audio.addEventListener("ended", () => {

    pauseMusic();

    audio.currentTime = 0;

    progressBar.style.width = "0%";

    currentTime.textContent = "0:00";

});



/*==============================
        CLICK PROGRESS
==============================*/

progress.addEventListener("click", (e) => {

    const width = progress.clientWidth;

    const clickX = e.offsetX;

    const durationAudio = audio.duration;

    audio.currentTime =

        (clickX / width) * durationAudio;

});



/*==============================
        ERROR
==============================*/

audio.addEventListener("error", () => {

    console.warn("Audio tidak ditemukan.");

    console.warn("Pastikan file berada di:");

    console.warn("music/about-you-1975.mp3");

});



/*==============================
        CONSOLE
==============================*/

console.clear();

console.log(

    "%cBlue Memories",

    "color:#67b9ff;font-size:28px;font-weight:bold"

);

console.log(

    "%cNow Playing : About You",

    "color:#d7efff"

);

/*==========================================================
    BLUE MEMORIES
    MUSIC.JS
    PART 2
==========================================================*/


/*==============================
        LOCAL STORAGE
==============================*/

const STORAGE_TIME = "blueMemories_music_time";
const STORAGE_PLAY = "blueMemories_music_playing";
const STORAGE_VOLUME = "blueMemories_music_volume";



/*==============================
        RESTORE VOLUME
==============================*/

if(localStorage.getItem(STORAGE_VOLUME)){

    audio.volume = parseFloat(
        localStorage.getItem(STORAGE_VOLUME)
    );

}else{

    audio.volume = 0.8;

}



/*==============================
        RESTORE TIME
==============================*/

audio.addEventListener("loadedmetadata",()=>{

    const savedTime = parseFloat(
        localStorage.getItem(STORAGE_TIME)
    );

    if(!isNaN(savedTime)){

        audio.currentTime = savedTime;

    }

});



/*==============================
        SAVE TIME
==============================*/

setInterval(()=>{

    if(!audio.paused){

        localStorage.setItem(

            STORAGE_TIME,

            audio.currentTime

        );

    }

},1000);



/*==============================
        SAVE PLAY STATE
==============================*/

audio.addEventListener("play",()=>{

    localStorage.setItem(

        STORAGE_PLAY,

        "true"

    );

});



audio.addEventListener("pause",()=>{

    localStorage.setItem(

        STORAGE_PLAY,

        "false"

    );

});



/*==============================
        AUTO RESTORE
==============================*/

window.addEventListener("load",()=>{

    const state =

    localStorage.getItem(STORAGE_PLAY);

    if(state==="true"){

        playBtn.innerHTML="▶";

        isPlaying=false;

    }

});



/*==============================
        VOLUME SLIDER
==============================*/

const volumeSlider =

document.getElementById("volume");

if(volumeSlider){

    volumeSlider.value =

    audio.volume;

    volumeSlider.addEventListener(

    "input",

    ()=>{

        audio.volume =

        volumeSlider.value;

        localStorage.setItem(

        STORAGE_VOLUME,

        audio.volume

        );

    });

}



/*==============================
        SPACE PLAY
==============================*/

document.addEventListener(

"keydown",

(e)=>{

    if(

        e.code==="Space" &&

        e.target.tagName!=="INPUT" &&

        e.target.tagName!=="TEXTAREA"

    ){

        e.preventDefault();

        playBtn.click();

    }

});



/*==============================
        SEEK WITH ARROWS
==============================*/

document.addEventListener(

"keydown",

(e)=>{

    if(e.code==="ArrowRight"){

        audio.currentTime +=5;

    }

    if(e.code==="ArrowLeft"){

        audio.currentTime -=5;

    }

});



/*==============================
        UPDATE TITLE
==============================*/

document.title=

"🎵 About You | Blue Memories";



/*==============================
        PREVENT NEGATIVE
==============================*/

audio.addEventListener(

"timeupdate",

()=>{

    if(audio.currentTime<0){

        audio.currentTime=0;

    }

});



/*==============================
        PAGE HIDDEN
==============================*/

document.addEventListener(

"visibilitychange",

()=>{

    if(document.hidden){

        localStorage.setItem(

        STORAGE_TIME,

        audio.currentTime

        );

    }

});

/*==========================================================
    BLUE MEMORIES
    MUSIC.JS
    PART 3 (FINAL)
==========================================================*/


/*==============================
        PARALLAX CLOUD
==============================*/

const clouds = document.querySelectorAll(".cloud");

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    clouds.forEach((cloud,index)=>{

        cloud.style.transform =
        `translateY(${y*(0.03*(index+1))}px)`;

    });

});



/*==============================
        SCROLL ANIMATION
==============================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(

".player,.lyrics,.quote,.hero"

).forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});



/*==============================
        BACK TO TOP
==============================*/

const topButton = document.createElement("button");

topButton.className="topButton";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("showTop");

    }else{

        topButton.classList.remove("showTop");

    }

});



/*==============================
        ACTIVE NAVBAR
==============================*/

document.querySelectorAll("nav a")

.forEach(link=>{

    if(link.href===window.location.href){

        link.style.color="#dff6ff";

        link.style.fontWeight="600";

    }

});



/*==============================
        FOOTER YEAR
==============================*/

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=

`Blue Memories © ${new Date().getFullYear()}`;

}



/*==============================
        COVER EFFECT
==============================*/

audio.addEventListener("play",()=>{

    cover.style.transform="scale(1.03)";

});

audio.addEventListener("pause",()=>{

    cover.style.transform="scale(1)";

});



/*==============================
        FLOATING PARTICLES
==============================*/

function createParticle(){

    const particle=document.createElement("div");

    particle.className="musicParticle";

    particle.style.left=Math.random()*100+"vw";

    particle.style.animationDuration=

    (5+Math.random()*5)+"s";

    particle.style.opacity=

    Math.random();

    particle.style.width=

    particle.style.height=

    (5+Math.random()*12)+"px";

    document.body.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },10000);

}

let particleInterval;

audio.addEventListener("play",()=>{

    particleInterval=setInterval(createParticle,350);

});

audio.addEventListener("pause",()=>{

    clearInterval(particleInterval);

});



/*==============================
        END MESSAGE
==============================*/

audio.addEventListener("ended",()=>{

    setTimeout(()=>{

        alert(

"Thank you for listening 💙"

);

    },800);

});



/*==============================
        WINDOW RESIZE
==============================*/

window.addEventListener("resize",()=>{

    progressBar.style.width=

    (audio.currentTime/audio.duration)*100+"%";

});



/*==============================
        DOUBLE CLICK COVER
==============================*/

cover.addEventListener("dblclick",()=>{

    if(isPlaying){

        pauseMusic();

    }else{

        playMusic();

    }

});



/*==============================
        RIGHT CLICK
==============================*/

cover.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});



/*==============================
        MUSIC PARTICLE STYLE
==============================*/

const style=document.createElement("style");

style.innerHTML=`

.musicParticle{

position:fixed;

bottom:-20px;

border-radius:50%;

background:rgba(255,255,255,.7);

pointer-events:none;

animation:musicFloat linear forwards;

z-index:0;

}

@keyframes musicFloat{

from{

transform:translateY(0) scale(1);

}

to{

transform:translateY(-110vh) scale(.2);

opacity:0;

}

}

`;

document.head.appendChild(style);



/*==============================
        CONSOLE
==============================*/

console.clear();

console.log(

"%cBlue Memories",

"font-size:30px;font-weight:bold;color:#7dc4ff"

);

console.log(

"%cNow Playing: About You",

"font-size:16px;color:white"

);

console.log(

"%cEvery memory deserves its own soundtrack.",

"color:#b8dfff"

);