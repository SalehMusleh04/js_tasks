let obj = { name: "Adam",
    age: 25,
    gender: "male" };  
    
console.log(Object.values(obj).join(" "));

let obj2 = { name: "Adam",
    age: 25,}

obj2.gender = "male";
console.log(obj2);

let obj3 = { name: "Adam",
    age: 25,}
    
console.log(obj3.name);

let arr1 =  [1, 2, 3, 4, 5 , 6] ;

arr1.forEach((item)=>{
   console.log(item);
})

let arr2 =  ["apple", "cherry", "banana"]; 
console.log(arr2.sort());
console.log(arr2.reverse());

let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
console.log(arr3.concat(arr4));

let arr5 = [1, 2, 3, 4, 5, 6];
strat = 2;
end = 4;

arr5.slice(2,4)
console.log(arr5);
arr5.splice(3 , 1 , 20)
console.log(arr5);

console.log(arr5.indexOf(20));

console.log(arr5.join(" "));

console.log(arr5.join(" ").split(" ").length);

console.log(arr5.length);

for(let item of arr5){
    console.log(item);
}

console.log(Array.isArray(arr5));