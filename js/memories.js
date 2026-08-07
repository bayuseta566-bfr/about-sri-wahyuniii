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
title:"Ketidaksengajaan",

date:"31 oktober 2024",

image:"img/memories/memory1.JPG",

story:"Di sebuah ketidaksengajaan, kita pernah berada dalam satu bingkai, ya, Queen. Bukan foto yang sempurna—aku baru saja keluar dari rumah sakit dan bahkan belum siap untuk berfoto😭🙏. Namun semua itu terasa menghilang, tenggelam oleh indahnya dirimu yang tanpa sadar menjadi pusat dari kenangan ini dan hari itu adalah hari pertama aku mengetahui dan mengenal namamu."

},

2:{
title:"Senyum yang Menawan",

date:"a smile",

image:"img/memories/memory2.JPG",

story:"Saat itu aku hanya seorang yang bertugas mengabadikan jalannya kegiatan. Tak ada niat khusus untuk memotretmu, hingga tanpa sengaja kameraku menangkap senyummu yang begitu menawan. Ketika melihat hasilnya, aku sadar bahwa yang membuat foto ini terasa hidup bukanlah ketajaman lensa atau sempurnanya piksel, melainkan keindahan yang terpancar dari senyummu. Sejak saat itu, foto sederhana ini tak lagi terasa seperti dokumentasi, melainkan sebuah kenangan yang tak dapat ku ulang."

},

3:{
title:"The Moment You Didn't Notice",

date:"mirror selfie",

image:"img/memories/memory3.JPG",

story:"Aku tak pernah meminta dirimu untuk menoleh ke arah kamera. Justru saat kau tenggelam dalam duniamu sendiri, aku menemukan momen yang paling nyata. Tanpa pose, tanpa senyum yang dipersiapkan, hanya dirimu yang apa adanya. Dan mungkin, keindahan memang selalu lahir dari hal-hal yang tak disengaja."

},

4:{
title:"When Your Smile Bloomed Again",

date:"PKM HIMAJA 2025",

image:"img/memories/memory4.JPG",

story:"Foto ini lucu sekali, ya, Queen. Diambil saat pembagian hadiah, ketika kau bahkan belum sempat benar-benar bersiap di depan kamera. Namun justru ketidaksiapan itu membuatnya terasa begitu nyata. Yang paling indah bukanlah fotonya, melainkan melihat tawamu mulai kembali mekar setelah dunia yang pernah runtuh perlahan mengajarkanmu untuk tersenyum lagi. Semoga senyum itu selalu menemukan alasan untuk tetap tinggal."

},

5:{
title:"he Fiercest Smile",

date:"Pose Kecee",

image:"img/memories/memory5.JPG",

story:"Wow, sangar banget pose-nya, Queen. Tapi anehnya, sesangar apa pun ekspresimu, tetap saja kelihatan kece. Aku selalu mengingat momen ini sebagai campuran antara tawa dan rasa yang sulit dijelaskan. Lucunya lagi, foto ini rasanya cocok dijadikan "ancaman halus" untuk mahasiswa baru saat ospek jurusan. Biar mereka tahu, senior yang kelihatannya galak ternyata menyimpan senyum yang hangat."

},

6:{
title:"The Last Page",

date:"Tumbler Biru",

image:"img/memories/memory6.JPG",

story:"Ah, foto ini cantik sekali, ya, Queen. Ada tumbler biru kecil yang mungkin terlihat sederhana, tetapi aku tahu warna itu adalah warna kesukaanmu. Hari itu pasti melelahkan, sibuk menemani proses launching produk baru hingga semuanya berjalan dengan baik. Semoga setelah semua kerja keras itu, kamu tidak lupa menjaga dirimu sendiri. Jangan telat makan, jangan lupa minum, dan jangan terlalu sering begadang. Sebab ada banyak orang yang ingin melihatmu tetap sehat, termasuk aku yang berharap kau selalu baik-baik saja."

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