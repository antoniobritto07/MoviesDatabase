require('dotenv').config();
const jwt = require("jsonwebtoken");
const Firebase = require("../utils/firebase");
const AdmModel = require("../models/AdmModel");
const UserModel = require("../models/UserModel");

module.exports = {
    async signIn(request, response) {
        try {
            const { email, password } = request.body;

            let uid_firebase;
            try {
                uid_firebase = await Firebase.login(email, password);
            } catch (error) {
                console.error(error)
                return response
                    .status(403)
                    .json({ notification: "Invalid Credentials" })
            }

            let user;
            if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
                user = await AdmModel.getByFields({ adm_firebase: uid_firebase })
                // user.type = "administrador"
            }
            else {
                user = await UserModel.getByFields({ user_firebase: uid_firebase })
                // user.type = "usuario"
            }
            const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "1h",
            })
        
            return response.status(200).json({ user, accessToken });
        } catch (error) {
            console.error(error)
            response.status(500).json({ notification: "Error while trying to validate credentials" })
        }
    }
}