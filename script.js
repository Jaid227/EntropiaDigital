
// INTRO
const intro=document.getElementById("intro");
const logoIntro=document.getElementById("logoIntro");
const logoHeader=document.querySelector(".logo-header");

logoIntro.addEventListener("click",()=>{
intro.classList.add("hide");
setTimeout(()=>{
intro.style.display="none";
logoHeader.style.opacity="1";
},1000);
});

// SCROLL
function scrollToSection(){
document.getElementById("paquetes").scrollIntoView({behavior:"smooth"});
}

// WHATSAPP
function contactar(paquete){
const numero="5591461227";
const mensaje=`Hola Jaid, me interesa el paquete ${paquete}.`;
window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`,"_blank");
}

// CONTADOR 24H
const contador=document.getElementById("contador");
let tiempo=86400;
setInterval(()=>{
let h=Math.floor(tiempo/3600);
let m=Math.floor((tiempo%3600)/60);
let s=tiempo%60;
contador.innerHTML=`⏳ ${h}h ${m}m ${s}s restantes`;
tiempo--;
},1000);

// REVEAL SCROLL
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100){
el.classList.add("active");
}
});
});

// PARTICULAS
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,0.3)";
ctx.fill();
p.x+=p.dx;
p.y+=p.dy;
});
requestAnimationFrame(animate);
}
animate();





function toggleImagen(){
    const overlay = document.getElementById("overlay-img");
    overlay.classList.toggle("active");
}
