//juego UNO
const rl = require("readline-sync");

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
//console.log(deck);

const players = rl.question("¿cuantos jugadores seran?", {})
const totalcards = players * 7;
//repartir 7 cartas x jugador
//recorroel total de targetas
//(total de tarjetas = tarjetas/7 x jugador)
//un arreglo x jugador
var cardsplayers = {};
for (var cTcards = 0; cTcards < 7; cTcards++) {
  for (var cplayers = 0; cplayers < players; cplayers++) {
    //console.log("players", cplayers);
    if (!cardsplayers["player_" + cplayers]) {
      cardsplayers["player_" + cplayers] = [];
    }
    cardsplayers["player_" + cplayers].push(deck.shift());
  }
}
var trash = [];
trash.push(deck.shift())
console.log(trash);
//npm init sirve para incializar un procecto en node
//npm i o npm install <modulo> sirve para intalar el modulo
//mesa= arreglo
function cardValidation (card) {
 console.log(card.Number)
  if (card.Number == trash[trash.length-1].number || card.color == trash[trash.length-1].color) {
    console.log("es igual");
  }
  else {
    console.log("no es igual")
  }
}
cardValidation({ color: "yellow", number: 4, type: "comun" });

  for(const player in cardsplayers){
    console.log (cardsplayers[player])
    //primer player ponga una carta
    //paso1:ver carta
    //paso2:elegir carta
    //paso3 validar carta
    //paso4:poner carta (de mano jugador a tras)
  }
//&& todas se ejecutan como verdaderas para que funcione
// || SE EJECUTA UNO U OTRO VERDADERA FALSO PARA QUE FUNCIONE
console.log(trash);
const Player1 = cardsplayers["player_1"];
Player1.forEach((card, listen) => { //permite recorrer estructuras que contienen varios elementos 
  //(como matrices, recursos u objetos) sin necesidad de preocuparse por el numero de elementos.
    console.log(`${listen + 1}: ${card.color} ${card.number}`);
  });
//elegir carta
  let Valid = false;
  let cardlection;
 do{ 
  const Index = parseInt(rl.question("Elige el numero de carta que deseas jugar: ")) - 1;
  
      // Validar que el jugador eligio un indice valido
 if (Index >= 0 && Index < Player1.length) {
        cardlection= Player1[Index];
  
          // Paso 3: Validar carta
          if (cardlection) 
              Valid = true;
              // Paso 4: Poner carta (de mano jugador a trash)
              Player1.pop(Index, 1); // Elimina la carta del jugador
              trash.push(cardlection); // Coloca la carta en trash
              console.log("haz puesto:",cardlection, "como jugada" );
            } else {
              console.log("La carta elegida no es válida. Por favor, elige otra.");
          }
      }
      while (!Valid);

        console.log("Cartas tiradas:", trash);
        const inquirer = require('inquirer');
        function selectOption() {
            const questions = [
                {
                    type: 'list',
                    name: 'selectedOption',
                    message: '¿Qué opción deseas seleccionar?',
                    choices: [
                        'Opción 1',
                        'Opción 2',
                        'Opción 3',
                    ],
                },
            ];
        
            inquirer.prompt(questions).then(answers => {
                console.log(`Has seleccionado: ${answers.selectedOption}`);
            });
        }
        
        selectOption();