'use strict'

let cash = 1000;
let current_liabilities = 500;

console.log(cash/current_liabilities);


let  revenues = 1000;
let  expenses = 500;

console.log(revenues-expenses);


let  liabilities = 1000;
let   equity = 500;

console.log(revenues+expenses);

let   profit = 1000;
let   sales = 500;

console.log(revenues*expenses);

let num1 = 7;
let num2 = 9;
let num3 = 2;

console.log((num1+num2+num3)/3);

let   price = 150;
let   discount = 0.3;

console.log(price-(price*discount));

let age = 20;

if(age > 18 && age < 30) console.log(true);

let number1 = 2;
let number2 = 3;

console.log(Math.pow(number1,number2));

let number_1 = 10;
let number_2 = 4;

console.log(number_1%number_2);

let str = 'Welcome to Orange';

console.log(str.toUpperCase());
console.log(str.split(" ")[1].toUpperCase());
console.log(str.replace("Welcome to " , "Hello from "));
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.concat(" Jordan"));
console.log(str.replace("Orange",'"Orange"'));

 let str_1 = 'cactus';
 let firstChar = str_1[0];
console.log(firstChar + str_1.slice(1).replaceAll(firstChar,'*'));

let orange_arr = ["Coding", "Academy", "By", "Orange"];

orange_arr.push("Jordan");

console.log(orange_arr);

orange_arr.pop();
orange_arr.unshift("Welcome" , "To");

console.log(orange_arr);

orange_arr.splice(0,3);

console.log(orange_arr);

orange_arr.unshift("Coding");

let orange_str =  orange_arr.join(" ")

console.log(orange_str);

console.log(orange_str.split(" "));

orange_arr.splice(1,2);

console.log(orange_arr);

var fruit = ["banana" , "apple" , "orange" , "watermelon"];
var vegetables = ["carrot" , "tomato" , "pepper" , "lettuce"];

vegetables.pop();
fruit.shift();
fruit.indexOf("orange");
fruit.push(5);
vegetables.length;
let food = [...fruit , ...vegetables];

food.splice(4,2);
food.reverse();
food.join(" ");

function yourAge(birth_year){
    let current_year = new Date().getFullYear();
    let my_age = current_year - birth_year;
    if( my_age < 18) {
        console.log("You are not eligible. You may join other programs.")
    }
    
    else if (my_age > 18 && my_age < 30){
        console.log("You are eligible. Start your application.")
    }
    
   else if (my_age > 30){
       console.log("You may join the kids' program.")
       
    }
    
    else{
        
        console.log('You may join the senior’s program.')
    }
}
    
    yourAge(2004);
    
    function switch_letters(word){
        let newWord = "";
        for(let i=0;i<word.length;i++){
          newWord += word[i] === word[i].toUpperCase() ? word[i].toLowerCase() :  word[i].toUpperCase();
        }
        return newWord;
    }
    let orange_word = switch_letters("OrAnGe");
   console.log(orange_word);

   let capitalize_str = "Coding Academy by Orange";

   function remove_spaces(word){
       return word.split(" ").join("");
   }

   console.log(remove_spaces(capitalize_str));

   let array = ["Coding", "Academy", "By", "Orange"]; 

   function remove_element(arr , word){
        return arr.filter((item) => item !== word);
   }

   console.log(remove_element(array , 'By'));


   function isEven(number){
       return number%2 === 0 ;
   }

   console.log(isEven(3));
   console.log(isEven(2));

   function numberCheck(variable){
    if(typeof variable === 'number'){
        console.log('that\'s a number');
    } else{
        console.log('that\'s not a number');
        
    }
   }

   numberCheck('7');

   function largestNum(num1 , num2){
        return Math.max(num1,num2);
   }

   console.log(largestNum(70,50));

   function triangleType(deg1,deg2,deg3){
        if(deg1 && deg2 && deg3 === 60){
            console.log("This is an equilateral triangle ")
        } else if ((deg1 === deg2 || deg2 === deg3 || deg1 === deg3) && deg1 + deg2 + deg3 === 180){
            console.log("This is an isosceles triangle ")
        } else if(deg1 + deg2 + deg3 === 180){
            console.log("This is a scalene triangle ")
        } else{
            console.log("This is not a triangle!!")
        }
   }
   
triangleType(60,60,60);
triangleType(40,40,100);
triangleType(130,20,30);
triangleType(0,60,60);

function range_check(number , r1 , r2){
        if(number >= r1 && number <= r2){
            console.log("The number in the range");
        }
        else{ 
            console.log("The number not in the range");
        };
}

range_check(6 , 1 , 40);

function leapYear(year){
       year%4 === 0 ? console.log(`${year} is a leap year`) : console.log(`${year} is not a leap year`) ;
       
}

leapYear(2004);


for(let i=1;i<51;i++){
   if (i%2 === 0){console.log(`num : ${i}`) } ;
}

