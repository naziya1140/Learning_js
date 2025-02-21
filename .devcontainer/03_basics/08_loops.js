//These loops are array specific loop.
//for of

// ["", "", ""]
// {{},{},{}}

//for of loop
const arr=[1,2,4,6,23,6,73];
for (const num of arr) {
    console.log(num);
}

const greeting="Hello world";
for(const i of greeting){
    console.log(`each char is ${i}`)
}

//Maps: objects that hold key value pair.
const map= new Map()
map.set('USA', "United States of America")
map.set('IN', "India")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);//print unique values only.

//It will print the entire value and key, so better to destructure it.
for(const key of map){
    console.log(key);
}

//destructure of array--> key and value can be your own defined word.
for(const [key, value] of map){
    console.log(key);
}

const myObj={
    'game1': 'basketball',
    'game2': 'football'
}

// for(const [key, value] of myObj){
//     console.log(value);
// }   not working

// maps are iterable, and for objects we have other method to iterate it.