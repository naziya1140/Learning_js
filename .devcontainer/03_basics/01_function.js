function sayMyname(s){
    console.log(`My name is ${s}`);
}
//func_keyword fun_name(parameters){declaring}

sayMyname("Naziya")
//where sayMyname is reference and sayMyname() is execution

function addTwonos(num1, num2){
    return num1+num2;
}
console.log(addTwonos("Naziya", " Afsana"));
console.log(addTwonos(3,'4'));
console.log(addTwonos(1,'a'));
console.log(addTwonos(1,null));

//storing fn in a variable
const res=addTwonos(2,4);
console.log(`result ${res}`);

function loginUserMessage(username=" sam "){
    if(!username){
        console.log("please enter username");
        return; 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Jaishivam"));
console.log(loginUserMessage());//returns undefined, better you handle the thing in the function using if else statement
//or else you can give a default value eg sam so that it wont give undefined.

//For eg. we are having a function where the number of arguments is undefined---> for that you have rest operator.
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(344,222,422,400));
/*
val1-->344
val2-->222
rest value in num1
*/

const user={
    username: "hitesh",
    course: "Git"
}

function handleObject(obj){
    console.log(`The username is ${obj.username} and course is ${obj.course}`)
    // console.log(`The username is ${obj.username} and course is ${obj.coursesss}`)--->wrong spelling.
}

handleObject(user);

//directly passing object
handleObject({
    username: "hitesh",
    course: "Git"
})

const arr=[200,400,500,500];
function returnSecondValue(getArr){
    return getArr[1];
}

console.log(returnSecondValue(arr));