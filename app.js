const express = require('express')
const morgan = require('morgan')

const contactRoutes = require("./contactRoutes");

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/contacts', contactRoutes)

app.get('*', (req, res) => {
    res.send(`<h1>Please use the correct routes!</h1>`)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})