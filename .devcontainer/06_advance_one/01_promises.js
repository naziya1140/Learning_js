//fetch('http://something.com').then().catch().finally();
//Above is consumption of promises, if you get answer, it will come in then, error in catch and finally will always run
//Promise is a constructor function, it takes a function as an argument, this function takes two arguments, resolve and reject

//queue and bluebird are libraries, through these libraries you can use 
//as many js features in the core js.
//node js gave direct support of the libraries.

const promiseOne=new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Asyn task completed');
        resolve();//now connected to then.
    }, 1000);
})
//promise takes callback.

promiseOne.then(function(){
    console.log("promise consumed");//executed when the promise is consumed.
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve();
    }, 1000);
}).then(function(){
    console.log('async task 2 consumed.');
})
//then cathes the resolve of the promise.


const promisethree= new Promise(function(resolve, reject){
    setTimeout(() => {
    resolve({username: "Chai", email: "Chai aur Code"})//in most cases objects are passed. 
    }, 1000);
})

promisethree.then(function(user){
    console.log(user);//got the parameter passed in the resolve.
})


promisefour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error=true;
        if(!error){
            console.log("file accessed");
            resolve({username: "chai", email: "chai aur code"});
        }
        else{
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

// const username= promisefour.then(function(user){
//     console.log(user);
//     return user.username;
// })
//to extract data you can't rely on the returning in a variable.


//Chaining of then.
//chaining in new line(easier to understand.)
promisefour.then(function(user){
    console.log(user);
    return user.username;
}).then((myusername)=>{
    console.log(myusername);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('(finally block)The promise is either resolved or rejected.')
});

//catch is necessary as you have used reject.


promisefive= new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error= true;
        if(!error){
            console.log('file accessed');
            resolve({username: "Javascript", password: '123353'});
        }
        else{
            reject('ERROR: js went wrong');
        }
    },1000);
});

//type2: using async and await.
async function consumePromisefive(){
    try{
        const response = await promisefive
        //await waits for the promise to be resolved.
        console.log(response);
    }
    catch(err){
        console.log(err)
    }
}

consumePromisefive();//calling the function.
//async function always returns a promise.

// async function getAllUsers(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users');
//         const data= await response.json();//as it comes in string, await because it also takes time to fetch.
//         console.log(data);
//     }
//     catch(err){
//         console.log("E:"+err);
//     }
// }

//getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
//values getting print earlier than the fetch.