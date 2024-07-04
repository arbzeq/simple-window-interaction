//Använd prompt för att fråga användaren efter deras namn. Spara detta i en variabel och använd console.log för att visa ett hälsningsmeddelande som inkluderar deras namn.
const yourName = prompt("Skriv in ditt namn!");
console.log(`Hej ${yourName}`);


//Använd prompt för att fråga användaren efter deras födelseår. Spara detta i en variabel.
const yourBirthYear = parseInt(prompt("Skriv in ditt födelseår!"));

let currentYear = Date().getFullYear();

let currentAge = currentYear - yourBirthYear;

console.log(`Du är ${currentAge} år gammal.`);

let number1 = parseInt(prompt("Skriv in ett nummer"));
let number2 = parseInt(prompt("Skriv in ett annat nummer"));

console.log(`Additionen är ${number1 + number2}`);
console.log(`Subtraktionen är ${number1 - number2}`);
console.log(`Produkten är ${number1 * number2}`);
console.log(`Kvoten är ${number1 / number2}`);

console.log(`Kvoten är ${number1 / number2}`);