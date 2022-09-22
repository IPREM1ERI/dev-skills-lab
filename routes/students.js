import { Router } from 'express'
//import { students } from '../data/student-data.js'
import * as studentsCtrl from '../controllers/students.js'

const router = Router()

/* GET users listing. */
router.get('/', studentsCtrl.index)
router.get('/new', studentsCtrl.new)

export {
  router
}
