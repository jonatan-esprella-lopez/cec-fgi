const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonResponsive");

router.post("/", (req, res) => {
    const {email, password} = req.body;
    if(!email || !password  ){
        return res.status(400).json(jsonResponse(400, {
            error: "No ingreso algun dato"
        }));
    }


//autenticacion
    const accessToken = "access_token";
    const refreshToken = "refresh_token";
    const user = {
        id: 1,
        name: 'Jonatan',
        email: 'XXXXX'
    }

    res.status(200).json(jsonResponse(200, {user, accessToken, refreshToken}));
    res.send("logueado exito");
});

module.exports = router;