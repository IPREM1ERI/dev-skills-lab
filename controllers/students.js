import { students } from "../data/student-data.js";

function index(req, res) {
  res.render('students/index', {
    students: students
  })
}

export {
  index
}