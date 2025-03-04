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

//fetch api---> instead of xmlhttprequest.
//Fetch is a global method, starts the process of fetching a resource from the network and returns a promise.

//promise----> not able to fetch-----> then reject.
//but in case of http error, the promise does not reject.

//fetch goes in the microtask queue, which is also called priority queue and then the promise is resolved.
//way of working of fetch is divided into two parts,
//1. web browser/node ---->sends (network rquest)
//2. Data( space reserved)---->i) onfulfilled[] and onRejection[];

//If you will get any response from the network request, then it will go to the onfulfilled[] array.
//If you will get any error, then it will go to the onRejection[] array.

//any of the two value will assign the value in data, which will fulfill response.(which is present in the global memory)
