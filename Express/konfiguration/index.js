require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    let status = process.env.PORT == 5000? "Production" : "Development"
    res.send(`Hello, anda sedang di halaman: ${status} page.`)
})

app.listen(process.env.PORT, function() {
    console.log(`anda sedang berjalan menggunakan port: ${port}`)
})