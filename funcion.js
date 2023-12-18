
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){

    let seccionReiniciar = document.getElementById("reiniciar");
    seccionReiniciar.style.display="none";

    let seccionSeleccionarAtaque = document.getElementById("seleccion-ataque");
    seccionSeleccionarAtaque.style.display="none";

    let boton_seleccionar_mascota = document.getElementById("boton-mascota");
    boton_seleccionar_mascota.addEventListener("click",seleccionarMascotaJugador);
    
    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click",ataquefuego);

    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click",ataqueagua);

    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataquetierra);

    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);


    
}

function seleccionarMascotaJugador (){

    let spanMascotaJugador = document.getElementById("mascota-jugador");
    
    let seccionSeleccionarAtaque = document.getElementById("seleccion-ataque");
    seccionSeleccionarAtaque.style.display="block";

    let seccionSeleccionarMascota = document.getElementById("seleccion-mascota");
    seccionSeleccionarMascota.style.display="none";

    if(document.getElementById("charizar").checked) {
        spanMascotaJugador.innerHTML ="Charizar";
    }else if (document.getElementById("squirtle").checked) {
        spanMascotaJugador.innerHTML ="Squirtle";
    }else if (document.getElementById("bulbasaur").checked) {
        spanMascotaJugador.innerHTML ="Bulbasaur";
    }else{
            alert("No seleccionaste una mascota");  
        }

    

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo(){
   let seleAletatorio=aleatorio(3,1) 
   let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

   if (seleAletatorio == 1) {
    spanMascotaEnemigo.innerHTML ="Charizar";

} else if (seleAletatorio == 2) {
    spanMascotaEnemigo.innerHTML ="Squirtle";;

} else if (seleAletatorio == 3) {
    spanMascotaEnemigo.innerHTML ="Bulbasaur";;

}

}

function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

function ataquefuego(){     
ataqueJugador = "Fuego";
ataqueEnemigoAleatorio ();
}

function ataqueagua(){   
ataqueJugador="Agua";
ataqueEnemigoAleatorio ();

}

function ataquetierra(){ 
    ataqueJugador="Tierra";
    ataqueEnemigoAleatorio ();

}

function ataqueEnemigoAleatorio (){
    let ataqueAleatorio = aleatorio(3,1);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego";

        }else if (ataqueAleatorio == 2){
            ataqueEnemigo = "Agua";

        }else if (ataqueAleatorio == 3 ){
            ataqueEnemigo = "Tierra"; 
        }

        combate();
}

function combate() {
let spanvidasJugador = document.getElementById("vidas-mascota");
let spanvidasEnemigo = document.getElementById("vidas-enemigo");

    if (ataqueJugador == ataqueEnemigo) {
        creaParrafo("Empataron");

    } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
        creaParrafo("Ganaste");
        vidasEnemigo--;
        spanvidasEnemigo.innerHTML =vidasEnemigo;

    } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
        creaParrafo("Ganaste");
        vidasEnemigo--;
        spanvidasEnemigo.innerHTML =vidasEnemigo;


    } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
        creaParrafo("Ganaste");
        vidasEnemigo--;
        spanvidasEnemigo.innerHTML =vidasEnemigo;

    } else {
        creaParrafo("Perdiste");
        vidasJugador--;
        spanvidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        creaParrafoFinal("¡Fecitaciones!, ganaste :D") 
    }else if(vidasJugador == 0)
    {creaParrafoFinal("Loser, sigue intentado :P")
}
}

function creaParrafo(resultado){
    let sectionMensajes = document.getElementById('mensajes')
   let parrafo = document.createElement("p")
   parrafo.innerHTML="¡Tu mas mascota realizo un ataque de " + ataqueJugador + "! ..y la mascota enemiga respodio con " + ataqueEnemigo+" - "+resultado;
   
   sectionMensajes.appendChild(parrafo)
}

function creaParrafoFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')
   let parrafo = document.createElement("p")
   parrafo.innerHTML=resultadoFinal
   sectionMensajes.appendChild(parrafo)

   let seccionReiniciar = document.getElementById("reiniciar");
    seccionReiniciar.style.display="block";

   let botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled=true;

    let botonAgua = document.getElementById("boton-agua");
    botonAgua.disabled=true;

    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.disabled=true;
}

function reiniciarJuego (){
  location.reload();  
}


window.addEventListener("load", iniciarJuego);

