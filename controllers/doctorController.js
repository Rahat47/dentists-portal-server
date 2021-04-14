import Doctor from "../models/doctorModel.js"
import path from 'path'
const __dirname = path.resolve()
export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find()
        res.status(200).json({
            status: "Success",
            data: {
                doctors
            }
        })
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message
        })
    }
}

export const addADcotor = async (req, res) => {
    const file = req.files.file
    const name = req.body.name
    const email = req.body.email

    file.mv(`${__dirname}/doctors/${file.name}`, err => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Failed to upload image" })
        }
        return res.status(201).json({
            message: `${file.name} successfully saved to server. `,
            filePath: ` ${req.protocol}://${req.get("host")}/${file.name}`
        })

    })


}