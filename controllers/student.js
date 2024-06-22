const Student = require("../models/student");

// Example of creating a new student
exports.createStudent = async (req, res) => {
  try {
    const { name, age, gender } = req.body;
    const student = new Student({ name, age, gender });
    await student.save();
    res.status(201).json({ message: "Student created successfully", student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to get a student by ID
exports.getStudentById = async (req, res) => {
  const { studentId } = req.params;
  try {
    const student = await Student.findById(studentId);
    if (student) {
      res.status(200).json({ student });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    // If an error occurs during database operation, return 500 Internal Server Error
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a student by ID
exports.updateStudent = async (req, res) => {
  const { studentId } = req.params;
  const updateFields = req.body; // Fields to update

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      updateFields,
      { new: true },
    );
    if (updatedStudent) {
      res.status(200).json({
        message: "Student updated successfully",
        student: updatedStudent,
      });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a student by ID
exports.deleteStudent = async (req, res) => {
  const { studentId } = req.params;
  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    if (deletedStudent) {
      res.status(200).json({ message: "Student deleted successfully" });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
