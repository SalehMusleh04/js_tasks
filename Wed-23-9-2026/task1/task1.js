
function findSmallest(arr){
    return Math.min(...arr);
}

console.log(findSmallest([30, 45, 60, 7]));


function AlphabeticalOrder(str){
    return str.split("").sort().join("");
}

console.log(AlphabeticalOrder('hello')); 



function factorial(num){
    let result = num;
    if(num < 0) return undefined; 
    else if(num !== 0){   
        while(num > 1){
            result = result*(num-1);
            num--;
        }
    } else {
        return 1;
    }
        return result;
}

console.log(factorial(8)); 
console.log(factorial(-1)); 
console.log(factorial(0)); 
console.log(factorial(1)); 



function oddOrEven(num){
   return num%2===0 ? "Even" : "Odd";
}
console.log(oddOrEven(9)); 


function addUp(num){
    let sum = num;
   while(num > 0){
    sum += (num-1);
    num--
   }
   return sum;
}

console.log(addUp(8)); 


function minMaxLengthAverage(arr){
   let new_arr = [];
   let sum = 0;  
   new_arr.push(Math.min(...arr));
   new_arr.push(Math.max(...arr));
   new_arr.push(arr.length);
   for(let i = 0 ; i<arr.length;i++){
       sum += arr[i];
   }
   new_arr.push(sum/arr.length);
   return new_arr;
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); 



function countWords(word){
   return word.split(" ").length;
}

console.log(countWords('hello from CodingAcademy!'));

function multiplyByLength(arr){
   return arr.map((item) => item*arr.length );
}

console.log(multiplyByLength([4,2,5])); 


function checkEnding(str1 , str2){
   return str1.endsWith(str2);
}

console.log(checkEnding("CodingSchool", "Ac")); 

function doubleChar(str){
    return str.split("").map((item) => `${item}${item}`).join("");
}

console.log(doubleChar('Coding')); 


function findIndex(arr , str){
    return arr.indexOf(str);
}

console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); 