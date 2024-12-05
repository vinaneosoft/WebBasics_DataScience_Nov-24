// extract  each node using id
const fnameNode=document.getElementById("fname");
const lnameNode=document.getElementById("lname");
const mobileNode=document.getElementById("mobile");
const ageNode=document.getElementById("age");
const emailNode=document.getElementById("email");
const passNode=document.getElementById("pass");
const cpassNode=document.getElementById("cpass");

const errorNode1=document.getElementById("error1")
const errorNode2=document.getElementById("error2")
const errorNode3=document.getElementById("error3")
const errorNode4=document.getElementById("error4")
const errorNode5=document.getElementById("error5")
const errorNode6=document.getElementById("error6")
const errorNode7=document.getElementById("error7")

// extract value of attribute "value"
let fname="";
let lname="";
let mobile="";
let age="";
let email="";
let pass="";
let cpass="";

let requireMessage="This field is required";

fnameNode.addEventListener('keyup', ()=>validate1())
lnameNode.addEventListener('keyup', ()=>validate2())
mobileNode.addEventListener('keyup', ()=>validate3())
ageNode.addEventListener('keyup', ()=>validate4())
emailNode.addEventListener('keyup', ()=>validate5())
passNode.addEventListener('keyup', ()=>validate6())
cpassNode.addEventListener('keyup', ()=>validate7())

function validate1(){
    errorNode1.textContent=""
    fname=fnameNode.value;
    if(fname=="")
        errorNode1.textContent=requireMessage
}

function validate2(){
    errorNode2.textContent=""
    lname=lnameNode.value;
    if(lname=="")
        errorNode2.textContent=requireMessage
}

function validate3(){
    errorNode3.textContent=""
    mobile=mobileNode.value;
    if(mobile=="")
        errorNode3.textContent=requireMessage
}

function validate4(){
    errorNode4.textContent=""
    age=ageNode.value;
    if(age=="")
        errorNode4.textContent=requireMessage
}

function validate5(){
    errorNode5.textContent=""
    email=emailNode.value;
    if(email=="")
        errorNode5.textContent=requireMessage
}

function validate6(){
    errorNode6.textContent=""
    pass=passNode.value;
    if(pass=="")
        errorNode6.textContent=requireMessage
}

function validate7(){
    errorNode7.textContent=""
    cpass=cpassNode.value;
    if(cpass=="")
        errorNode7.textContent=requireMessage
}
