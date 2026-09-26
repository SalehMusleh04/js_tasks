let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

let arr =  [1, 2, 3, 4, 5]; 

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


for (let i = 0; i <= 10; i+=2) {
    console.log(i);
}


let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum+= i; 
}
console.log(sum);

let largestNum = 0;
for (let i = 0; i < arr.length; i++) {
    if( arr[i] > largestNum){
        largestNum = arr[i];
    }
}
console.log(largestNum);

let avg = 0;
for (let i = 0; i < arr.length; i++) {
     avg+=arr[i];
     if(i === arr.length-1){
        avg = avg/(arr.length);
     }
}

console.log(avg);

  let factorial_1 = 5;  
      for (let i = factorial_1; i > 1; i--) {
            factorial_1 = factorial_1*(i-1);
        }
console.log(factorial_1);

let a = 0;
let b = 1;
let next;
for (let i = 0; i < 10; i++) {
   console.log(a);
   next = a+b;
   a = b;
   b = next;
   if(a > 10){
    break;
   }
}

let numsScope = 20 

for (let i = 2; i <= numsScope; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if(i%j === 0){
        isPrime = false
        break;
      }
    }
     if(isPrime){
        console.log(i);
      }
}


let arr_1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
for(let i=0;i< arr_1.length ; i++){
    for(let j=0;j< arr_1[i].length ; j++){
    console.log(arr_1[i][j]);
}
}

let arr_2 = [1, 2, 3, 4, 5 , 7,8,9,10];
for(let i=arr_2.length-1;i>=0 ; i--){
    console.log(arr_2[i]);
}

let arr_3 = [1, 2, 3, 4, 5 , 7,8,9,10];
let numStep = 3;
for(let i = 0 ;i<arr_3.length;i+=numStep){
    console.log(arr_3[i]);
}


let arr_4 = [1, 2, 1, 3, 2, 1 , 1];
let num = 1;
let count = 0;
for(let i = 0 ;i<arr_4.length;i++){
    if(arr_4[i] === num){
        count++;
    }
}
console.log(count);


 
const heros = [ 
  {name: 'Iron Man', power: 'Tech'}, 
  {name: 'Spider-Man', power: 'Spider abilities'}, 
  {name: 'Thor', power: 'Godly powers'}, 
  {name: 'Hulk', power: 'Super strength'} 
 
] 

let newHeros = heros.map((hero , idx) => { 
   return{
    hero : hero.name,
    power: hero.power,
    id : idx,
   }
})

console.log(newHeros); 

function inputWords(words){
   return words.filter((item)=> item.length>=7);
}

console.log(inputWords(["spray", "limit", "elite", "exuberant", "destruction", "present"]));


function sumSquaredDivisibleBy5(nums){
   return nums.reduce((acc , curr) => curr%5 === 0 ? acc + (curr*curr) : acc
      , 0);
}

console.log(sumSquaredDivisibleBy5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

    
