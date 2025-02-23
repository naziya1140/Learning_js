const coding=[" js", " ruby ", " java", " python", "cpp"]
coding.forEach(function(val){
    console.log(val)
})
//above there is a callback function with a parameter val. The callback function will not be having name.

//variation
coding.forEach((item)=>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)//give the reference of printme, don't execute here.

coding.forEach((item, index, arr)=>{
    console.log(item, index);
})

const myCoding= [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    
    {
        languageName: "Python",
        languageFile: "py"
    },

    {
        languageName: "C++",
        languageFile: "Cpp"
    }

]//we have to learn iteration through it as most of the data comes from dtabase like this.
myCoding.forEach((item)=>{
    console.log(item.languageFile);
})

//lecture 30

const values= coding.forEach((item)=>{
    console.log(item);
    return item;
})

console.log(values);//giving undefined, returned nothing. 
//even if you manually return anything, it won't give any value, which means
//for each value don't return anything.

const nums1=[1,2,34,5,52,566];
const nums2= nums1.filter((num)=>num>4)//here when you don't define the scope then value will be implicitly returned.
const num3= nums1.filter((val)=>{
    return val==566;
})

console.log(nums2);
console.log(num3);
//filter operation takes callback function and return values unlike for Each.

const n1=[];
nums1.forEach((num)=>{
    if(num>4){
        n1.push(num);
    }
})//do the same thing using for each loop but it requires more logic, loop etc.

const book=[
    {   title:'b1',
        genre: 'History', 
        publish: new Date("2004-10-20"),
        edition: '2008'
    },
    {   title:'b2',
        genre: 'geo', 
        publish: new Date("2004-10-20"),
        edition: '2008'
    },
    {   title:'b3',
        genre: 'maths', 
        publish: new Date("2004-10-20"),
        edition: '2010'
    },
    {   title:'b4',
        genre: 'History', 
        publish: new Date("2004-10-20"),
        edition: '2022'
    },
    {   title:'b5',
        genre: 'Philosphy', 
        publish: new Date("2004-10-30"),
        edition: '2018'
    },
    {   title:'b6',
        genre: 'Machine learning', 
        publish: new Date("2004-10-20"),
        edition: '2008'
    },
    {   title:'b7',
        genre: 'Civics', 
        publish: new Date("2004-10-20"),
        edition: '2004'
    }
]

let userBooks= book.filter((bk)=>{
    return bk.genre=='History'
})

 userBooks= book.filter((bk)=>{
    return bk.edition>'2015' && bk.genre==='History';
})
console.log(userBooks);

