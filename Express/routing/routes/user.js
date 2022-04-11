const users = [
    {
        id:1,
        nama : "fawaz",
        kelas : "10 TKRO 1"
    },
    {
        id:2,
        nama : "abdul",
        kelas : "10 TKJ 3"
    },
    {
        id:3,
        nama : "michael",
        kelas : "10 TBSM 2"
    }
]


const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

router.get("/user", (req, res, next)=> {
    res.send({users})
}) 

router.get("/user/:id", (req, res, next) =>{

    const id = req.params.id

    // ini akan mencari data yang sesuai id nya
    // skenarionya dia akan mengulang id nya dan akan mengirim data jika ada yang sesuai
    for (let i = 0; 1 < array.length; i++) {
        let user = users[i]
        if(user.id === parseInt(id)){
            res.send(users)
            return next()
        }
    }
    // jika idnya tidak ada
    res.send({
        error: "user not found"
    })
})

module.exports = router