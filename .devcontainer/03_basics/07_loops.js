//for loop
for(let i=0; i<5; i++){
    console.log(i);
}
//js don't give index out of bound error but it gives undefined if values go outside of the array length.
//continue statement
for(let i=0; i<5; i++){
    if(i==3)continue;
    console.log(i);
}

//break statement
for(let i=0; i<5; i++){
    if(i==3)break;
    console.log(i);
}

//while loop
let i=4;
while(i<10){
    console.log(i);
    i++;
}

//do while loop
let score=11;
do{
    console.log(`Score is ${score}`)
    score++;
}while(score<11);

