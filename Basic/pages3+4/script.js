//Arrays 1)
let myarray=["Coding", "Academy", "By", "Orange"];
let myarray2 =myarray.push("Jordan");
console.log(myarray);

let myarray3=myarray.pop();
let myarray4=myarray.pop();
let myarray5=myarray.pop();
console.log(myarray);

let myarray6=["Coding", "Academy", "By", "Orange"];
let myarray7=myarray6.unshift("Welcome","to");
console.log(myarray6);

let myarray8=myarray6.shift();
let myarray9=myarray6.shift();
let myarray10=myarray6.shift();
console.log(myarray6);

let myarray11="'Coding Academy By Orange'";
console.log(myarray11.toString());

let myarray12=["Coding", "Academy", "By", "Orange"];
console.log(myarray12);

let myarray0=["Coding", "Academy", "By", "Orange"];
let myarray13=myarray0.pop();
let myarray14=myarray0.pop();
let myarray15=myarray0.pop();
let myarray16=myarray0.push("Orange");
console.log(myarray0);

//Arrays 2)

let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

let a=vegetables.pop();
console.log(vegetables);

let b=fruit.shift();
console.log(fruit);

let c=fruit.indexOf("orange");
console.log(c);

let d=fruit.push("1");
console.log(fruit);

let e=vegetables.length;
console.log(e);

let f=vegetables.push("3");
console.log(vegetables);

let food=fruit.concat(vegetables);
console.log(food);

food.splice(4,2);
console.log(food);


let i=food.reverse();
console.log(food);

let o=food.toString();
console.log(o);

//conditions
//1)
let condidate=17;
if(condidate>60)
    console.log("You may join the seniors’ program");
else if(condidate>30){
    console.log("You are not eligible. You may join other programs");
}
else if(condidate>18 && condidate<30){
    console.log("You are eligible. Start your application");
}
else if(condidate<18){
    console.log("You may join the kids' program");
}


//2)



//3)
let p="Coding Academy By Orange";
console.log(p.replace(/ +/g ,""));
//4)
let arr="By" ["Coding", "Academy", "By", "Orange"];
