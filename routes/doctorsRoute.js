import express from 'express'
import { addADcotor, getAllDoctors } from '../controllers/doctorController.js'


const router = express.Router()

router.route("/")
    .get(getAllDoctors)
    .post(addADcotor)



export default router