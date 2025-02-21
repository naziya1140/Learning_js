//______________for in loop for object
const myObj={
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    console.log(key)//for keys
    console.log(myObj[key]);//for values.
}

//________________for in loop for arrays.
const programming= ['js', 'rb', 'py', 'java'];

for(const key in programming){
    console.log(programming[key]);
}
//array's key is by default a number and starts from 0.

//for in loop for map
const map= new Map()
map.set('USA', "United States of America")
map.set('IN', "India")
map.set('FR', "France")
map.set('IN', "India")

for(const key in map){
    console.log(key);
}//Map is not iterable in this way.

//for each loop(preferable for for each loop)
const coding=  ['js', 'rb', 'py', 'java'];
//callback function don't have name.

coding.forEach(function name())