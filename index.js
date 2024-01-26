const express = require('express')
const app = express()
const apiRoutes = require('./routes')


app.use(express.json());




app.use('/', apiRoutes)

const PORT = 8000
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))