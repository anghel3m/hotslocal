let nombre = ""
nombre = prompt("Cuál es tu nombre?")
alert("Bienvenido " + nombre)




function aleatorio(max, min) {
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

function combate (jugador,pc){

    let resultadoCombate = "";   
    

    if (jugador == pc) {
        resultadoCombate = "Empataron";

    } else if (jugador == 1 && pc == 3) {
        resultadoCombate ="Ganaste";
        

    } else if (jugador == 2 && pc == 1) {
        resultadoCombate ="Ganaste";
        

    } else if (jugador == 3 && pc == 2) {
        resultadoCombate ="Ganaste";
        
    } else {
        resultadoCombate ="Perdiste";
        
    }
    return resultadoCombate 


    
}

let jugador = 0;
let pc = 0;
let ganadas = 0;
let perdidas = 0;


while (ganadas < 3 && perdidas < 3) {

    jugador = prompt("1 es piedra, 2 es papel, 3 es tijera")

    pc = aleatorio(3, 1)

    alert("PC elige " + eleccion(pc) + " y tu elegiste " + eleccion(jugador))

    let resultado = combate(jugador,pc);
    if (resultado == "Ganaste"){
        ganadas =ganadas+1;
    }else if (resultado == "Perdiste"){
        perdidas=perdidas+1

    }


alert("Ganaste "+ ganadas + "veces. " + "perdiste " + perdidas + " veces.")
}