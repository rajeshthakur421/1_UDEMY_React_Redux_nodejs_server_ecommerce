const mongoose = require("mongoose");

// Define the schema for the student model
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  // You can add more fields as per your requirements
});

// Create and export the student model
module.exports = mongoose.model("Student", studentSchema);