let i = 1;
while(i<=50){
    if (i%2 === 0){console.log(`num : ${i}`) };
    i++;
}


for(let i=1;i<=100;i++){
        let num = ((i-1)%50)+1;
        if (num%2 === 0){
            console.log(`num : ${num}`);
         } ;
       
}

for(let i=1;i<=50;i++){
    if (i%2 === 0){console.log(`num : ${i}`) } ;
}


for(let i=1;i<=50;i++){
    if (i%2 !== 0){console.log(`num : ${i}`) } ;
}

for(let i=1;i<=100;i++){
    if(i%3 === 0 && i%5 === 0){
        console.log('FizzBuzz');
    }
    else if(i%3 === 0){
        console.log('Fizz');
    }
    else if(i%5 === 0){
        console.log('Buzz');
    } else{
        console.log(i); 
    }
}

function fizzBuzz(num){
     
    if(num>100) return;

    if(num%3 === 0 && num%5 === 0){
        console.log('FizzBuzz');
    }
    else if(num%3 === 0){
        console.log('Fizz');
    }
    else if(num%5 === 0){
        console.log('Buzz');
    } else{
        console.log(num); 
    }
    
    fizzBuzz(num+1);
    
}

fizzBuzz(1);

function banknotes(num , arr){
    let new_arr=[];
    arr.sort((a,b) => b-a);
    for (let i = 0; i < arr.length; i++) {
        while(num>=arr[i]){
            new_arr.push(arr[i]);
            num -=arr[i];
        }
    }
    return new_arr;
}

console.log(banknotes(57,[25,10,5,1]));

function specificChar(str , char){
      str = str.toLowerCase();
      let sum = 0;
      for (let i = 0; i < str.length; i++){
        if(str[i] == char.toLowerCase()){
            sum++;
        }
      }
      return sum;
}

console.log(specificChar("Coding Academy by Orange" , "o"));


for (let i = 0; i <= 20; i++) {
     console.log(i);
}

for (let i = 3; i <= 29; i++) {
     if(i%2 !== 0){ console.log(i);}
}

for (let i = 12; i >= -14; i-=2) {
      console.log(i);
}


for (let i = 50; i >= 20; i--) {
      if(i%3 === 0){
        console.log(i);
      }
}

let academy_str = 'CodingAcademy';
let academy_arr = [7,500,'KH404','black',36];

for(let i=0;i<academy_arr.length;i++){
    console.log(`${academy_arr[i]}\n`);
}

for(let i=academy_str.length-1;i>=0;i--){
    console.log(`${academy_str[i]}\n`);
}

let arr3 =  [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];

let even_arr = [];
let odd_arr = [];

for (let i = 0; i < arr3.length; i++) {
   arr3[i]%2 === 0 ? even_arr.push(arr3[i]) : odd_arr.push(arr3[i])
   if(arr3[i] === arr3[arr3.length-1]){
        console.log(`even array : ${even_arr.sort((a,b)=> a-b)} \nodd array : ${odd_arr.sort()}`)
   }
}



function meals(numsMeal) {
    let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
    let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
    let vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
    let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
    let dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

    let result = [];
    let count = 0;

    while (count < numsMeal) {
        let singleMeal = [
            protein[count % protein.length],
            grain[(count + 1) % grain.length],
            vegetable[(count + 2) % vegetable.length],
            beverage[(count + 3) % beverage.length],
            dessert[(count + 4) % dessert.length]
        ];

        result.push(singleMeal); 
        count++;
    }

    return result;
}

console.log(meals(9));


function keyArrays(obj){
    obj = Object.keys(obj);
    return obj; 
}

console.log(keyArrays({name : 'saleh' , age : 22}))

function keyArrayNums(obj){
    obj = Object.keys(obj);
    return obj.length; 
}

console.log(keyArrayNums({name : 'saleh' , age : 22}));


function assignObj(obj1 , obj2){
    let fullObj =  Object.assign({} , obj1 , obj2);
      return fullObj;
}

console.log(assignObj({name : 'saleh' , age : 22} , {hoppy : 'football' , position : "front"}));


function forObj(obj){
    let obj2 = Object.assign({},obj);

    for(let value in obj2){
       obj2[value] = obj2[value].toUpperCase();
    }
    return obj2;
}

console.log(forObj({name : 'saleh' , age : 'moh'}));


function nonNull(obj){
    let obj2 = Object.assign({},obj);
    let result = {};
    for(let value in obj2){
        if(obj2[value] !== null){
           result[value] = obj2[value] ;
        }
    }
    return result;
    
}

console.log(nonNull({name : 'saleh' , age : 'moh' , hoppy : null}));


function sortObj(obj){
    let arrayObj = Object.keys(obj);
    let sortArray = arrayObj.sort();
    return sortArray;
   
    
}

console.log(sortObj({name : 'saleh' , age : 'moh' , hoppy : 'base'}));
