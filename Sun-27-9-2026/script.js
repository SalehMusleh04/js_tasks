

// EX3
const students1 = [
  "Liam Anderson",
  "Emma Johnson",
  "Noah Williams",
  "Olivia Brown",
  "Ethan Jones",
  "Ava Garcia",
  "Lucas Miller",
  "Sophia Davis",
  "Mason Rodriguez",
  "Isabella Martinez",
  "James Hernandez",
  "Mia Lopez",
  "Benjamin Gonzalez",
  "Charlotte Wilson",
  "Henry Anderson",
  "Amelia Thomas",
  "Alexander Taylor",
  "Harper Moore",
  "Daniel Jackson",
  "Evelyn Martin",
  "Michael Lee",
  "Abigail Perez",
  "Sebastian Thompson",
  "Emily White",
  "Jack Harris",
  "Ella Sanchez",
  "Aiden Clark",
  "Scarlett Ramirez"
];

const students2 = [
  "Matthew Lewis",
  "Grace Robinson",
  "Samuel Walker",
  "Chloe Young",
  "David Allen",
  "Victoria King",
  "Joseph Wright",
  "Riley Scott",
  "Carter Torres",
  "Lily Nguyen",
  "Owen Hill",
  "Aria Flores",
  "Wyatt Green",
  "Nora Adams",
  "John Nelson",
  "Camila Baker",
  "Leo Hall",
  "Hannah Rivera",
  "Julian Campbell",
  "Zoe Mitchell",
  "Gabriel Carter",
  "Layla Roberts",
  "Isaac Phillips",
  "Sofia Evans",
  "Anthony Turner",
  "Ellie Diaz",
  "Dylan Parker"
];


const allStudent = students1.concat(students2);
console.log(allStudent);
console.log(allStudent.sort());
console.log(allStudent.reverse());
console.log(allStudent.includes("Saleh Musleh"));
allStudent.forEach((student , index)=>{
  console.log(`Student : ${student} and the index : ${index}`)
});


