//singleton: literals don't create singleton but constructors do
//  1.objects literals------->literals
//  2.objects.create--------->constructor

//objects have keys and values, where the first value is always going to be 
//string in which it is not necessary to put " ", and values  can have any datatype


//declaring symbol
const mySym=Symbol("key1");

const JsUser={
    name: "Naziya",
    age: 21,
    location: "Chandigarh",
    email: "naziya123@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday", "wednesday"],
    "full name": "Naziya B",
    [mySym]: "mykey1"
}

console.log(JsUser.email);
console.log(JsUser["email"])

//problem with the first method: jsuser.full name & jsuser."full name" both are wrong
// that is why the second method is preferred.
console.log(JsUser["full name"]);


//acessing symbol which is present in the object
console.log(JsUser[mySym]);

JsUser.email="naziya@332.com" 
//Object.freeze(JsUser);

//changing will not be reflected
JsUser["full name"]="Naziya Mirza";
console.log(JsUser);

//functions can be treated as variables.
JsUser.greeting= function(){console.log(`welcome to my js notes. ${this.name}`)}
console.log(JsUser.greeting());

console.log(JsUser.greeting);//reference to the function will be returned.
