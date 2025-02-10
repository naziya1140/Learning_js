//const are immutable, while var is mutable.
//to declare variable we have two ways -->let --->var
//let is used in most cases, prefer not to use var due to problem in scope.
const accountId = 144336
let accountEmail="naziya123@gmail.com"
var accountPassword="123456"
accountCity="Mumbai"//It is possible but not a good practice.
//accountId=45    //Not allowed
accountEmail="xyz@gmail.com"
accountPassword="567567"

//multiple items represented in a tabular structure.
console.table([accountId,accountEmail, accountPassword, accountCity])

//initial value of let is undefined.