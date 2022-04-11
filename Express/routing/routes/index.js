const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router();

// route index dengan method GET
router.get("/", (req, res, next) => {
    res.send("Goodbye, Mars!")
})

// route index method post
router.post(
    "/", 
    bodyParser.json(),
    bodyParser.urlencoded({
        extends: true
    }),
    (req, res, next) => {
        res.send(req.body)
    }
)

// route index method delete

router.delete("/:id", (req, res, next) =>{
    res.send(`Data dengan id ${req.params.id} Berhasil di hapus`)
})

router.delete("/", (req, res, next) =>{
    res.send("anda belum memasukkan id")
})



module.exports = router