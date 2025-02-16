/*************ARRAY**********/

//declaration of Array

const arr= [0,1,2,3,4,5, "Naziya"];
const myArr=new Array(3,4,5,6,7,8);
console.log(arr[6]);
//Array is an object where you can keep multiple datatypes element, in javascript the array is resizable..
//Whenever you perform copy operation in array,it will create shallow copy, in which changes made in the copied array will be reflected in the original array.

//methods of Array
myArr.pop();//deletes last element.
myArr.push(6);

myArr.unshift(9);
//Inserting an element at the starting of the array, but it is not recommended because you have to shift the entire element of the array.
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join();

//Slice and Splice
console.log("A", myArr);
const arr1= myArr.slice(1,3);// gives array from m to n-1, slice(m,n);
console.log(arr1);

console.log("B ", myArr);

const arr2=myArr.splice(1,3);//gives back from m to n, and the original number.
console.log(arr2);


/*******ARRAY 2nd PART******/

const marvelHeros=["IronMan", "Thor", "Captain America", "Captain Marvel"];
const dcHeros=["batman", "Flash"];

marvelHeros.push(dcHeros);//this will push the entire dcheros as single element.
const allHeros=marvelHeros.concat(dcHeros);
console.log(allHeros);

//we use spread instead of concat because it helps in concatnation of multiple array

const allNewHeros=[...dcHeros,...marvelHeros];
console.log(allNewHeros);

//Array.isArray is used to check if input is array or not
console.log(Array.isArray("Hitesh"));
console.log(Array.isArray(allNewHeros));

//created an array of the given input
console.log(Array.from("Naziya"));

//Interesting case: When you don't specify things clearly
//then it may return an empty string.
console.log(Array.from({name:"Hitest"}))

let score1=100;
let score2=200;
let score3=300;

//Array.of helps in creating an array of elements.
console.log(Array.of(score1, score2, score3));

















