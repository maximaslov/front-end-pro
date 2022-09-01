'use strict'

const DELETE_BTN_CLASS = 'students__del-btn';
const MARK_CLASS = 'students__mark';

const $table = $('.students');
const $saveBtn = $('.add-student-btn');
const $input = $('.new-student');
const $marks = $('students__marks');

let studentMarksList = [];

getStudentsMarksList()
    .then((list) => {
        studentMarksList = list;
        renderMarksList(list);
    })

function student() {
    return {
        name: $input.val(),
        marks: [0,0,0,0,0,0,0,0,0,0],
    }   
}

$table
    .on('click', '.' + DELETE_BTN_CLASS, onDeleteButtonClick)
    .on('focusout', '.' + MARK_CLASS, editMarks);
$saveBtn.on('click', onSaveBtnClick);

function onDeleteButtonClick() {
    const $delBtn = $(this);
    const $actionColumn = $delBtn.parent();
    const id = $actionColumn.parent().data('id');

    removeStudent(id)
        .then(res => {
            if (res.ok) {
                $actionColumn.parent().remove();
                studentMarksList = studentMarksList.filter(el => el.id !== `${id}`);
            }
        })
}

function editMarks() {
    const $elem = $(this);
    const id = findId($elem);
    const index = $elem.data('id');
    const list = studentMarksList.find(e => e.id == id);
    const marks = list.marks;
    const changedMark = Number($elem.val());

    marks.splice(index, 1, changedMark);
    
    updateMarks(id, marks);
}

function findId(elem) {
    return elem.closest('.students__student').data('id');
}

function onSaveBtnClick() {
    const newStudent = student();
    if (isValidStudentName(newStudent)) {
       addStudent(newStudent)
        .then(newStudent => {
            studentMarksList.push(newStudent);
            renderMarksItem(newStudent);
            clearInput();
        }); 
    } else {
        alert('The input field must contain words and not be a number')
    }
}

function getStudentsMarksList() {
    return StudentsMarksApi.request();
}

function removeStudent(id) {
    return StudentsMarksApi.deleteStudent(id);
}

function updateMarks(id, marks) {
    StudentsMarksApi.updateMarks(id, marks);
}

function addStudent(student) {
    return StudentsMarksApi.postNewStudent(student);
}

function renderMarksList(list) {
    const html = list.map(generateStudentMarksHtml);

    $table.html(html);
}

function renderMarksItem(student) {
    const studentTemplateHTML = generateStudentMarksHtml(student);
    $table.append(studentTemplateHTML);
}

function generateStudentMarksHtml(student) { {
    const name = student.name;
    const marks = student.marks;
    let inputs = '';

    marks.forEach((mark, index)=> {
        inputs += `<input class="students__mark" data-id="${index}" value="${mark}"/>`
    })
     
    return `
          <tr data-id="${student.id}" class="students__student">
                <td class="students__name">${name}</td>
                <td class="students__marks">
                   <td>${inputs}</td>
                </td>
                <td class="students__action">
                    <button class="students__del-btn">Delete</button>
                </td>
            </tr>
    `;
    }
}

function isValidStudentName(newStudent) {
    return newStudent.name && isNaN(Number(newStudent.name));
}

function clearInput() {
    $input.val('');
}
