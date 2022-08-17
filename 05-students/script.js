const students = [
  {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7]
  },
  {
    id: 11,
    name: 'John Doe',
    marks: [ 9, 8, 7, 6, 7]
  },
  {
    id: 12,
    name: 'Thomas Anderson',
    marks: [6, 7, 10, 8]
  },
  {
    id: 13,
    name: 'Jean-Baptiste Emanuel Zorg',
    marks: [10, 9, 8, 9]
  }
]

console.log(averageStudentMark(10));

console.log(averageGroupMark(students));

function averageStudentMark(id) {
  const student = students.filter(element => element.id === id);
  const res = student[0].marks.reduce((acc, elem) => acc + elem);
  return res / student[0].marks.length;
}

function averageGroupMark(arr) {
  const marks = arr.reduce((acc, student) => {
    return acc.concat(student.marks)
  }, []);
  const res = marks.reduce((acc, elem) => acc + elem);
  return res / marks.length;
}












// let stud1 = averageStudentMark(students[0].marks);
// let stud2 = averageStudentMark(students[1].marks);
// let stud3 = averageStudentMark(students[2].marks);
// let stud4 = averageStudentMark(students[3].marks);


// function averageGroupMark(arr) {
//     let res = (stud1 + stud2 + stud3 + stud4) / arr.length;
//     return res;
// }