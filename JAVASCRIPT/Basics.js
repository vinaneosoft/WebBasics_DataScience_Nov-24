/* 
dynamically typed lang
variable declaration
dynamic datatypes
 */
var companyName;
companyName="Neosoft"; // string
console.log(companyName);
companyName=89900; //number
console.log(companyName);
companyName=89900.6788; // number
console.log(companyName);
companyName=true; // boolean
console.log(companyName);

let companyBaseLocation="Dadar";
const pie=3.142;

function add(num1, num2){
    var result=num1+num2;
    return result;
}

var r1=add(56,78);
console.log(r1); // browser's console


var r2=add(567,1233);
console.log(r2); 

var age=78;

if(age>=18){
    console.log("You are allowed for voting");
    console.log("You can proceed");
}
else if(age<18 && age>0){
    console.log("You are NOT allowed for voting");
}
else {
    console.log("INVALID AGE");
}

    
for(let i=1;i<=5; i++){
    console.log(i);
}

let j=1;
while(j<=5){
    console.log(j);
    j++;
}

let k=1;
do{
    console.log(k);
    k++;
}while(k<=5)


