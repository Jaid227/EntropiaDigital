const intro = document.getElementById("intro");
const logoIntro = document.getElementById("logoIntro");
const logoHeader = document.querySelector(".logo-header");

logoIntro.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {
        intro.style.display = "none";
        logoHeader.style.opacity = "1";
    }, 1000);

});

/* ACORDEÓN */

function toggleCard(element){
    const card = element.parentElement;
    const allCards = document.querySelectorAll(".card");

    allCards.forEach(c => {
        if(c !== card){
            c.classList.remove("active");
        }
    });

    card.classList.toggle("active");
}

/* SCROLL SUAVE */

function scrollToSection(){
    document.getElementById("paquetes").scrollIntoView({
        behavior:"smooth"
    });
}

/* WHATSAPP */

function contactar(paquete){
    const numero = "5591461227"; 
    const mensaje = `Hola, estoy interesado en el paquete: ${paquete}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
