let empNames=["Krupa","hema",'Dhanesh','dhani', 'Amrit','Prit']
// iterate the array and display

empNames.forEach(function(value){
            console.log(value);
        }
);
empNames.forEach(function(value, index){
            console.log(`${value} -> ${index}`);
        }
);
empNames.push("Hariom");
empNames.forEach(function(value, index, ref){
            console.log(`${value} -> ${index} -> ${ref}`);
        }
);
empNames.forEach(value=>console.log(value));
empNames.forEach((value, index)=>console.log(`${value} -> ${index}`));
empNames.forEach((value, index, ref)=>console.log(`${value} -> ${index} -> ${ref}`));
empNames.forEach((value)=>console.log(value));

console.log("-------------------");
// find employee name starting with 'D' /d 
let filterNames=[];
empNames.forEach(value=>{
    if(value.toUpperCase().startsWith("D"))
        filterNames.push(value);
});
console.log(filterNames);

const filtArray=empNames.filter((value)=>value.toUpperCase().startsWith("D"))
console.log(filtArray);

const emp=empNames.find((value)=>value.toUpperCase().startsWith("D"))
console.log(emp);

console.log("-------------------");
// attach prefix "NEO-" to every name from array
let prefixNames=[]
empNames.forEach(value=>{
    prefixNames.push("NEO-"+value);
});
console.log(empNames);
console.log(prefixNames);

let mappedArray=empNames.map((value)=>"NEO-"+value)
console.log(empNames);
console.log(mappedArray);


let salaries=[23,11,4,3,66]
const summ=salaries.reduce((accum, value)=>accum+value);
/*accum : 23, value:11 accum=34
accum : 34, value :4 accum=38*/
console.log(summ);

const summ2=salaries.reduce((accum, value)=>accum+value, 100);
/*accum : 100, value:23 accum=100+23 123
accum : 123, value:11 accum=134
accum : 134, value :4 accum=138*/
console.log(summ2);
