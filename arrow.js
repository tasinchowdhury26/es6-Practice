const add = (x,y) => x+y;

const math = (a,b,c) =>{
    const plus = a+b+c;
    const multi = a*b*c;
    const result = multi - plus;
    return result;
}

const doLittle = () =>{console.log("dolittle");}

const frist = add(45,7);
const patch = math(3,12,7);

console.log(frist);
console.log(patch);
doLittle();