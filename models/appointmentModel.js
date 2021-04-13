import mongoose from 'mongoose'
import validator from 'validator'

const appointmentSchema = mongoose.Schema({
  patientName: {
    type: String,
    required: [true, "Patient Name Is Required."]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please Provide a Valid Email"]
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others", "Not set"],
    default: "Not set"
  },
  phone: Number,
  age: Number,
  service: String,
  serviceDate: Date,
  weight: Number,
  bookedAt: {
    type: Date
  }
})


appointmentSchema.pre("save", function (next) {
  this.bookedAt = Date.now()
  next()
})

const Appointment = mongoose.model("Appointment", appointmentSchema)

export default Appointment