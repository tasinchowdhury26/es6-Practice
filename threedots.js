const arr1 = [12,41,22,46,123];
const arr2 = [546,28,78,16.43,14];
const arr3 = [88,452,154,7,4,23,78];

const concat = [...arr1,...arr2,...arr3];
//Concatenating all 3 arrays using 3 dots 
console.log("All the arrays together :",concat);

const maximum = Math.max(...arr3);
console.log("In the 3rd array, the maximum value is : ",maximum);

const boss = Math.max(...arr1,...arr2,...arr3);
console.log("The largest number within these arrays is : ",boss);
