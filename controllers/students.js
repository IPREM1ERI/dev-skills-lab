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

export {
  index,
  newStudent as new,
  create
}