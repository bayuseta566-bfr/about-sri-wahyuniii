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

const envelope=document.getElementById("envelope");

const openButton=document.getElementById("openLetter");

const letterTitle=document.querySelector(".letter h2");

const letterText=document.querySelector(".letter p");

const letterDate=document.querySelector(".letter .date");



/*==============================
        LETTER DATA
==============================*/

const letters=[

{

date:"28 June 2026",

title:"Dear You,",

text:`There are many things
I never had the courage to say.

Perhaps because
some feelings become
more beautiful
when they remain inside a letter.

Thank you
for becoming part
of my sky,
my sea,
and every blue memory.`

},

{

date:"A Quiet Afternoon",

title:"To The Blue Sky,",

text:`Every sky reminds me
that distance
never changes
the beauty of a memory.

Some people
become home,
even from afar.`

},

{

date:"At The Beach",

title:"Dear Ocean,",

text:`Every wave
returns to the shore.

Just like every memory
always finds
its way back
to my heart.`

},

{

date:"Until Someday",

title:"One Last Letter,",

text:`Maybe one day
you'll read
every page
I've written.

If that day comes,

I hope you smile.`

}

];



/*==============================
        TYPEWRITER
==============================*/

let current=0;

function typeWriter(text){

    letterText.innerHTML="";

    let i=0;

    const typing=setInterval(()=>{

        if(i>=text.length){

            clearInterval(typing);

            return;

        }

        if(text.charAt(i)==="\n"){

            letterText.innerHTML+="<br>";

        }else{

            letterText.innerHTML+=text.charAt(i);

        }

        i++;

    },22);

}



/*==============================
        SHOW LETTER
==============================*/

function showLetter(index){

    letterDate.innerText=letters[index].date;

    letterTitle.innerText=letters[index].title;

    typeWriter(letters[index].text);

}



/*==============================
        OPEN
==============================*/

let opened=false;

openButton.addEventListener("click",()=>{

    if(!opened){

        envelope.classList.add("open");

        openButton.innerHTML="Next Letter 💙";

        opened=true;

        showLetter(current);

    }else{

        current++;

        if(current>=letters.length){

            current=0;

        }

        showLetter(current);

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
        FADE
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(

".hero,.letter-area,.collection,.quote,.card"

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

if(window.scrollY>500){

topButton.classList.add("showTop");

}else{

topButton.classList.remove("showTop");

}

});



/*==============================
        ACTIVE NAV
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
        CARD CLICK
==============================*/

document.querySelectorAll(".card")

.forEach((card,index)=>{

card.style.cursor="pointer";

card.addEventListener("click",()=>{

current=index;

showLetter(current);

envelope.classList.add("open");

opened=true;

openButton.innerHTML="Next Letter 💙";

window.scrollTo({

top:250,

behavior:"smooth"

});

});

});



/*==============================
        KEYBOARD
==============================*/

document.addEventListener("keydown",(e)=>{

if(!opened) return;

if(e.key==="ArrowRight"){

current++;

if(current>=letters.length){

current=0;

}

showLetter(current);

}

if(e.key==="ArrowLeft"){

current--;

if(current<0){

current=letters.length-1;

}

showLetter(current);

}

});



/*==============================
        CONSOLE
==============================*/

console.clear();

console.log(

"%cBlue Memories",

"font-size:30px;color:#5fb5ff;font-weight:bold"

);

console.log(

"%cLetters keep what mouths cannot say.",

"color:#cfe8ff"

);