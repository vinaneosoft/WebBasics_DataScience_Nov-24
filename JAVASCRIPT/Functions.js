// 3 types of functions
// named functions, annonymous functions, arrow functions

//camel case : convention
function setMessage(){
    document.write("Hi");
}
setMessage();

function setMessage2(message){
    document.write(message);
}
setMessage2("Bye");
setMessage2("Welcome");

function add(a,b){
    return (a+b);
}

let res1=add(34,67);
document.write(res1+"<br>");

let res2=add(89,6);
document.write(res2);

// pass number to a function and return addition of its digits
// example if number is 654 then 6+5+4=15 15 must be returned by function

// pass the number to a function and check whether its even or odd. display the message in function
// itself. do not return anything

const  sqrFun=function(num){
    return num*num;
}
document.write("<h4>Square of 3, 9, 17</h4>")
document.write("<ul>")
document.write("<li>"+sqrFun(3)+"</li>");
document.write("<li>"+sqrFun(9)+"</li>");
document.write("<li>"+sqrFun(17)+"</li>");
document.write("</ul>")
