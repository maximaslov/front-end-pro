import StudentsMarksApi from './StudentsMarksApi';
import $ from 'jquery';
import './style.css';


const DELETE_BTN_CLASS = 'students__del-btn';
const MARK_CLASS = 'students__mark';

const $table = $('.students');
const $saveBtn = $('.add-student-btn');
const $input = $('.new-student');

let marksList = [];

getMarksList()
    .then((list) => {
        marksList = list;
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
                marksList = marksList.filter(el => el.id !== `${id}`);
            }
        })
}

function editMarks() {
    const $elem = $(this);
    const $student = $elem.parent();
    const id = $student.parent().data('id');
    const index = $elem.data('id');
    const list = marksList.find(e => e.id == id);
    const marks = list.marks;
    const changedMark = Number($elem.val());

    marks.splice(index, 1, changedMark);
    
    updateMark(id, marks);
}

function onSaveBtnClick() {
    const newStudent = student();
    if (isValidStudentName(newStudent)) {
       addStudent(newStudent)
        .then(newStudent => {
            marksList.push(newStudent);
            renderMarksItem(newStudent);
            clearInput();
        }); 
    } else {
        alert('The input field must contain words and not be a number')
    }
}

function getMarksList() {
    return StudentsMarksApi.request();
}

function removeStudent(id) {
    return StudentsMarksApi.deleteStudent(id);
}

function updateMark(id, marks) {
    StudentsMarksApi.updateMark(id, marks);
}

function addStudent(student) {
    return StudentsMarksApi.postNewStudent(student);
}

function renderMarksList(list) {
    const html = list.map(generateMarksHtml);

    $table.append(html);
}

function renderMarksItem(student) {
    const studentTemplateHTML = generateMarksHtml(student);
    $table.append(studentTemplateHTML);
}

function generateMarksHtml(student) { {
    const name = student.name;
    const marks = student.marks;
    return `
          <tr data-id="${student.id}" class="style.students__student">
                <td class="students__name">${name}</td>
                <td class="students__marks">
                    <input data-id="0" class="students__mark" value="${marks[0]}" type="text">
                    <input data-id="1" class="students__mark" value="${marks[1]}" type="text">
                    <input data-id="2" class="students__mark" value="${marks[2]}" type="text">
                    <input data-id="3" class="students__mark" value="${marks[3]}" type="text">
                    <input data-id="4" class="students__mark" value="${marks[4]}" type="text">
                    <input data-id="5" class="students__mark" value="${marks[5]}" type="text">
                    <input data-id="6" class="students__mark" value="${marks[6]}" type="text">
                    <input data-id="7" class="students__mark" value="${marks[7]}" type="text">
                    <input data-id="8" class="students__mark" value="${marks[8]}" type="text">
                    <input data-id="9" class="students__mark" value="${marks[9]}" type="text">
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