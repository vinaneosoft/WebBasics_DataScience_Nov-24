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
const fname=fnameNode.value;
const lname=lnameNode.value;
const mobile=mobileNode.value;
const age=ageNode.value;
const email=emailNode.value;
const pass=passNode.value;
const cpass=cpassNode.value;
const requireMessage="This field is required";
fnameNode.addEventListener('blur', ()=>validate1())

function validate1(){
    if(fname=="")
        errorNode1.textContent=requireMessage
}