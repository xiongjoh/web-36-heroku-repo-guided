
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 4000
const path = require('path') // utility for adding functionality to paths

console.log('web 36 rocks')
console.log(__dirname)
console.log(process.env.LADY)
console.log(process.env.CHAR1)
console.log(process.env.CHAR2)
console.log(process.env.PORT)

const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build'))) // teach where the static assets live

// api, routers

// anything in here is our api
app.use('/api/*', (_, res) => {
    res.json({json:'web 36 rocks'})
})

// anything in here is our react-page
app.use('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(port, () => {
    console.log(`listening on port:${port}`)
})