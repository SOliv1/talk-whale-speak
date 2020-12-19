const input = "a whale of a deal!";
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = []; 

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log("inputIndex = "+ inputIndex);
 // console.log("inputIndex  "+ input[inputIndex]);
 for (let vowel = '0'; vowel < vowels.length; vowel++){
 //  console.log("vowel =" + vowel);
 if (input[inputIndex] === vowels[vowel]) { 
   if(input[inputIndex] === 'e'){
    resultArray.push('ee');
   }
    else if(input[inputIndex] === 'u'){
      resultArray.push('uu');
    }
    else  {
    resultArray.push(input[inputIndex]);
     }
   }
  }
}
//console.log(resultArray);
console.log(resultArray.join("").toUpperCase());





