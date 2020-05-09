function add(num1,num2)
{
    num2 = num2 || 0;           //If the second number is given as parameter, it will become 0.
    // if(num2 == undefined)    //It also works the same.But the keyword "undefined" is faulty.
    // {
    //     num2 = 0;
    // }
    return num1+num2;
}
console.log(add(75));

function addUp(n1,n2=13) //13 is the backup/default value. It is an ES6 feature.
{
    return n1+n2;
}
console.log(addUp(10));