const bro = "bla bla";
// bro = "la la land";          //Cant be changed since constant.
console.log(bro);


for(let i = 1;i<5;i++)
{
    console.log("using let");
}
// console.log(i); //i cannot be accessed from outside of this for loop. So, Throws an error.

const obj =41;                      //changes can be made in object.
obj.age = 13;
console.log(obj);

//constant value cannot be changed.
// const lora = 45;
// lora = 34;
// console.log(lora);