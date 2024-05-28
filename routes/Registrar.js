const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonResponsive");

router.post("/", (req, res) => {
    const {username, name, password} = req.body;
    if(!username || !name || !password  ){
        return res.status(400).json(jsonResponse(400, {
            error: "espacios vacios"
        }));
    }

    res.status(200).json(jsonResponse(200, {message: "Usuario registrado con exito"}));
    res.send("registrado exito");
});

module.exports = router;