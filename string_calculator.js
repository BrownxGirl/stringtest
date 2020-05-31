
function add(a) {
    let sum = 0;
    let splitStr = a.split(',');
    let negNum = /-\d+/g;
    if(a == ''){
        return 0
    } else if(a.match(negNum)){
        throw 'This is not allowed' + a.match(negNum)
    }
    for (let i = 0; i < splitStr.length; i++) {
        sum += parseInt(splitStr[i])
    }

    return sum;
};





console.log(add('1,2 /n,7'))







// if ( str.match(/\*|\+|\$|\^|\./gm)){
//   let wildcard
//   let removingBackSlashes2
//   let removingNewLine2
//   let stringArr2
//   let result2
//   let numArr2
//   let sum2
//   wildcard =  str.replace(/\*|\+|\$|\^|\./g, ",");
//   removingBackSlashes2 = wildcard.replace('//','')
//   removingNewLine2 = removingBackSlashes2.replace(/(\n)/gm,"")
//   stringArr2 = removingNewLine2.split(',')
//    result2= stringArr2.map(Number);
//    numArr2 = result2
//    sum2 = numArr2.reduce(function(a, b){
//         return a + b;
//     }, 0);
//     return sum2
//    }  










// var string = "//;\n1;2"
// var deliass = string.match(/.+\n\b/g) //returns an array with one value with the first characters ending at /n
// var split = deliass.join(',')// returns a string without /n
// //var replace = string.replace(split,'')
// var sep = string.replace('//','') //removes the //


// //console.log(arr)
// // function test(str){
// //     let deliass ;
// //     var split;
// //     let sep;
// //     let newline
   
// //     if (str.includes('//') == true){
// //         deliass = str.match(/.+\n\b/g)
// //         split = deliass.join(',')
// //         sep = str.replace('//','')
// //         newline = sep.replace(/\r?\n|\r/g, '');

// //          return deliass    
// //     }else {
// //         return 'nothing'
// //     }
// // }





// // for(let i = 0; i < str.length; i ++){
// //     if(str[i] == sep ){
// //         return "ok"
// //     }
// // }   





