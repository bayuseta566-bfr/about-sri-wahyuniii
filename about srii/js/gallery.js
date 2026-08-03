/*==========================================================
    BLUE MEMORIES
    GALLERY.JS
==========================================================*/


/*==============================
        LOGIN
==============================*/

if(localStorage.getItem("blueMemoriesLogin") !== "true"){

    window.location.href="index.html";

}



/*==============================
        LIGHTBOX
==============================*/

const cards=document.querySelectorAll(".photo-card");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const captionTitle=document.getElementById("caption-title");
const captionText=document.getElementById("caption-text");
const closeBtn=document.querySelector(".close");

let currentIndex=0;

function openLightbox(index){

    currentIndex=index;

    const img=cards[index].querySelector("img");

    const title=cards[index].querySelector("h3").innerText;

    const text=cards[index].querySelector("p").innerText;

    lightboxImg.src=img.src;

    captionTitle.innerText=title;

    captionText.innerText=text;

    lightbox.classList.add("show");

    document.body.style.overflow="hidden";

}

function closeLightbox(){

    lightbox.classList.remove("show");

    document.body.style.overflow="auto";

}

cards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        openLightbox(index);

    });

});

closeBtn.addEventListener("click",closeLightbox);



/*==============================
    CLICK OUTSIDE
==============================*/

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});



/*==============================
        NEXT PHOTO
==============================*/

function nextPhoto(){

    currentIndex++;

    if(currentIndex>=cards.length){

        currentIndex=0;

    }

    openLightbox(currentIndex);

}



/*==============================
        PREVIOUS
==============================*/

function previousPhoto(){

    currentIndex--;

    if(currentIndex<0){

        currentIndex=cards.length-1;

    }

    openLightbox(currentIndex);

}



/*==============================
        KEYBOARD
==============================*/

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    if(e.key==="Escape"){

        closeLightbox();

    }

    if(e.key==="ArrowRight"){

        nextPhoto();

    }

    if(e.key==="ArrowLeft"){

        previousPhoto();

    }

});



/*==============================
        FADE
==============================*/

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".photo-card,.quote,.hero").forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});



/*==============================
        PARALLAX CLOUD
==============================*/

const clouds=document.querySelectorAll(".cloud");

window.addEventListener("scroll",()=>{

    const scroll=window.scrollY;

    clouds.forEach((cloud,index)=>{

        cloud.style.transform=

        `translateY(${scroll*(0.03*(index+1))}px)`;

    });

});



/*==============================
        BACK TO TOP
==============================*/

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="topButton";

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
        FOOTER YEAR
==============================*/

const footer=document.querySelector("footer p");

if(footer){

    footer.innerHTML=

    "Blue Memories © "+new Date().getFullYear();

}



/*==============================
        AUTO ACTIVE NAV
==============================*/

document.querySelectorAll("nav a").forEach(link=>{

    if(link.href===window.location.href){

        link.style.fontWeight="600";

        link.style.color="#dff7ff";

    }

});



/*==============================
        PRELOAD IMAGE
==============================*/

cards.forEach(card=>{

    const img=new Image();

    img.src=card.querySelector("img").src;

});



/*==============================
        CONSOLE
==============================*/

console.clear();

console.log(

"%cBlue Memories Gallery",

"font-size:30px;color:#5ebcff;font-weight:bold;"

);

console.log(

"%cEvery photo keeps a beautiful memory.",

"color:#86b9d9;font-size:14px"

);