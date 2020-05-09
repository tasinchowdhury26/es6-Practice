class Student{
    constructor(sName,sId)
    {
        this.id = sId;
        this.name = sName;
        this.school = "MMHS";
        this.kissed = "Yes";
    }
}

const student1 = new Student("Tasin",1234);
const student2 = new Student("Else",4321);
console.log(student1.id,student2.school);