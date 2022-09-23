import { Router } from 'express'
//import { students } from '../data/student-data.js'
import * as studentsCtrl from '../controllers/students.js'

const router = Router()

/* GET users listing. */
router.get('/', studentsCtrl.index)
router.get('/new', studentsCtrl.new)
router.get('/:id', studentsCtrl.show)
router.get('/:id/edit', studentsCtrl.edit)
router.post('/',studentsCtrl.create)
router.put('/:id', studentsCtrl.update)

export {
  router
}
