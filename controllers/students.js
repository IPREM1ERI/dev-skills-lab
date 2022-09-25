//import { students } from '../data/student-data.js'
import { Student } from '../models/student.js'

function index(req, res) {
  Student.find({})
  .then(students => {
    res.render('students/index', {
      students: students
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newStudent(req, res) {
  res.render('students/new')
}

function create(req,res) {
  Student.create(req.body)
  .then(student => {
    res.redirect('/students')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  Student.findById(req.params.id)
  .then(student => {
    res.render('students/show', {
      student: student
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}
function edit(req, res) {
  Student.findById(req.params.id)
  .then(student => {
    res.render('students/edit', {
      student: student
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

function update(req, res) {
  req.body.passed = !!req.body.passed
  Student.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(student => {
    res.redirect(`/students/${student._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

function deleteStudent(req, res) {
  Student.findByIdAndDelete(req.params.id)
  .then(student => {
    res.redirect('/students')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

export {
  index,
  newStudent as new,
  create,
  show,
  edit,
  update,
  deleteStudent as delete
}