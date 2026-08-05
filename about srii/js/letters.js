/*==========================================================
    BLUE MEMORIES
    LETTERS.JS
==========================================================*/


/*==============================
        LOGIN CHECK
==============================*/

if(localStorage.getItem("blueMemoriesLogin")!=="true"){

    window.location.href="index.html";

}



/*==============================
        ELEMENT
==============================*/

const openButton=document.getElementById("openLetter");

const letter=document.getElementById("letter");



/*==============================
        OPEN LETTER
==============================*/

let opened=false;

function openLetter(){

    if(opened) return;

    opened=true;

    letter.classList.add("show");

    openButton.classList.add("hide");



    setTimeout(()=>{

        openButton.style.display="none";

    },500);

}



openButton.addEventListener("click",openLetter);



/*==============================
        KEYBOARD
==============================*/

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space" || e.code==="Enter"){

        e.preventDefault();

        openLetter();

    }

});



/*==============================
        PARALLAX CLOUD
==============================*/

const clouds=document.querySelectorAll(".cloud");

window.addEventListener("scroll",()=>{

    const y=window.scrollY;

    clouds.forEach((cloud,index)=>{

        cloud.style.transform=

        `translateY(${y*(0.03*(index+1))}px)`;

    });

});



/*==============================
        FADE ANIMATION
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(

".hero,.quote"

).forEach(el=>{

el.classList.add("fade");

observer.observe(el);

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

if(window.scrollY>450){

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

`Blue Memories © ${new Date().getFullYear()}`;

}



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
        LILY EFFECT
==============================*/

function createLily(){

const lily=document.createElement("div");

lily.className="lily";

lily.innerHTML="✿";

lily.style.left=Math.random()*100+"vw";

lily.style.fontSize=(18+Math.random()*12)+"px";

lily.style.animationDuration=

(8+Math.random()*5)+"s";

document.body.appendChild(lily);

setTimeout(()=>{

lily.remove();

},13000);

}



setInterval(createLily,3500);



/*==============================
        CONSOLE
==============================*/

console.clear();

console.log(

"%cBlue Memories",

"font-size:28px;color:#6dbdff;font-weight:bold"

);

console.log(

"%cLetters",

"font-size:18px;color:white"

);

console.log(

"%cSome memories live better in words.",

"color:#d7efff"

);