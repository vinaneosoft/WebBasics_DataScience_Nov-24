let salaries=[67900,5677889,787878,908990,576778];
let names=["hari",'om',"pooja","kirti"];
let array=[123,"hari",567899.4, true, 345, "pooja", 5678989, false]

console.log(salaries.length);
console.log(names.length);
console.log(array.length);
console.log(salaries);
console.log(names);
console.log(array);


let empCodes=new Array(2); // 2 initial size
console.log(empCodes.length);
console.log(empCodes);
empCodes.push(34566); // new element added at last, size grow
console.log(empCodes.length);
console.log(empCodes);
empCodes[0]=4567;  // new element added to existing index
empCodes[1]=23344;
console.log(empCodes);
empCodes[3]=4444;
console.log(empCodes);
empCodes[6]=4444;
console.log(empCodes);
empCodes.pop();
console.log(empCodes);
let codes=new Array(); // 0 initial size
let ages=new Array(4,6);
console.log(ages);

//stack, queue, deque
names=["hari",'om',"pooja","kirti"];
console.log(names[0][1]); //a
console.log(names[1][0]);  //o

names.push("krupa");
names.unshift("Deepa");
console.log(names);
names.pop();
names.shift();
console.log(names);

let joined=names.join("->")
console.log(joined);

// Arrays are mutable
let ref=names.sort(); //Sorts an array in place. This method mutates the array and returns a reference to the same array.
console.log(names);
console.log(ref==names);

ages=[28, 2, 34, 3, 56, 5, 47, 4];
console.log(ages.sort());

ages.sort((n1,n2)=>n1-n2)
console.log(ages);
