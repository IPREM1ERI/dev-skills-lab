import mongoose from 'mongoose'

const Schema = mongoose.Schema

const studentSchema = new Schema ({
  name: String,
  passed: Boolean
})

const Student = mongoose.model('Student', studentSchema)

export {
  Student
}