//Dates

let d=new Date()//It is a object
console.log(d);
console.log(d.toString());//convert the entire date, time to string
console.log(d.toDateString());//converting only the date to string
console.log(d.toLocaleString());//give 11/11/2023 with time in AM and PM
console.log(typeof d);

let myCreatedDate=new Date(2023,0,23);
console.log(myCreatedDate.toDateString());//Months in js starts with 0.

let myCreatedDate2=new Date("2022-01-14");
//When you write in "yyyy-mm-dd" format your month will start with zero
let myCreatedDate3=new Date("01-13-2023");

console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate3.toDateString);

//TimeStamp
let ts= Date.now();
console.log(ts)//It basically gives the number of seconds from jan 1970 till now. 

console.log(myCreatedDate.getTime())//gives timestamp of a given date
console.log(Math.floor(Date.now()/1000)); //It differentiates between time, dividing by thoudand is useful for checking if two dates are same.


let newDate=new Date();
console.log(newDate);
//If you want to extract min, sec, month, year
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: 'long'
})

