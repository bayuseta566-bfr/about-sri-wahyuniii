/*==========================================================
                BLUE MEMORIES
                memories.js
==========================================================*/


/*==============================
        LOGIN CHECK
==============================*/

if(localStorage.getItem("blueMemoriesLogin")!=="true"){

    window.location.href="index.html";

}



/*==============================
        MEMORY DATA
==============================*/

const memories={

1:{
title:"A Beginning",

date:"28 June 2025",

image:"img/memories/memory1.jpg",

story:"Every beautiful story begins with a simple hello. At that moment nothing extraordinary happened, but later I realized that some of the greatest memories always start from the smallest moments."

},

2:{
title:"Under The Same Sky",

date:"Blue Afternoon",

image:"img/memories/memory2.jpg",

story:"Looking at the same sky from different places somehow makes distance feel smaller. Perhaps the sky remembers everything that we cannot say."

},

3:{
title:"Ocean Breeze",

date:"Beach Day",

image:"img/memories/memory3.jpg",

story:"The sound of the waves, the smell of the sea, and the endless horizon became witnesses to moments that words could never fully describe."

},

4:{
title:"White Flowers",

date:"Lily Garden",

image:"img/memories/memory4.jpg",

story:"Lilies bloom quietly, yet they leave unforgettable beauty. Some people are just like that."

},

5:{
title:"Golden Hour",

date:"Sunset",

image:"img/memories/memory5.jpg",

story:"Sunsets always remind me that beautiful things sometimes end gently, not suddenly."

},

6:{
title:"The Last Page",

date:"Blue Night",

image:"img/memories/memory6.jpg",

story:"Not every story has a perfect ending, but every memory deserves a place to live forever."

}

};



/*==============================
        MODAL
==============================*/

const modal=document.getElementById("memoryModal");

const modalImg=document.getElementById("modalImage");

const modalTitle=document.getElementById("modalTitle");

const modalDate=document.getElementById("modalDate");

const modalStory=document.getElementById("modalStory");

const close=document.querySelector(".close");



document.querySelectorAll(".memory-card")

.forEach(card=>{

card.addEventListener("click",()=>{

const id=card.dataset.id;

const data=memories[id];

modalImg.src=data.image;

modalTitle.textContent=data.title;

modalDate.textContent=data.date;

modalStory.textContent=data.story;

modal.classList.add("show");

document.body.style.overflow="hidden";

});

});



/*==============================
        CLOSE MODAL
==============================*/

close.onclick=()=>{

modal.classList.remove("show");

document.body.style.overflow="auto";

};



window.onclick=(e)=>{

if(e.target===modal){

modal.classList.remove("show");

document.body.style.overflow="auto";

}

};



document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

modal.classList.remove("show");

document.body.style.overflow="auto";

}

});



/*==============================
        SCROLL ANIMATION
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});



document.querySelectorAll(".memory-card")

.forEach(card=>{

observer.observe(card);

});



/*==============================
        PARALLAX CLOUD
==============================*/

const clouds=document.querySelectorAll(".cloud");

window.addEventListener("scroll",()=>{

let y=window.scrollY;

clouds.forEach((cloud,index)=>{

cloud.style.transform=

`translateY(${y*(0.03*(index+1))}px)`;

});

});



/*==============================
        BACK TO TOP
==============================*/

const topButton=document.createElement("button");

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
        LILY EFFECT
==============================*/

function createLily(){

const lily=document.createElement("div");

lily.className="lily";

lily.innerHTML="🌸";

lily.style.left=Math.random()*100+"vw";

lily.style.fontSize=(18+Math.random()*12)+"px";

lily.style.animationDuration=

(8+Math.random()*6)+"s";

document.body.appendChild(lily);



setTimeout(()=>{

lily.remove();

},14000);

}



setInterval(createLily,3000);



/*==============================
        ACTIVE NAVBAR
==============================*/

document.querySelectorAll("nav a")

.forEach(link=>{

if(link.href===window.location.href){

link.classList.add("active");

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
        PRELOAD IMAGE
==============================*/

Object.values(memories).forEach(item=>{

const img=new Image();

img.src=item.image;

});



/*==============================
        CONSOLE
==============================*/

console.clear();

console.log(

"%cBlue Memories",

"font-size:28px;color:#6cbcff;font-weight:bold"

);

console.log(

"%cMemories Loaded",

"font-size:18px;color:white"

);

console.log(

"%cEvery memory has its own sky.",

"color:#dcefff"

);