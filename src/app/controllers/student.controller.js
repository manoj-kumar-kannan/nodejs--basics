const Student = require('../models/student.model');

// ***************************************************************
// functions

const getStudentsCollection = async (req, res, next) => {
  try {
    const students = await Student.find();
    return res.send(students);
  } catch (error) {
    next(error);
  }
};

const getStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const students = await Student.findById(id);
    return res.send(students);
  } catch (error) {
    next(error);
  }
};

const saveStudent = async (req, res, next) => {
  try {
    const { firstName, lastName, marks } = req.body;
    const student = new Student({ firstName, lastName, marks });
    const savedStudent = await student.save();
    return res.send(savedStudent);
  } catch (error) {
    next(error);
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const student = req.body;
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(id, student);
    return res.send(updatedStudent);
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    return res.send({ message: 'Student deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  deleteStudent,
  getStudentsCollection,
  getStudent,
  saveStudent,
  updateStudent,
};
