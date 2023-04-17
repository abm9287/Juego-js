function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)+ min) ;
}
let jugador = 0;
let pc = aleatorio(1,3);
jugador = prompt("Elige: \n1.Piedra 🥌 \n2.Papel📖 \n3.Tijera✂");

//JUGADOR
if(jugador == 1){
    alert('Elegiste 🥌');
}else if(jugador == 2){
    alert('Elegiste 📄')
}else if(jugador == 3){
    alert('Elegiste ✂')
}else{
    alert(`Haz elegido mal`)
}

//PC
if(pc == 1){
    alert('Elegiste 🥌')
}else if(pc == 2){
    alert('Elgiste 📄')
}else if(pc == 3){
    alert('Elegiste ✂')
}

//Combate
/*if(pc == jugador){
    alert('Empate')
}else if(jugador == 1 && pc == 3){
    alert('Ganaste!');
}else if(jugador == 2 && pc == 1){
    alert('Ganaste!');
}else if(jugador == 3 && pc == 2){
    alert('Ganaste!');
}else{
    alert('Perdiste');
}*/

if(pc == jugador){
    alert('Empate💯💪😄')
}else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
    alert('Ganaste🏆');
}else{
    alert('Perdiste❌😫');
}