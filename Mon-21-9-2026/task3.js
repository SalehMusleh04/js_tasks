let age1 = 27;

if(age1>18){
    console.log("You are an  adult");
}

let num = 4;
if(num%2 === 0){
    console.log("This is even");
}

let char = "a";
let lower = char.toLowerCase();
if(char.length === 1 && lower >= 'a' && lower <= 'z'){
    console.log("Its a letter");
}

let arr = [1, 2, 3];
if(Array.isArray(arr)){
    console.log("Its Array");
    
}

let x = 5;
if(x>0){
    console.log("x its a positive Number");
}

let z = 9;
if(z%3 === 0 ){
    console.log("z is a multiple of 3");
}

password = "mypassword123";
if(password.length >= 8){
    console.log("Your password is strong");
}

age2 = 30;
if(age2 >= 18 && age2 <= 65){
    console.log("You are of working age");
}

color = "red"
if(color === 'red' || color === 'green' || color === 'blue'){
    console.log("color is a primary color");
}

function isValidNumber(num){
  if(isNaN(num)){
    console.log(num + " is not a valid number");
  } else {
    console.log(num + " is a valid number");
  }
}

isValidNumber(11) 
isValidNumber("19")  
isValidNumber("xyz")  
isValidNumber("17.5") 
isValidNumber("21F") 