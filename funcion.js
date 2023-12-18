//let nombre = ""
//nombre = prompt("Cuál es tu nombre?")
//alert("Bienvenido " + nombre)

let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego(){
    let boton_seleccionar_mascota = document.getElementById("boton-mascota");
    boton_seleccionar_mascota.addEventListener("click",seleccionarMascotaJugador);
    
    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click",ataquefuego);

    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click",ataqueagua);

    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataquetierra);
    
}

function seleccionarMascotaJugador (){

    let spanMascotaJugador = document.getElementById("mascota-jugador");
    
    

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

        creaParrafo()
}


function creaParrafo(){
    let sectionMensajes = document.getElementById('mensajes')
   let parrafo = document.createElement("p")
   parrafo.innerHTML="¡Tu mas mascota realizo un ataque de " + ataqueJugador + "! ..y la mascota enemiga respodio con " + ataqueEnemigo;
   
   sectionMensajes.appendChild(parrafo)
}


window.addEventListener("load", iniciarJuego);






/*function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

function eleccion(jugada) {

    let resultado = "";

    if (jugada == 1) {
        resultado = "Piedra";

    } else if (jugada == 2) {
        resultado = "Papel";

    } else if (jugada == 3) {
        resultado = "Tijera";

    } else {
        resultado = "elccion incorrecta";
    }

    return resultado
}

function combate(jugador, pc) {

    let resultadoCombate = "";

    if (jugador == pc) {
        resultadoCombate = "Empataron";

    } else if (jugador == 1 && pc == 3) {
        resultadoCombate = "Ganaste";


    } else if (jugador == 2 && pc == 1) {
        resultadoCombate = "Ganaste";



    } else if (jugador == 3 && pc == 2) {
        resultadoCombate = "Ganaste";


    } else {
        resultadoCombate = "Perdiste";

    }
    


    return resultadoCombate
}

let jugador = 0;
let pc = 0;
let ganadas = 0;
let perdidas = 0;

while (ganadas < 3 && perdidas < 3) {

    jugador = prompt("#1 es piedra,  #2 es papel,  #3 es tijera")

    pc = aleatorio(3, 1)

    alert("tu elegiste " + eleccion(jugador) +"  y PC elige " + eleccion(pc) )

    let resultado = combate(jugador,pc);

    if (resultado == "Ganaste") {
        ganadas = ganadas + 1;
        alert ("!Ganaste!");
        }else if (resultado == "Perdiste"){
        perdidas = perdidas +1;
        alert ("Perdiste :c");            
        }else {
            alert ("Empate");    
        }
    
    alert ("has ganado " + ganadas + " veces y perdido " + perdidas + " veces");
} */