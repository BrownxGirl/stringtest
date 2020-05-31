
function add(str){
let delimeter = '' // take index 2 - [/n -1]
let replaceWithComma
let removingBackSlashes
let result 
let numArr
let sum
let removingNewLine
let stringArr


delimeter = str.slice(2 ,str.search((/[\n]+/))) /// /n -1 
replaceWithComma = str.replace(new RegExp(delimeter, "g"), ",")
removingBackSlashes = replaceWithComma.replace('//','')
console.log(delimeter)
if ( str.match(/[\*]|[\+]|[\$]|[\^]|[\.]/gm)){
  let wildcard
  let removingBackSlashes2
  let removingNewLine2
  let stringArr2
  let result2
  let numArr2
  let sum2
  wildcard =  str.replace(/[\*]|[\+]|[\$]|[\^]/g, ",");
  removingBackSlashes2 = wildcard.replace('//','')
  removingNewLine2 = removingBackSlashes2.replace(/(\n)/gm,"")
  stringArr2 = removingNewLine2.split(',')
   result2= stringArr2.map(Number);
   numArr2 = result2
   sum2 = numArr2.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum2
   }  

  
if (str.match(/(\n)/gm)){
  removingNewLine = removingBackSlashes.replace(/(\n)/gm,"")
  stringArr = removingNewLine.split(',')
   result= stringArr.map(Number);
   numArr = result
   sum = numArr.reduce(function(a, b){
        return a + b;
    }, 0);
   } 
  return sum

}



console.log(add("//_\n10,1_2"))


//var array =[Number(''),Number('10'), Number('2')];
// Getting sum of numbers.
// var sum = array. reduce(function(a, b){
// return a + b;
// }, 0);
//console. log(array); // Prints: 15.





// var splitx = split.join(',')// returns a string without /n
// let te = splitx.split(',')