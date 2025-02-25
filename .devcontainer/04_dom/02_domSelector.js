document.getElementById('title')//It will give entire expression.
document.getElementById('tiltle').id//gives name of id
document.getElementById('title').class//doesn't give class
document.getElementById('title').className//it gives the class of the id selected.
document.getElementById('title').getAttribute('class')//it is a method that returns back the attribute.
document.getElementById('title').setAttribute('class', 'test')//while setting the attribute, it will always override the original fn.
const title= getElementById('title')
title.style.backgroundColor= 'green'//while giving the attribute give same syntax as inline argument
title.style.padding="15px"
title.style.borderRadius='15px'

//how a content is added.
title.textContent//to get the textContent, even if the styling of the contnt is hidden.(display: none)
title.innerText//shows the content which is visible.
title.textHTML//giving the entire html, along with tags.
//all three are giving the same value

document.querySelector('h1')//gives first h1
document.querySelector('#title')//selecting id
document.querySelector('.title')//selecting class
document.querySelector('p:first-chile')//syntax reselembling to csss

//<li>xyz</li>   how to select that.
const myul= document.querySelector('ul')
myul.querySelector('li');

const turnGreen= myul.querySelector('li');
turnGreen.style.backgroundColor="green"

//selecting multiple elements.
const tempLiList=document.querySelectorAll('li');
//this does\n't give array as the map is not available.
// [li, li , li] will be returned
tempLiList[0].style.color='green'

tempLiList.forEach(function (l){
    l.style.backgroundColor='blue'
})//usiing for each loop in nodelist.

const myH1=document.querySelectorAll('h1');//gives nodeyulist as output.
myH1[0].style.backgroundColor='blue'

let li= document.getElementsByClassName('list-item')//returns htmlCollection with no option of looping but you can convert it to nodelist in order to use for loop on it.
//html collection is different from nodelist.

const myConvertedArray=Array.from(li)//converting to array.
myConvertedArray.forEach(function(l){
    console.log(l)='orange'
})






