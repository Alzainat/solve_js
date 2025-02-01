//1)
let a1={ name: "Adam", age: 25, gender: "male" };
let a2=Object.keys(a1);
console.log(a2);
//2)
let a3={ name: "Adam", age: 25, gender: "male" };
let a4=Object.values(a3);
console.log(a4);
//3)
let a5={ name: "Adam", age: 25, gender: "male" };
let a6=Object.entries(a5);
console.log(a6);
//4)
let a7={ name: "Adam", age: 25};
let a8={gender: "male"};
let a9=Object.assign(a7,a8);
console.log(a9);
//5)
let a10={ name: "Adam", age: 25, gender: "male" };
let a11=Object.freeze(a10);
console.log(a11);
//6)
let a12={ name: "Adam", age: 25, gender: "male" };
let a13=Object.seal(a12);
console.log(a13);