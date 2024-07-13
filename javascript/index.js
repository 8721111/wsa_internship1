  document.write("hello js");
  var x=10;
  document.write(x);
//   old way to create a variable
// in  modern we use let keyward for making a variable

let y=2;
document.write(y);
let age=10;
console.log(age);
let BhartiRawat=true;
document.write("<br>"+BhartiRawat);

let a="heavy";
let b=45;
document.write("<br>",a - b);
// array

let number=[1,2,3,4,5];
let fruit=["apple","banana","orange"];
document.write("<br>",number[4]);


// while loop
let count=0;
while(count<3){
  console.log(`count is:${count}`);
  count=count+1;
}
// for loop
for(let i=0; i<3;i++){
  document.write(`count is :${i}`);

}

// function
function great (name){
  console.log(`hello ${name}`);
}
great("bahrti");


function sum (a,b){
  return a+b;
 
  console.log("hello");

}
console.log(sum(2,4));