// Import necessary modules
const express = require("express");
const router = express.Router();

// Import controller functions
const {
  createStudent,
  getStudentById,
  getAllStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");

// Middleware for authentication
const { requireSignin, isAdmin } = require("../middlewares/authMiddleware");

// Route for creating a new student
router.post("/students", createStudent);

// Route for getting a student by ID
router.get("/students/:studentId", getStudentById);

// Route for updating a student by ID
router.put("/students/:studentId", updateStudent);

// Route for deleting a student by ID
router.delete("/students/:studentId", deleteStudent);

// Route for getting all students
router.get("/students", getAllStudents);

module.exports = router;
