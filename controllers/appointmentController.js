import Appointment from "../models/appointmentModel.js";


export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().sort("-bookedAt")
        res.status(200).json({
            status: "Success",
            total_docs: appointments.length,
            data: {
                appointments
            }
        })
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message
        })

    }
}


export const createAppointment = async (req, res) => {
    const appointmentObj = req.body
    try {
        const data = await Appointment.create(appointmentObj)
        res.status(201).json({
            data
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}