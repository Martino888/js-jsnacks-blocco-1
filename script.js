/*
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/
// const num1 = parseInt(prompt('numero 1:'));
// const num2 = parseInt(prompt('numero2:'));

// if(num1 > num2){
//     alert(num1);
// }else if(num1 < num2){
//     alert(num2)
// }else{
//     alert ('sono uguali')
// } 




/*
snack 2
l' utente inserisce due parole in successione, con due prompt.
il software stampa prima la parola piu corta, poi la parola piu lunga.
*/


// const prima = prompt ("dammi una parola")
// const seconda = prompt ("dammi una seconda parola")
// const risultato = document.querySelector ('.parola')

// if( prima.length > seconda.length){
//     risultato.innerHTML = `${prima} <br> ${seconda}`
// }else if(prima.length < seconda.length){
//     risultato.innerHTML = seconda + ' ' + prima
// }else{
//     risultato.innerHTML = uguali
// }



/*
Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/


// let arrNum = [];

// for (i = 0; i < 10; i++) {
//     let userNum = parseInt(prompt("inserisci numero"));
//     arrNum.push(userNum);    
// }

// let somma = 0;
// for (i = 0; i < arrNum.length; i++){
//     somma = somma + arrNum[i];
// }  
// alert(somma);



/*
Snack 4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/

// let arrayNomi = ["marco", "lucia", "luca", "giulia", "angelica", "giovanni"];
// let nome = prompt ('inserisci il nome');
// let invitato = false;


// for(let i = 0; i < arrayNomi.length; i++){
//     if(nome.toLocaleLowerCase()== arrayNomi[i].toLocaleLowerCase()){
//         invitato =true
//     } 
// }
// invitato ? console.log(`Benvenuto ${nome}!`) : console.log("Non sei stato invitato.");



/* 
Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

//  let numeri = [];
//  let numero;

//  for (let i = 0; i < 6; i++){
//     numero = parseInt(prompt('Inserisci un numero'));
//     if(numero % 2 == 1){
//     numeri.push(numero);
//     } 
//    }

// console.log(numeri)


// console.log(numeri);


/*
Snack 6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

// let input = "";
// let res = 0;
// while(input.length != 4){
//     input = prompt("Inserisci un numero di 4 cifre: ");
// }
// for(let i = 0; i < input.length; i++){
//     res = parseInt(res) + parseInt(input[i]);
// }
// console.log(res);



/*
Snack 1.9 
Calcola la somma e la media dei primi 10 numeri.
 */


// let somma = 0;
// for(let numero = 1; numero <= 10 ; numero++ ){
//     somma += numero;
//     console.log(numero)
// }
// let media = somma / 10; 

// console.log(somma);
// console.log(media);

/* 
Snack 2.1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let somma = 0 
let num = parseInt(prompt('inserisci un numero'));
console.log(num) 

for(let num = 0; num < 5; num++){
   let num = parseInt(prompt('inserisci un numero'));
   console.log(num);
   somma += num;
   console.log(somma);
}



/* 
Snack 2.2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/




/* 
Snack 2.3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati.
 */

