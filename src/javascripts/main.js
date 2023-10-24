//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


//Define variables
let n = 10;
const h = 100;

let is_active = true;

if(!is_active){

}

if(is_active){

}

console.log(n)
console.log("Hello from JavaScript!");
console.log(`The value of n is ${n}`);


if(n%2 == 0){
    console.log(n,"is even number");
} else {
    console.log(n, "is odd number");
}
console.log(`${n} is ${n%2 == 0 ? "even" : "odd"} number`);


const quote = "To be or not to be";

console.log(quote, "has", quote.length, "characters");
console.log(quote.toUpperCase());
console.log(quote.toLowerCase());
console.log(quote.charAt(0));
console.log(quote[0]);


function printCharacters(str){
    let output = "";
    for(let i = 0; i < str.length; i++){
        output += str[i] + '\n';
    }
    return output;
}
let print = printCharacters(quote);
console.log(print);

console.log(printCharacters("Hello World"));

// let i = 0;
// while(i < quote.length){
//     console.log(quote[i]);
//     i++;
// }
// console.log(i, "Hello");
// i=0;
// do{
//     console.log(quote[i]);
//     i++;
// }while(i < quote.length);



let day = 1;

if(day == 1 || day == 7){
    console.log("Weekend");
} else if(day > 1 && day <= 6){
    console.log("Weekday");

}else{
    console.log("Invalid day");
}


day = 7;
switch(day){
    case 1:
    case 7:
        console.log("Weekend");
        break;
    case 2:
    case 3:
    case 4:
    case 5: 
    case 6:
        console.log("Weekday");
        break;
    default:
        console.log("Invalid day");
        break;
}

function calculateY(){
    let x = parseInt(document.querySelector("input").value);
    let y = 4*x+12;

    document.querySelector(".result").innerHTML = y;
}

document.querySelector("#getResult").onclick = calculateY;

