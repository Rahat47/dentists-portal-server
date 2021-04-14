import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import appointmentRoutes from './routes/appointmentRoute.js'
import doctorsRoutes from './routes/doctorsRoute.js'

const app = express()


app.use(cors())
app.use(express.static("doctors"))
app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.use("/appointments", appointmentRoutes)
app.use("/doctors", doctorsRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to our app....")
})


export default app