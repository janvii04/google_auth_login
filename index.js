
require('dotenv').config()

const express = require('express')
const app = express()
const session = require('express-session')
const PORT = 3000

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}))

app.set('view engine', 'ejs')

const userRoute = require('./routers/userRoute')
app.use('/', userRoute)

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})
