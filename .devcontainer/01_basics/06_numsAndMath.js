const count=400
console.log(typeof(count));
console.log(count);

//explicitly defining a number, It becomes an object with type number.
const count1= new Number(405);
console.log(typeof(count1));
console.log(count1);

//Through prototype you will get certain functions/properties

const num=450.567;
console.log(num.toFixed(2));//It also rounds off upto 2 decimal places.
console.log(num.toPrecision(5));//round off the number, starts from the starting of the number

const num2=100000;
console.log(num2.toLocaleString('en-IN'));//commas according to indian system

let x = num2.toString();
console.log(typeof(x));

/**********Maths*************/

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.ceil(4.3))
console.log(Math.max(2,343,53,35));
console.log(Math.random())//value between 0 and 1 by default.

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)//random value between max and min
//(within range)