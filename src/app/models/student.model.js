const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ***************************************************************
// student schema

const StudentSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  marks: {
    type: Number,
  },
});

const Student = mongoose.model('student', StudentSchema);
module.exports = Student;
