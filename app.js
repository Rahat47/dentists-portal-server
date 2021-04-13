import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import appointmentRoutes from './routes/appointmentRoute.js'



const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.use("/appointments", appointmentRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to our app....")
})


export default app