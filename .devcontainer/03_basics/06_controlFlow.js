if(2!==-2){console.log("naziya");}
const isloggedIn=true;
if(isloggedIn) {console.log("hello world");}

//shorthand notation
const balance=1000;
if(balance)console.log("test");//Implicit scope.

const key=2;
switch(key){
    case 1:console.log("January");
    break;

    case 2:console.log("Feb");
    break;

    default:
    break
}

//in switch case if a case is matched then all the cases below it will be executed except default, so better if you put a break;


const key2="Jan";
switch(key2){
    case "Jan":console.log("January");
    break;

    case "Feb":console.log("Feb");
    break;

    default:
    break
}

/*values that are considered false: false, 0,-0,null, undefined,BigInt, "", NaN
truthy values: "0", 'false', " ", {}, [], function(){},
*/

//if array is empty
const userEmail=[];
if(userEmail.length===0)console.log("array is empty");

const emptyObj= {}
if(Object.keys(emptyObj).length===0){
    console.log("empty object");
}
//equality comparison

/*
false==0------------->true
false=''-------------->true
0==''--------------->True
*/

//Nullish coalescing Operator(??): null undefined.
let val1;
val1=5 ?? 10//made for special case when value comes from database.
console.log(val1)

let val;
//val=null?? //complex function from where you will get the value if null is not working.
//val=null? 12?13;
val=undefined?? 15
console.log(val);

//ternary opertor which is a if else ka short hand operator.