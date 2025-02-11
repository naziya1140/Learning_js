let score=45
console.log(typeof(score))

let score1="45ABC"
console.log((Number(score1)))//gives NaN

let score2="Naziya"
console.log((Boolean(score2)))

let score3=""
console.log(Boolean(score3))

let score4=null
console.log(typeof(null))

//It's necessary to check the type of a input because it look like number but the given input is string.

/*
-->Converting a numeric string will give you number, but non
numeric will simply print null

-->An empty string converted to Boolean gives False

-->Type of null is Object
*/

//***************Operations************/
let value=3
let negvalue=-value
console.log(negvalue)

console.log(2**3)//2^3


let str1="Art"
let str2=" Attack"
let str=str1+str2
console.log(str);

console.log("1"+2+2);
console.log(1+2+"4");
//first one will be simply string concatenation(122)
//second one is number addition and string concatenation(34)

console.log(+"")//using + for converting to Boolena not a good practice
