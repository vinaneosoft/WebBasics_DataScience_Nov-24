// extract  each node using id
const fnameNode=$("#fname");
const lnameNode=$("#lname");
const mobileNode=$("#mobile");
const ageNode=$("#age");
const emailNode=$("#email");
const passNode=$("#pass");
const cpassNode=$("#cpass");
const formNode=$("#enrollmentForm");

const errorNode1=$("#error1")
const errorNode2=$("#error2")
const errorNode3=$("#error3")
const errorNode4=$("#error4")
const errorNode5=$("#error5")
const errorNode6=$("#error6")
const errorNode7=$("#error7")

fnameNode.keyup(()=>validate1())
lnameNode.on('keyup', ()=>validate2())
mobileNode.on('keyup', ()=>validate3())
ageNode.on('keyup', ()=>validate4())
emailNode.on('keyup', ()=>validate5())
passNode.on('keyup', ()=>validate6())
cpassNode.on('keyup', ()=>validate7())

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

const invalidBorder="4px solid red";
const validBorder="4px solid green";
function validate1(){
    errorNode1.textContent=""
    fname=fnameNode.value;
    fnameNode.style.border=invalidBorder;
    //console.log(namePattern.test(fname));
    if(fname==""){
        errorNode1.textContent=requireMessage
        return false;
    }
    else if(namePattern.test(fname)==false){
        errorNode1.textContent="first name must contain only alphabet"
        return false;
    }
    else {
        fnameNode.style.border=validBorder;
        return true;
    }

}
function validate2(){
    errorNode2.textContent=""
    lnameNode.style.border=invalidBorder;
    lname=lnameNode.value;
    if(lname==""){
        errorNode2.textContent=requireMessage
        return false;
    }
    else if(namePattern.test(lname)==false){
        errorNode2.textContent="last name must contain only alphabet"
        return false;
    }
    else{
        lnameNode.style.border=validBorder;
        return true;
    }
}

function validate3(){
    errorNode3.textContent=""
    mobileNode.style.border=invalidBorder;
    mobile=mobileNode.value;
    if(mobile==""){
        errorNode3.textContent=requireMessage
        return false;
    }
    else if(mobilePattern.test(mobile)==false){
        errorNode3.textContent="Please enter valid mobile number"
        return false;
    }
    else{
        mobileNode.style.border=validBorder;
        return true;
    }
}

function validate4(){
    errorNode4.textContent=""
    ageNode.style.border=invalidBorder;
    age=ageNode.value;
    if(age==""){
        errorNode4.textContent=requireMessage
        return false;
    }
    else if(age<0){
         errorNode4.textContent="Please enter valid age"
         return false;
    }
    else if( age <18  ||  age>45){
          errorNode4.textContent="only age range 18 to 45 is allowed to enroll"
          return false;
    }
    else{
        ageNode.style.border=validBorder;
        return true
    }
}

function validate5(){
    errorNode5.textContent=""
    emailNode.style.border=invalidBorder;
    email=emailNode.value;
    if(email==""){
        errorNode5.textContent=requireMessage
        return false;
    }
    else if (emailPattern.test(email)==false){
         errorNode5.textContent="Please enter valid email"
         return false;
    }
    else{
        emailNode.style.border=validBorder;
        return true;
    }
}

function validate6(){
    errorNode6.textContent=""
    passNode.style.border=invalidBorder;
    pass=passNode.value;
    //console.log(pass);
    if(pass==""){
        errorNode6.textContent=requireMessage
        return false;
       }
    else if(passwordPattern.test(pass)==false){
         errorNode6.textContent="password must contain atleast one small alphabet, capital alphabet, digit, special symbol(!#@%&?). password must be 5 to 12 characters long";
         return false;
    }
    else{
        passNode.style.border=validBorder;
        return true;
    }
}

function validate7(){
    errorNode7.textContent=""
    cpassNode.style.border=invalidBorder;
    cpass=cpassNode.value;
    if(cpass==""){
        errorNode7.textContent=requireMessage
        return false;
    }
    else if(cpass.valueOf()!=pass.valueOf()){
        errorNode7.textContent="Please match the password"
        return false;
    }
    else{
        cpassNode.style.border=validBorder;
        return true;
    }
}

function collectCourses(){
    // for checkboxes
}
function collectGender(){
    // gender
}
function collectDeparment(){
    //department from drop down
}
function validateAll(){
   // console.log("in function ");
    // if all fields are valid then only return true else return false
    const state1=validate1();
    const state2=validate2();
    const state3=validate3();
    const state4=validate4();
    const state5=validate5();
    const state6=validate6();
    const state7=validate7();
    console.log(fname);
    
    return (state1 && state2 && state3 && state4 && state5 && state6 && state7)
}
