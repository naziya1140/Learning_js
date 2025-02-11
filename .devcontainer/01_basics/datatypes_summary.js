/*
Primitive:-
7 types: Number, Bigint, String, Boolean, Undefined, Null, Symbol
no special datatype for decimal.

Non Primitive/Reference:
Arrays, Objects, Functions.
Js is dynamically typed, You don't have to define the datatype.
*/ 

const stdId=Symbol('132a')
const teacherId=Symbol('132a')

console.log(stdId===teacherId);//always false because of uniqueness of symbol

const heros=["Shaktimaan", "Doga"]

//object
let myObj={
    name:"Naziya",
    age: 21,
}

//Function-->here we are storing funtion like a variable.
const myFunction= function(){
    console.log("I am learning Js");
}

//printing object and function.
console.log(heros)
console.log(myObj)

//Datatype of myfunction is function.
console.log(typeof(myFunction));

/**************Memory***********/

//Stack(Primitive), Heap (Non-primitive)
//In stack memory you get a copy of a variable declared while 
//in non primitive you will get a reference so that you can directly change in the original variable.

/*let suppose you have created an object with name obj1, the object will be stored in the heap memory,
and it's reference obj1 in the stack memory(pointing towards heap memory), now if you will assign the obj1 in another obj2
then that obj2 will also start pointing at the heap memory, and any change made through the copy(obj2) will be reflected in the 
original object.*/

let variable1=123
let variable2=variable1
variable2=455

console.log(variable1);
console.log(variable2);


let obj1={
    email: "user.org.in",
    id: 123
}

let obj2=obj1;
obj2.email="user2.gmail.com";//email of user1 changed.

console.log(obj1)
console.log(obj2)