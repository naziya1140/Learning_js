//Immediately Invoked Function Expressions(IIFE)
//This is basically to prevent pollution from global scope of the local scope.

//named IIFE
(function chai(){
    console.log(`DB connected`);
})();
//applying ; is necessary here, which is a sign of termination of the function.(applying explicity)
// ; is necessary to separate two iffe.


//here in the arrow everything is there except fun name.
//Adding () immediatly after function declaration will call the function as well.
//unnamed IIFE
(()=>{
    console.log("db connected 2");
} )();


//writing arrow function with a parameter.
((game)=>{
    console.log(`I love playing ${game}`);
})("Basketball");
