
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
        spanMascotaJugador.innerHTML ="El Santi";
    }else if (document.getElementById("squirtle").checked) {
        spanMascotaJugador.innerHTML ="El yesi";
    }else if (document.getElementById("bulbasaur").checked) {
        spanMascotaJugador.innerHTML ="El fabi";
    }else{
            alert("No seleccionaste un personaje");  
        }

    

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo(){
   let seleAletatorio=aleatorio(3,1) 
   let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

   if (seleAletatorio == 1) {
    spanMascotaEnemigo.innerHTML ="El Santi";

} else if (seleAletatorio == 2) {
    spanMascotaEnemigo.innerHTML ="El yesi";;

} else if (seleAletatorio == 3) {
    spanMascotaEnemigo.innerHTML ="El fabi";;

}

}

function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

function ataquefuego(){     
ataqueJugador = "una puñalada";
ataqueEnemigoAleatorio ();
}

function ataqueagua(){   
ataqueJugador="un arma de fuego";
ataqueEnemigoAleatorio ();

}

function ataquetierra(){ 
    ataqueJugador="un peñonazo en la cabeza";
    ataqueEnemigoAleatorio ();

}

function ataqueEnemigoAleatorio (){
    let ataqueAleatorio = aleatorio(3,1);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "una puñalada";

        }else if (ataqueAleatorio == 2){
            ataqueEnemigo = "un arma de fuego";

        }else if (ataqueAleatorio == 3 ){
            ataqueEnemigo = "un peñonazo en la cabeza"; 
        }

        combate();
}

function combate() {
let spanvidasJugador = document.getElementById("vidas-mascota");
let spanvidasEnemigo = document.getElementById("vidas-enemigo");

    if (ataqueJugador == ataqueEnemigo) {
        creaParrafo("Empataron");

    } else if (ataqueJugador == "una puñalada" && ataqueEnemigo == "un peñonazo en la cabeza") {
        creaParrafo("Ganaste");
        vidasEnemigo--;
        spanvidasEnemigo.innerHTML =vidasEnemigo;

    } else if (ataqueJugador == "un arma de fuego" && ataqueEnemigo == "una puñalada") {
        creaParrafo("Ganaste");
        vidasEnemigo--;
        spanvidasEnemigo.innerHTML =vidasEnemigo;


    } else if (ataqueJugador == "un peñonazo en la cabeza" && ataqueEnemigo == "un arma de fuego") {
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
   parrafo.innerHTML="¡Tu amigo realizo un ataque de " + ataqueJugador + "! ..y el enemigo respodio con " + ataqueEnemigo+" - "+resultado;
   
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

