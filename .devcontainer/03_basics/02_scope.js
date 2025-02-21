const b=20;
var c=30000;
//you have declared var initially, and if you chnge it even in the scope, the change will be reflected in the original c

//curly braces is scope.(don't confuse it with object)
{
    let a=10;
    let b=20;
    c=30;
}
console.log(c);

function one(){
    const username="Naziya"
    function two(){
        const website="Youtube"
        console.log(username);
    }
    //console.log(website)
    //two()---->If two is called then then only function two will execute.
}

one()
//function two can access all the variable of fn one, but vice versa is not true

/********Interesting example*******/

console.log(addone(5));//its working even if the things are defined later on.
//console.log(addtwo(4));//It won't work as it is declared as a variable.

function addone(num){
    return num+1;
}

const addtwo=function(num){
    return num+2;
}
//addtwo is sometimes called expression
//In js the variables are very powerful, as they can hold fn, json values.
