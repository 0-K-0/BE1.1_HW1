const mongoose = require("mongoose");
const employeePassCardSchema = new mongoose.Schema({
  EmployeeName: String,
  Department: String,
  EmployeeId: Number,
  EmployeeDateOfBirth: Date,
  EmployeeEmail: String,
  EmployeeTelePhoneNumber: Number,
  EmployeeAddress: String,
});
const employeePassCard = mongoose.model(
  "employeePassCard",
  employeePassCardSchema,
);
module.exports = employeePassCard;
