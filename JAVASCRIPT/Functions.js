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