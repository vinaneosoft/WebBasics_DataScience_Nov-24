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

let s1="Hello";
let s2="Hello";
console.log(s1==s2); // true : same memory location bcz value same

let s3=new String("Welcome");
let s4=new String("Welcome")
console.log(s3==s4); // false : difft memory location though value same
const comp=s3.valueOf()==s4.valueOf();
console.log(comp); // true : values are same

// string are immutable
