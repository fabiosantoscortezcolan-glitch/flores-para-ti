const mensaje = `Flores Amarillas para el
amor de mi vida:

Si pudiera elegir un lugar
seguro, sería a tu lado.

Cuanto más tiempo estoy
contigo más te amo.

        — I Love You! ♡`;

let posicionTexto = 0;
let intervaloContador;
let intervaloFlores;

function mostrarFinal(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("final").style.display = "flex";

    document.getElementById("textoAmor").innerHTML = "";
    document.getElementById("corazon").innerHTML = "";
    posicionTexto = 0;

    escribirTexto();
    crearCorazon();
    actualizarContador();

    intervaloContador = setInterval(actualizarContador, 1000);
    intervaloFlores = setInterval(crearFlorCaida, 380);
}

function escribirTexto(){
    if(posicionTexto < mensaje.length){
        document.getElementById("textoAmor").innerHTML += mensaje.charAt(posicionTexto);
        posicionTexto++;
        setTimeout(escribirTexto, 45);
    }
}

/* CORAZÓN GRANDE Y RELLENO */
function crearCorazon(){
    const corazon = document.getElementById("corazon");
    corazon.innerHTML = "";

    for(let i = 0; i < 1800; i++){
        setTimeout(() => {

            let t = Math.random() * Math.PI * 2;
            let r = Math.sqrt(Math.random());

            let x = 16 * Math.pow(Math.sin(t), 3);
            let y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));

            x = x * r;
            y = y * r;

            let flor = document.createElement("img");
            flor.src = "img/Girasol.png";
            flor.classList.add("flor");

            let tamaño = Math.random() * 7 + 12;
            flor.style.width = tamaño + "px";
            flor.style.height = tamaño + "px";

            flor.style.left = (215 + x * 13) + "px";
            flor.style.top = (130 + y * 13) + "px";

            corazon.appendChild(flor);

        }, i * 3);
    }
}

/* FLORES SALEN DEL ÁRBOL Y CAEN */
function crearFlorCaida(){

    const tarjeta = document.querySelector(".tarjeta-final");
    const arbol = document.querySelector(".arbol");

    const flor = document.createElement("img");
    flor.src = "img/Girasol.png";
    flor.className = "flor-caida";

    // Posición real del árbol
    const rectArbol = arbol.getBoundingClientRect();
    const rectTarjeta = tarjeta.getBoundingClientRect();

    // Base del corazón (donde nace el tronco)
    const inicioX =
        rectArbol.left - rectTarjeta.left +
        rectArbol.width / 2 +
        (Math.random() * 40 - 20);

    const inicioY =
        rectArbol.top - rectTarjeta.top +
        rectArbol.height * 0.63 +
        (Math.random() * 15);

    flor.style.left = inicioX + "px";
    flor.style.top = inicioY + "px";

    const distancia = 220 + Math.random() * 40;

    flor.style.setProperty("--x1", (-20 + Math.random()*20) + "px");
    flor.style.setProperty("--y1", "40px");

    flor.style.setProperty("--x2", (-70 + Math.random()*30) + "px");
    flor.style.setProperty("--y2", "90px");

    flor.style.setProperty("--x3", (-140 + Math.random()*40) + "px");
    flor.style.setProperty("--y3", "160px");

    flor.style.setProperty("--x4", (-220 + Math.random()*60) + "px");
    flor.style.setProperty("--y4", distancia + "px");

    tarjeta.appendChild(flor);

    setTimeout(() => flor.remove(), 3600);
}
/* CONTADOR */
function actualizarContador(){
    const inicio = new Date("2021-04-10T00:00:00");
    const ahora = new Date();

    let diferencia = ahora - inicio;

    let segundosTotales = Math.floor(diferencia / 1000);
    let dias = Math.floor(segundosTotales / 86400);
    let horas = Math.floor((segundosTotales % 86400) / 3600);
    let minutos = Math.floor((segundosTotales % 3600) / 60);
    let segundos = segundosTotales % 60;

    document.getElementById("contador").innerHTML =
        dias + " días " +
        horas + " horas " +
        minutos + " minutos " +
        segundos + " segundos";
}
