//1)

let cash = 1000;
let current_liabilities = 500;
console.log(cash / current_liabilities);
///////////////////////////
let revenues =1000;
let expenses =500;
console.log(revenues - expenses);
//////////////////////////
let liabilities=1000;
let equity =500;
console.log(liabilities + equity);
//////////////////////////
let prot = 1000;
let sales =500;
console.log(prot * sales);
///////////////////////////
let numbers = 7;
let numbers1= 9;
let numbers2= 2;
console.log((numbers + numbers1 + numbers2)/3);
////////////////////////////
let price =150;
let discount =.30;
console.log( 150 - (150 * 30 / 100));
///////////////////////////
let i=20;
if(i>18 && i<30){
    console.log(Boolean(i));
}
//////////////////////////
let number1=2;
let number2=3;
z=number1 ** number2;
console.log(z);
//////////////////////////
let n1=10;
let n2=4;
console.log(n1%n2);

//2)

let a=100;
console.log(typeof(a));

let b= 73.9;
console.log(typeof(b));

let c= NaN;
console.log(typeof(c));

let d= "Water" ;
console.log(typeof(d));

let e= false;
console.log(typeof(e));

let f= 9 != 11;
console.log(typeof(f));

let g= "Orange"+"s" ;
console.log(typeof(g));

let h="Orange"-"s" ;
console.log(typeof(h));

let j="4"+"8" ;
console.log(typeof(j));

let k= "4"-"8";
console.log(typeof(k));

let l="name" +3 ;
console.log(typeof(l));

let m= "name"-3;
console.log(typeof(m));

let n= 82 * "word";
console.log(typeof(n));

let o=1 + "hello" ;
console.log(typeof(o));

let p= "hello" + 1;
console.log(typeof(p));

let q= 1 + "true";
console.log(typeof(q));

let r= "helo" + true;
console.log(typeof(r));

let s= Infinity;
console.log(typeof(s));

let t= 1 == '1';
console.log(typeof(t));

let u= 1 === '1' ;
console.log(typeof(u));

//strings

let me="Welcome to Orange";
console.log(me.toUpperCase());

let part=me.substring( 8, 10);
console.log(part.toUpperCase());

let newme =me.replace("Welcome to","Hello from");
console.log(newme);

console.log(me.toLowerCase());

console.log(me.length);

let qq="Welcome to ''Orange''";
console.log(qq);

console.log(me + " Jordan");

let me1="cactus";
console.log(me1.replace(/ct+/g ,"*"));