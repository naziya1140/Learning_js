const array= [1,3,4,5,6];
const initialValue=0;
const sumWithIntital= array.reduce(
    (accumulator, currentValue)=>accumulator+currentValue, initialValue
);
//accumulator at the very fist take value from inital, then it depends on the acc+ current value for the next
//sets of values.
console.log(sumWithIntital);

const num1= [1,2,3];
const total= num1.reduce(function (acc, curval){
    console.log(`acc: ${acc} and curVal: ${curval}`)
    return acc + curval
}, 0)
//reduce also have callback function.
//  acc: 0 and curVal: 1
// acc: 1 and curVal: 2
// acc: 3 and curVal: 3
console.log(total);