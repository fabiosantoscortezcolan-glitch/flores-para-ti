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
    const flor = document.createElement("img");

    flor.src = "img/Girasol.png";
    flor.classList.add("flor-caida");

    const esCelular = window.innerWidth <= 600;

const puntos = esCelular
? [
    {x:270, y:170},
    {x:285, y:165},
    {x:300, y:160},
    {x:315, y:165},
    {x:330, y:170},
    {x:300, y:190}
]
: [
    {x:520, y:120},
    {x:570, y:100},
    {x:630, y:95},
    {x:700, y:110},
    {x:760, y:135},
    {x:500, y:180},
    {x:560, y:170},
    {x:630, y:165},
    {x:710, y:175},
    {x:550, y:235},
    {x:610, y:250},
    {x:670, y:240},
    {x:620, y:315}
];

    const punto = puntos[Math.floor(Math.random() * puntos.length)];

if(window.innerWidth <= 600){

    // SOLO EN CELULAR
    flor.style.left = "300px";
    flor.style.top = "250px";

}else{

    // PC (queda igual)
    flor.style.left = punto.x + "px";
    flor.style.top = punto.y + "px";

}

    const lineaY = 450;
    const distancia = lineaY - punto.y;
    const desviacion = Math.random() * 120 - 60;

    flor.style.setProperty("--x1", (-70 + desviacion * 0.2) + "px");
    flor.style.setProperty("--y1", (distancia * 0.25) + "px");

    flor.style.setProperty("--x2", (-150 + desviacion * 0.5) + "px");
    flor.style.setProperty("--y2", (distancia * 0.50) + "px");

    flor.style.setProperty("--x3", (-240 + desviacion * 0.8) + "px");
    flor.style.setProperty("--y3", (distancia * 0.75) + "px");

    flor.style.setProperty("--x4", (-340 + desviacion) + "px");
    flor.style.setProperty("--y4", (distancia + 20) + "px");

    tarjeta.appendChild(flor);

    setTimeout(() => {
        flor.remove();
    }, 3600);
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
