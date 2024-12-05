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
