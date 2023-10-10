//juego UNO
const rl = require ("readline-sync");

var deck = [];
var colors = ["yellow", "blue", "green", "red"];
var types = ["comun", "especial", "comodin"];
var card = {
  color: null, //amarillo azul verde o rojo
  Number: null, // numero 0-9
  type: null, //comun,especial, y comodines
};

for (var color = 0; color < colors.length; color++) {
  //console.log ("pos colors:",colors[color]);
  for (var cnumber = 0; cnumber < 10; cnumber++)
    // console.log("numero", cnumber);
    deck.push({ color: colors[color], number: cnumber, type: "comun" });

  for (var cnumber1 = 1; cnumber1 < 10; cnumber1++) {
    deck.push({ color: colors[color], number: cnumber1, type: "comun" });
    //console.log("numero", cnumber1);
  }
  deck.push({ color: colors[color], number: "+4", type: "especial" });
  deck.push({ color: colors[color], number: "+4", type: "especial" });
  deck.push({ color: colors[color], number: "b", type: "especial" });
  deck.push({ color: colors[color], number: "b", type: "especial" });
  deck.push({ color: colors[color], number: "r", type: "especial" });
  deck.push({ color: colors[color], number: "r", type: "especial" });
}

deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "cc", type: "comodin" });
deck.push({ color: null, number: "cc", type: "comodin" });
deck.push({ color: null, number: "cc", type: "comodin" });
deck.push({ color: null, number: "cc", type: "comodin" });


console.log(deck);

const players = rl.question("¿cuantos jugadores seran?", {})

console.log (players)
//npm init sirve para incializar un procecto en node
//npm i o npm install <modulo> sirve para intalar el modulo