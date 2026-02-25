function startSite(){

    const bg = document.querySelector(".dark-bg");
    const logo = document.getElementById("mainLogo");
    const intro = document.getElementById("intro");
    const header = document.getElementById("header");
    const main = document.getElementById("mainContent");

    // FASE 1: Fondo se contrae
    bg.style.clipPath = "circle(0% at 50% 50%)";

    // FASE 2: Logo sube visualmente
    setTimeout(()=>{
        logo.style.transition = "all 1s ease";
        logo.style.transform = "translateY(-200px) scale(0.5)";
    },900);

    // FASE 3: Ocultar intro y colocar header real
    setTimeout(()=>{
        intro.style.display = "none";
        header.style.top = "0";
        main.style.display = "block";
        document.body.style.overflow = "auto";
    },1800);
}

function toggleInfo(id){
    const element = document.getElementById(id);
    element.style.display =
        element.style.display === "block" ? "none" : "block";
}

function contratar(paquete){
    let numero = "52915591461227";
    let mensaje = "Hola Jaid, quiero contratar el " + paquete;
    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}