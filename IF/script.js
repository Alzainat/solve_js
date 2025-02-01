//1)
let age=10;
if(age>18){
    console.log("You are an adult");
}
else{
    console.log("you are kid");
}
//2)
let num =3;
if(num%2==0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}
//3)
let char="a";
const regex = /^[a-zA-Z]$/;
if(regex.test(char)){
    console.log("its a letter");
}
else{
    console.log("its not a letter");
}
//4)
let list = [1, 2, 3];
if(Array.isArray(list)){
    console.log("its an array");
}
else{
    console.log("its not array");
}
//5)
let x=5;
if(x>0){
    console.log("its posistive number");
}
else{
    console.log("its negative number");
}
//6)
let z=9;
if(z%3==0){
    console.log("z is a multiple of 3")
}
else{
    console.log("z is not multiple of 3")
}
//7)
let password="mypassword123";
if(password.length>8){
    console.log("Your password is strong");
}
//8)
let Age=30;
if(Age>18 && Age<=65){
    console.log("you are in working age");
}
//9)
let color="rr";
if(color==='red' || color==='green' || color==='blue'){
    console.log("color is a primary color");
}
else{
    console.log("color is not primary number");
}
//10)
function isNumber(input) {
    return !isNaN(input);
}
const num1 = 42;
const num2 = 'hello';
console.log(isNumber(num1)); 
console.log(isNumber(num2));