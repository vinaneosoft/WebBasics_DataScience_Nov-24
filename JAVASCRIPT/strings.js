let message="India is my country. I love my India" // string literal
let message2=new String("I love my country") // string object
document.write(message.length);
document.write("<br>")
let character=message.charAt(0);
document.write(character)
document.write("<br>")
let index=message.indexOf("country");
document.write(index)
document.write("<br>")
let index2=message.indexOf("India"); // first index
document.write(index2)
document.write("<br>")
let index3=message.lastIndexOf("India"); // last index
document.write(index3);
document.write("<br>")

// difference between literal and object

let s1="Hello"; // literal
let s2="Hello";
console.log(s1==s2); // true : same memory location bcz value same

let s3=new String("Welcome"); // object
let s4=new String("Welcome")
console.log(s3==s4); // false : difft memory location though value same
const comp=s3.valueOf()==s4.valueOf();
console.log(comp); // true : values are same

// string are immutable
// once we create an object we can not change the characters in it, 
// if we change then changes will be saved in new memory location

let myname="Veda";
let concatination=myname.concat(" Sane");
console.log(myname); // Veda or Veda Sane ? 
console.log(concatination);
let cname="Neosoft";
cname=cname+", Rabale";
console.log(cname); // Neosoft or Neosoft, Rabale??
const empCode=45678;
//empCode="neo-"+empCode; // Assignment to constant variable.
//console.log(empCode);
const eCode=45678;
const newCode="neo-"+eCode; 
console.log(newCode);

// substring from current string

message="India is my country. I love my India country"

console.log( message.substring(0,4));// start index, end index
console.log( message.slice(0,4)); // start index, end index
console.log( message.substring(7));// start index
console.log( message.slice(7)); // start index
console.log( message.substring(-5));// -ve : 0 si
console.log( message.slice(-5)); // -ve couting from end of the string
console.log( message.substring(-5, 5));// -ve : 0 si, 5 ei
console.log( message.slice(-5,5)); // blank string si must be smaller than ei
console.log( message.slice(-25,30)); 