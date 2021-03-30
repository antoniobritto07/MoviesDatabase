require('dotenv').config();
const Firebase = require("../utils/firebase");
const jwt = require("jsonwebtoken");

module.exports = {
    async signIn(request, response) {
        try {
            const { email, password } = request.body;

            let firebaseId;
            try {
                firebaseId = await Firebase.login(email, password);
            } catch (error) {
                console.error(error)
                return response
                    .status(403)
                    .json({ notification: "Invalid Credentials" })
            }

            let user;
            if (email === process.env.ADMIN_EMAIL) {
                user = await AdmModel.getByFields({ adm_firebase: firebaseId })
            }
            else {
                user = await UserModel.getByFields({ user_firebase: firebaseId })
            }

            const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "30d",
            })
            return response.status(200).json({ user, accessToken });
        } catch (error) {
            response.status(500).json({ notification: "Error while trying to validate credentials" })
        }
    }
}