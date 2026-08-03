/*==========================================================
    BLUE MEMORIES
    HOME.JS
    PART 1
==========================================================*/


// =============================================
// Login Protection
// =============================================

if (localStorage.getItem("blueMemoriesLogin") !== "true") {

    window.location.href = "index.html";

}



// =============================================
// Background Music
// =============================================

const music = document.getElementById("bgMusic");

let musicStarted = false;

function startMusic(){

    if(!music) return;

    if(musicStarted) return;

    music.volume = 0.35;

    music.play().catch(()=>{});

    musicStarted = true;

}

document.addEventListener("click",startMusic,{once:true});

document.addEventListener("touchstart",startMusic,{once:true});



// =============================================
// Smooth Scroll
// =============================================

const startButton = document.querySelector(".start-btn");

if(startButton){

    startButton.addEventListener("click",(e)=>{

        e.preventDefault();

        document.querySelector("#menu").scrollIntoView({

            behavior:"smooth"

        });

    });

}



// =============================================
// Greeting
// =============================================

const heroTitle = document.querySelector(".hero h2");

function greeting(){

    if(!heroTitle) return;

    const hour = new Date().getHours();

    let text="";

    if(hour>=5 && hour<11){

        text="☀️ Good Morning";

    }

    else if(hour>=11 && hour<15){

        text="🌤️ Good Afternoon";

    }

    else if(hour>=15 && hour<18){

        text="🌅 Good Evening";

    }

    else{

        text="🌙 Good Night";

    }

    heroTitle.innerHTML=text;

}

greeting();



// =============================================
// Fade Animation
// =============================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll(".card,.quote,.hero").forEach(item=>{

    item.classList.add("fade");

    observer.observe(item);

});



// =============================================
// Floating Particles
// =============================================

const background = document.querySelector(".background");

function createParticle(){

    if(!background) return;

    const particle = document.createElement("div");

    particle.className="particle";

    particle.style.left=Math.random()*100+"vw";

    particle.style.animationDuration=(12+Math.random()*10)+"s";

    particle.style.opacity=Math.random();

    particle.style.width=(4+Math.random()*8)+"px";

    particle.style.height=particle.style.width;

    background.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },22000);

}

setInterval(createParticle,700);



// =============================================
// Card Hover
// =============================================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=

        `radial-gradient(circle at ${x}px ${y}px,

        rgba(255,255,255,.28),

        rgba(255,255,255,.15) 60%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.16)";

    });

});



// =============================================
// Parallax
// =============================================

const sun=document.querySelector(".sun");

const sea=document.querySelector(".sea");

const clouds=document.querySelectorAll(".cloud");

window.addEventListener("scroll",()=>{

    const scroll=window.scrollY;

    if(sun){

        sun.style.transform=`translateY(${scroll*0.18}px)`;

    }

    if(sea){

        sea.style.transform=`translateY(${scroll*0.05}px)`;

    }

    clouds.forEach((cloud,index)=>{

        cloud.style.transform=

        `translateY(${scroll*(0.03*(index+1))}px)`;

    });

});



// =============================================
// Auto Year
// =============================================

const footer=document.querySelector("footer p");

if(footer){

    footer.innerHTML +=

    "<br><br>© "+new Date().getFullYear()+" Blue Memories";

}



// =============================================
// Console
// =============================================

console.clear();

console.log("%cBlue Memories",

"font-size:30px;color:#58b8ff;font-weight:bold;");

console.log("%cEvery memory deserves a beautiful place.",

"color:#7aa8c9;font-size:14px;");