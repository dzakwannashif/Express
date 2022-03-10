const express = require('express');
const app = express();
const port = 5000

app.get('/', (req, res) =>{
    res.send('Halo saya belajar express')
});

app.listen(port, function() {
    console.log(`server berjalan di ${port}`)
});