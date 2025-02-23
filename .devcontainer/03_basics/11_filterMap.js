num1=[1,2,3,4,5,6,7,8,9];
//adding 10 to each number.

let num2= num1.map((num)=>num+10);//map automatically returns value.

num2 = num1.map((num)=>{
    return num+20
})
console.log(num2);

//Chaining: when you use map, filter multiple times in a single statement.
const num3= num1.map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>=40)
//in map you have to return value then do it explicitly
//while in filter answer will be in true and false.
 console.log(num3);            
        