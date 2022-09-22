import mongoose from 'mongoose'

const Schema = mongoose.Schema

const studentSchema = new Schema ({
  student: String,
  passed: Boolean
})