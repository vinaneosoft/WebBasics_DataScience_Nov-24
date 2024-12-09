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

formNode.on("submit", ()=>validateAll())

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
    errorNode1.text("");
    fname=fnameNode.val();
    fnameNode.css("border",invalidBorder);
    //console.log(namePattern.test(fname));
    if(fname==""){
        errorNode1.text("requireMessage");
        return false;
    }
    else if(namePattern.test(fname)==false){
        errorNode1.text("first name must contain only alphabet")
        return false;
    }
    else {
        fnameNode.css({border:validBorder})
        return true;
    }

}
function validate2(){
    errorNode2.text("");
    lnameNode.css("border",invalidBorder);
    lname=lnameNode.val();
    if(lname==""){
        errorNode2.text(requireMessage)
        return false;
    }
    else if(namePattern.test(lname)==false){
        errorNode2.text("last name must contain only alphabet")
        return false;
    }
    else{
        lnameNode.css("border",validBorder)
        return true;
    }
}

function validate3(){
    errorNode3.text("")
    mobileNode.css("border",invalidBorder);
    mobile=mobileNode.val();
    if(mobile==""){
        errorNode3.text(requireMessage)
        return false;
    }
    else if(mobilePattern.test(mobile)==false){
        errorNode3.text("Please enter valid mobile number")
        return false;
    }
    else{
        mobileNode.css("border",validBorder)
        return true;
    }
}

function validate4(){
    errorNode4.text("")
    ageNode.css("border",invalidBorder);
    age=ageNode.val();
    if(age==""){
        errorNode4.text(requireMessage)
        return false;
    }
    else if(age<0){
         errorNode4.text("Please enter valid age")
         return false;
    }
    else if( age <18  ||  age>45){
          errorNode4.text("only age range 18 to 45 is allowed to enroll")
          return false;
    }
    else{
        ageNode.css("border",validBorder)
        return true
    }
}

function validate5(){
    errorNode5.text("")
    emailNode.css("border",invalidBorder);
    email=emailNode.val();
    if(email==""){
        errorNode5.text(requireMessage)
        return false;
    }
    else if (emailPattern.test(email)==false){
         errorNode5.text("Please enter valid email")
         return false;
    }
    else{
        emailNode.css("border",validBorder)
        return true;
    }
}

function validate6(){
    errorNode6.text("")
    passNode.css("border",invalidBorder);
    pass=passNode.val();
    //console.log(pass);
    if(pass==""){
        errorNode6.text(requireMessage)
        return false;
       }
    else if(passwordPattern.test(pass)==false){
         errorNode6.text("password must contain atleast one small alphabet, capital alphabet, digit, special symbol(!#@%&?). password must be 5 to 12 characters long");
         return false;
    }
    else{
        passNode.css("border",validBorder)
        return true;
    }
}

function validate7(){
    errorNode7.text("")
    cpassNode.css("border",invalidBorder);
    cpass=cpassNode.val();
    if(cpass==""){
        errorNode7.text(requireMessage)
        return false;
    }
    else if(cpass.valueOf()!=pass.valueOf()){
        errorNode7.text("Please match the password")
        return false;
    }
    else{
        cpassNode.css("border",validBorder)
        return true;
    }
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
