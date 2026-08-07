/*==========================================================
    BLUE MEMORIES
    TIMELINE.JS
==========================================================*/



// ============================================
// LOGIN PROTECTION
// ============================================

if(localStorage.getItem("blueMemoriesLogin") !== "true"){

    window.location.href="index.html";

}



// ============================================
// FADE ANIMATION
// ============================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".container,.quote,.hero").forEach(item=>{

    item.classList.add("fade");

    observer.observe(item);

});



// ============================================
// TIMELINE PROGRESS
// ============================================

const timeline = document.querySelector(".timeline");

const progress = document.createElement("div");

progress.className="timeline-progress";

timeline.appendChild(progress);

window.addEventListener("scroll",()=>{

    const rect = timeline.getBoundingClientRect();

    const total = timeline.offsetHeight;

    const visible = window.innerHeight - rect.top;

    let percent = (visible / total) * 100;

    percent = Math.max(0,Math.min(100,percent));

    progress.style.height = percent + "%";

});



// ============================================
// PARALLAX CLOUD
// ============================================

const clouds = document.querySelectorAll(".cloud");

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    clouds.forEach((cloud,index)=>{

        cloud.style.transform=

        `translateY(${y*(0.03*(index+1))}px)`;

    });

});



// ============================================
// CARD HOVER LIGHT
// ============================================

document.querySelectorAll(".content").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background=

        `radial-gradient(circle at ${x}px ${y}px,

        rgba(255,255,255,.28),

        rgba(255,255,255,.15) 65%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.16)";

    });

});



// ============================================
// ACTIVE NAVIGATION
// ============================================

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

    if(link.href===window.location.href){

        link.style.color="#080808";

        link.style.fontWeight="600";

    }

});



// ============================================
// BACK TO TOP BUTTON
// ============================================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topButton";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("showTop");

    }else{

        topBtn.classList.remove("showTop");

    }

});



// ============================================
// AUTO YEAR
// ============================================

const footer=document.querySelector("footer p");

if(footer){

    footer.innerHTML=

    "Blue Memories © "

    +new Date().getFullYear();

}



// ============================================
// KEYBOARD SHORTCUT
// ============================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});



// ============================================
// CONSOLE
// ============================================

console.clear();

console.log(

"%cBlue Memories Timeline",

"font-size:28px;color:#67bfff;font-weight:bold"

);

console.log(

"%cEvery moment deserves to be remembered.",

"color:#8db9d6"

);