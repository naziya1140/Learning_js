const tinderUser =new Object();//singleton object
console.log(tinderUser);

const tinderUser2={}//non singleton object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isloggedIn=false;

const regularUser={
    email: "some@gmail.com",
    fullname: { 
            userfullname :{
            firstname: "Naziya",
            lastname: "Begum"
        }
    }
}
console.log(regularUser);
//fullname is an object, you can have multiple nesting 
console.log(regularUser.fullname.userfullname.firstname);

//combining objects
const obj1={1:"a", 2: "b"}
const obj2={3: "a", 4: "b"}
const obj3={5: "a", 6: "b"}
const obj4= Object.assign({}, obj1, obj2);
//here {} is given initially because it's syntax is target, source  
//things of obj1, obj2 will get copied to target which is taken empty because it may end up changing tha obj1 if the {} is absent.

// Object.assign(obj1, obj2,obj3);
// console.log(obj1);//obj1 value changed

//frequently used---->latest and simple
const obj5={...obj1, ...obj2}

/*******Object part3******/
const course={
    coursename:"Javascript ",
    price: 999,
    courseInstructor:"Hitesh Bhaiya"
}

//chaning name for easily calling(destructure).
//syntax= {name of key: revised name}=name of object.
const{ courseInstructor: ins}=course
console.log(ins);//print name of courseInstructor.

//react---> destructuring
// const navbar=({company})=>{

// }
// navbar(company = "Google");

//API------>
//values basically comes in json which resembles to objects
// {
//     "name": "vartika",
//     "course": "DBMS",
//     "price": "Free"
// }
//in json both keys and values are in string

//sometimeś you will get api in array format, [{   }, {   }]---->Array with multiple loop
//json formatter to understand a particular json file-----> with the help of tree structure.
