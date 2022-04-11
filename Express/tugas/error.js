const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;

app.get("/iniError", (req, res) => {
    iniError;
})

app.use( function (err, req, res, next) {
    console.log(err);
    res.status(500).json({
        status: "fail",
        errors: err.message,
    });
});

app.listen(port, () =>
    console.log(`kita berjalan di ${port}`)
);