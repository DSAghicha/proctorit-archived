import { config } from 'dotenv'
config({path: './config.env'})

import express from 'express'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'

connectDB()

const app = express()
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 2022

const server = app.listen(PORT, () => console.log(`Server is running at ${PORT}`))

process.on('unhandledRejection', (err) => {
    console.error(`Error Raise:\n${err}`)
    server.close(() => process.exit(1))
})
