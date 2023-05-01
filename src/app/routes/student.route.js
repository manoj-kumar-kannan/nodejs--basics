const router = require('express').Router();
const {
  deleteStudent,
  getStudentsCollection,
  getStudent,
  saveStudent,
  updateStudent,
} = require('../controllers/student.controller');

// ***************************************************************
// constants

const studentRouter = router;

// ***************************************************************
// student routes

studentRouter.get('/', getStudentsCollection);

studentRouter.get('/:id', getStudent);

studentRouter.post('/', saveStudent);

studentRouter.patch('/:id', updateStudent);

studentRouter.delete('/:id', deleteStudent);

module.exports = studentRouter;
