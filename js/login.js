// =============================================
// Blue Memories
// Login Script
// =============================================

// Password
const PASSWORD = "28062005";

// Element
const form = document.getElementById("loginForm");
const input = document.getElementById("password");
const message = document.getElementById("message");
const card = document.querySelector(".login-card");
const button = form.querySelector("button");
const music = document.getElementById("bgMusic");

// =============================================
// Auto Login
// =============================================

if(localStorage.getItem("blueMemoriesLogin") === "true"){

    window.location.href = "home.html";

}

// =============================================
// Play Music (Browser Permission)
// =============================================

document.addEventListener("click",()=>{

    if(music){

        music.volume = 0.35;

        music.play().catch(()=>{});

    }

},{once:true});

// =============================================
// Login
// =============================================

form.addEventListener("submit",function(e){

    e.preventDefault();

    const password = input.value.trim();

    button.disabled = true;

    button.innerHTML = "Opening...";

    message.innerHTML = "";

    setTimeout(()=>{

        if(password === PASSWORD){

            loginSuccess();

        }else{

            loginFailed();

        }

    },1200);

});

// =============================================
// Success
// =============================================

function loginSuccess(){

    localStorage.setItem("blueMemoriesLogin","true");

    message.style.color = "#2bb673";

    message.innerHTML = "Welcome back.";

    card.classList.add("success");

    button.innerHTML = "Welcome";

    createSparkles();

    setTimeout(()=>{

        window.location.href="home.html";

    },1800);

}

// =============================================
// Failed
// =============================================

function loginFailed(){

    message.style.color="#e34f61";

    message.innerHTML="The date doesn't match the story.";

    button.disabled=false;

    button.innerHTML="Open The Story";

    input.value="";

    input.focus();

    shake();

}

// =============================================
// Shake Animation
// =============================================

function shake(){

    card.classList.add("shake");

    setTimeout(()=>{

        card.classList.remove("shake");

    },500);

}

// =============================================
// Sparkle Effect
// =============================================

function createSparkles(){

    for(let i=0;i<35;i++){

        const star=document.createElement("span");

        star.className="sparkle";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.animationDuration=(Math.random()*1+1)+"s";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },2200);

    }

}

// =============================================
// Press Enter
// =============================================

input.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        form.requestSubmit();

    }

});

// =============================================
// Disable Right Click (Optional)
// =============================================

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

// =============================================
// Disable F12
// =============================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="F12"){

        e.preventDefault();

    }

});

// =============================================
// Developer Message
// =============================================

console.log("%cBlue Memories",
"font-size:28px;color:#5caeff;font-weight:bold");

console.log("%cEvery story begins with a special date.",
"color:#6a8ca7");