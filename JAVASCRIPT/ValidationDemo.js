// extract  each node using id
const fnameNode=document.getElementById("fname");
const lnameNode=document.getElementById("lname");
const mobileNode=document.getElementById("mobile");
const ageNode=document.getElementById("age");
const emailNode=document.getElementById("email");
const passNode=document.getElementById("pass");
const cpassNode=document.getElementById("cpass");

const errorNode1=document.getElementById("error1")

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
function validate1(){
    errorNode1.textContent=""
    fname=fnameNode.value;
    if(fname=="")
        errorNode1.textContent=requireMessage
}