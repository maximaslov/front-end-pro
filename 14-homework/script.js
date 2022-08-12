class Group {
    #students = [];

    get students() {
        return this.#students;
    }

    addStudent(student) {
        if (this.#isValidType(student)) {
            this.students.push(student);
        }
    }

    #isValidType(elem) {
            return elem instanceof Student;
        }
    
    getAverageMark() {
        const allMarks = group.students.reduce((acc, elem) => {
            return acc.concat(elem.marks);
        }, []);
        const result = allMarks.reduce((acc, elem) => acc + elem);
        return Number((result / allMarks.length).toFixed(2));
    }
}

class Student extends Group {
    constructor(name, marks) {
        super();
        this.name = name;
        this.marks = marks;
    }
}

const group = new Group();

group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10]));


console.log(group.students.length === 3);

group.addStudent({});

console.log(group.students.length === 3);

console.log(group.getAverageMark());

group.students = [new Student('John', [10, 10, 5, 10])]

console.log(group.students.length === 3);

