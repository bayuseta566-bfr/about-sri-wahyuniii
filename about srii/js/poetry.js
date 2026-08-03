/*==========================================================
    BLUE MEMORIES
    POETRY.JS
==========================================================*/


/*==============================
        LOGIN CHECK
==============================*/

if(localStorage.getItem("blueMemoriesLogin")!=="true"){

    window.location.href="index.html";

}



/*==============================
        SCROLL ANIMATION
==============================*/

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(

".hero,.intro,.poem-card,.featured-card"

).forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});



/*==============================
        MODAL
==============================*/

const modal=document.createElement("div");

modal.className="poemModal";

modal.innerHTML=`

<div class="modalContent">

<span class="closeModal">&times;</span>

<h2></h2>

<p></p>

</div>

`;

document.body.appendChild(modal);

const modalTitle=modal.querySelector("h2");

const modalText=modal.querySelector("p");

const closeModal=modal.querySelector(".closeModal");



/*==============================
        POEMS
==============================*/

const poems=[

{

title:"Blue Sky",

text:`Every time I look at the sky,
I wonder if it still remembers
the day your smile became
the brightest color of my world.

Perhaps the sky is blue
because it quietly keeps
all the happiness
we once shared.`

},

{

title:"Waves",

text:`The sea never asked me
to let you go.

It simply returned
every memory
through its waves.

And every wave
still whispers your name.`

},

{

title:"White Flower",

text:`A lily blooms
without asking
to be admired.

Just like you—
beautiful,
quiet,
and unforgettable.`

},

{

title:"Blue Memories",

text:`Some memories
never disappear.

They simply wait
until the heart
is ready
to visit them again.`

}

];



/*==============================
        READ MORE
==============================*/

document.querySelectorAll(".poem-card button")

.forEach((button,index)=>{

button.addEventListener("click",()=>{

modal.classList.add("showModal");

modalTitle.innerText=poems[index].title;

modalText.innerText=poems[index].text;

document.body.style.overflow="hidden";

});

});



/*==============================
        CLOSE
==============================*/

closeModal.onclick=()=>{

modal.classList.remove("showModal");

document.body.style.overflow="auto";

};



modal.onclick=(e)=>{

if(e.target===modal){

modal.classList.remove("showModal");

document.body.style.overflow="auto";

}

};



document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

modal.classList.remove("showModal");

document.body.style.overflow="auto";

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
        CONSOLE
==============================*/

console.clear();

console.log(

"%cBlue Memories - Poetry",

"font-size:28px;color:#7ec3ff;font-weight:bold"

);

console.log(

"%cEvery poem keeps a feeling that words can barely describe.",

"color:#b9dcff"

);