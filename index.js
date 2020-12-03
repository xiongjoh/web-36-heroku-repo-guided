
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 4000

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

// api, routers

// catch all
app.use('/api/*', (_, res) => {
    res.json({json:'web 36 rocks'})
})

app.listen(port, () => {
    console.log(`listening on port:${port}`)
})