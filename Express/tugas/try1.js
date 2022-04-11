const express = require('express');
const router = express.Router(); //Library route level middleware
const app = express()
const port = 5000;

router.use(function (req, res, next) {
    console.log("Time: ", Date.now());
    next();
})

router.get("/middleware", (req, res) => {
    res.send("ini middleware")
})

app.use(router)

app.get('/', (req, res) => {
    res.send("Hello World")
})


app.get("/product", (req, res) => {
    res.json(
        [
            "Apple",
            "Redmi",
            "One Plus One",
        ] 
    )
})

app.listen(port, () => {
    console.log(`kita berjalan di port ${port}`)
})

module.exports = router
