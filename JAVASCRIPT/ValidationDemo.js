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

fnameNode.addEventListener('keyup', ()=>validate1())
lnameNode.addEventListener('keyup', ()=>validate2())
mobileNode.addEventListener('keyup', ()=>validate3())
ageNode.addEventListener('keyup', ()=>validate4())
emailNode.addEventListener('keyup', ()=>validate5())
passNode.addEventListener('keyup', ()=>validate6())
cpassNode.addEventListener('keyup', ()=>validate7())

// extract value of attribute "value"
let fname="";
let lname="";
let mobile="";
let age="";
let email="";
let pass="";
let cpass="";
//set the commmon messages
const requireMessage="This field is required";

//set patterns
const namePattern=new RegExp("^[A-Za-z ]*$");
const mobilePattern=new RegExp("^[0-9]{10}$")
const passwordPattern=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{5,12}$")
const emailPattern=new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
function validate1(){
    errorNode1.textContent=""
    fname=fnameNode.value;
    //console.log(namePattern.test(fname));
    if(fname=="")
        errorNode1.textContent=requireMessage
    else if(namePattern.test(fname)==false)
        errorNode1.textContent="first name must contain only alphabet"
}
function validate2(){
    errorNode2.textContent=""
    lname=lnameNode.value;
    if(lname=="")
        errorNode2.textContent=requireMessage
    else if(namePattern.test(lname)==false)
        errorNode2.textContent="last name must contain only alphabet"
}

function validate3(){
    errorNode3.textContent=""
    mobile=mobileNode.value;
    if(mobile=="")
        errorNode3.textContent=requireMessage
     else if(mobilePattern.test(mobile)==false)
        errorNode3.textContent="Please enter valid mobile number"
}

function validate4(){
    errorNode4.textContent=""
    age=ageNode.value;
    if(age=="")
        errorNode4.textContent=requireMessage
    else if(age<0)
        errorNode4.textContent="Please enter valid age"
    else if( age <18  ||  age>45)
        errorNode4.textContent="only age range 18 to 45 is allowed to enroll"
}

function validate5(){
    errorNode5.textContent=""
    email=emailNode.value;
    if(email=="")
        errorNode5.textContent=requireMessage
    else if (emailPattern.test(email)==false)
        errorNode5.textContent="Please enter valid email"
}

function validate6(){
    errorNode6.textContent=""
    pass=passNode.value;
    //console.log(pass);
    if(pass=="")
        errorNode6.textContent=requireMessage
    else if(passwordPattern.test(pass)==false)
        errorNode6.textContent="password must contain atleast one small alphabet, capital alphabet, digit, special symbol(!#@%&?). password must be 5 to 12 characters long"
}

function validate7(){
    errorNode7.textContent=""
    cpass=cpassNode.value;
    if(cpass=="")
        errorNode7.textContent=requireMessage
    else if(cpass.valueOf()!=pass.valueOf())
        errorNode7.textContent="Please match the password"
}
