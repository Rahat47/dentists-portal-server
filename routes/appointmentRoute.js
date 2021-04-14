import express from 'express'
import { createAppointment, getAppointments, getAppointmentsByDate } from '../controllers/appointmentController.js'

const router = express.Router()

router.route("/")
    .post(createAppointment)
    .get(getAppointments)

router.route("/byDate")
    .post(getAppointmentsByDate)


export default router