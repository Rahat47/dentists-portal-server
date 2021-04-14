import mongoose from 'mongoose'
import validator from 'validator'
const doctorsSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please Provide a valid email address."]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    image: Buffer
})

const Doctor = mongoose.model("Doctors", doctorsSchema)

export default Doctor