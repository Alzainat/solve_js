//1)
let i=1;
while(i<=10){
    console.log(i);
    i++;
}
console.log("one")
//2)
let w=[1,2,3,4,5];
for(let a=0;a<w.length;a++ )
    console.log(w[a]);
console.log("tow")
//3)
let e=[0,1,2,3,4,5,6,7,8,9,10];
for(z=0;z<e.length;z++){
    if(z%2==0)
        console.log(z);
}
console.log("three")
//4)
let s=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
for(d=0;d<=s.length;d++){
sum=sum+d;
}
console.log(sum);
console.log("four")
//5)
let r=[1,2,3,4,5];
let largest=r[0];
for(let p=1;p<r.length;p++){
    if (r[p] > largest) {
        largest = r[p];
    }
}
console.log(largest);
console.log("five");
//6)
let y=[1,2,3,4,5];
let sum1=0;
for(u=0;u<=y.length;u++){
    sum1=sum1+u;
}
avg=sum1/y.length;
console.log(avg);
console.log("sex");
//7)
let h=[5];
let fac=1;
for(g=5;g>0;g--){
    fac=fac*g;
}
console.log(fac);
console.log("seven");
//8)
const maxNumber = 10; 
let aa = 0, bb = 1, nextTerm;
console.log(aa); 
console.log(bb); 
for (let l = 2; l < maxNumber; l++) {
    nextTerm = aa + bb;
    aa = bb;
    bb = nextTerm;
    console.log(nextTerm);
}
console.log("eight")
//9)

//10)
let a3= [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for(let a4=0;a4<a3.length;a4++ ){
    for(let a5=0;a5<a3[a4].length;a5++){
        console.log(a3[a4][a5]);
    }
}
console.log("nine");
//10)
let b1=[1,2,3,4,5];
for(b2=5;b2>0;b2--){
    console.log(b2);
}
console.log("ten");
//11)
let b3=[1,2,3,4,5];
for(let b4=1;b4<b3.length;b4+2 )
    console.log(b4);