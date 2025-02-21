const user={
    Username:"Naziya",
    price:449,
    welcomeMessage: function(){
        console.log(`${this.Username}, welcome to my channel`)
        //this keyword help in reference the current variable.
        console.log(this);
    }
}

user.welcomeMessage();
user.Username="Abir"//context is changed
user.welcomeMessage()

console.log(this);//you are in node environment where it is referencing to a empty node.

// function chai(){
//     console.log(this);//if you print in function then you will get very large values.
// }
// chai();


// const chai= function(){
//     let username="naziya"
//     console.log(this.username)
// }
// chai();

//******Arrow function****/
const chai= ()=> {
    let username="naziya"
    console.log(this.username)
}
chai();

//const addTwo = (num1,num2) => num1+num2;//This is called implicit return. when your return is only in sinle line. 
//const addTwo = (num1,num2) => (num1+num2);//you don't have to write return even if you hve wrapped in parenthesis.
const addTwo = (num1,num2) => ({Username: "Naziya"});//If you want to return object without keyword return then wrap it in parenthesis..
console.log(addTwo())

const myarr=[2,34,53,1,32];

