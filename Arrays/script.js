//1)
let a1= [1, 2, 3, 4, 5];
a1.forEach(element => {
    console.log(element);
});
//2)
let a2= [1, 2, 3, 4, 5];
let a3=a2.map(num => num*num);
console.log(a3);
//3)
let a4= [1, 2, 3, 4, 5];
let evennumbers=a4.filter(number => number % 2==0);
console.log(evennumbers);
//4)
let a5=[1, 2, 3, 4, 5];
let sum=a5.reduce((accumulator,currentvalue) =>{
    return accumulator + currentvalue;
})
console.log(sum);
//5)
let a6=["bpple", "aanana", "fherry"];
let ss=a6.sort();
console.log(ss);
//6)
//A)
let a7=["apple", "banana", "cherry"];
let re=a7.reverse();
console.log(re);
//B)
let a8= [1, 2, 3];
let a9= [4, 5, 6];
let co=a8.concat(a9);
console.log(co);
//C)
let a10=[1, 2, 3, 4, 5, 6];
let b1=a10.slice(0,2).concat(a10.slice(4));
console.log(b1);
//D)
let a11=[1, 2, 3, 4, 5, 6];
let b2=a11.slice(1,2);
console.log(b2);
//E)
let a12=[1, 2, 3, 4, 5, 6];
let b3=a12.indexOf(3);
console.log(b3);
//F)
let a13=[1, 2, 3, 4, 5, 6];
let b4=a13.join();
console.log(b4);
//G)
let a14="1";
let b5=a14.split("");
console.log(b5);

//7)
let a15= [1, 2, 3, 4, 5];
console.log(a15.length);
//8)
let a16= [1, 2, 3, 4, 5];
for (let index in a16) {
    console.log(index, a16[index]);
}
//9)
let a17=[1, 2, 3, 4, 5];
for (const element of a17) {
    console.log(element);
}
//10)
let a18=[1, 2, 3, 4, 5];
let b7=Array.isArray(a18);
console.log(b7);
//11)
let b8=Array.of(["1", "2", "3", "4", "5"]);
console.log(b8);