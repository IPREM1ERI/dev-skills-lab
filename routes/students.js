import { Router } from 'express'
import { students } from '../data/student-data.js'

const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

router.get('/', function(req, res) {
  res.render('students/index', {
    students: students
  })
})

export {
  router
}
