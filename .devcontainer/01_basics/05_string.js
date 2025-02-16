"Hello" + "World" //concatenate
const Name="Naziya"
const count=1;
//console.log(name+ count+"value")
//Above is outdated syntax

//A better approach
console.log(`Hello my name is ${Name} and my score is ${count}`);

//declaring String
const gameName =new String("Hi world")
//String is a object 

//some functions of String
const newString= "   Matplotlib   ";
const hero="Shakti Maan"
console.log(newString);
console.log(newString.trim());

const url="https://wiki%20pidiea.com"
console.log(url.replace('%20', ''))

console.log(url.includes('Google'))//return Boolean value
console.log(hero.split())//split the spaces.

console.log(hero.toUpperCase());
console.log(hero.substring(0,6));
