class Parent{
    constructor(){
        this.fatherName = 'Bacchan';
    }
}
class Child extends Parent{
    constructor(cName)
    {
        super();
        this.name = cName;
    }
    getFullName()
    {
        return this.name + " " + this.fatherName;
    }
}
const names = new Child('Abishek');
const names2 = new Child('Shweta');
console.log(names.getFullName());
console.log(names2.getFullName());