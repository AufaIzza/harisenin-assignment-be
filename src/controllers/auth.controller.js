const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const { user: UserModel } = require('../models')

const login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ where: {email}})

    if (!user) {
        return res.status(401).send({message: "Email / Password Invalid"})
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        return res.status(401).send({message: "Email / Password Invalid"})
    }

    const data = {
        id: user.id,
        email: user.email
    }

    const token = jwt.sign(data, process.env.JWT_SECRET)

    return res.send({
        message: "Login successful",
        data: {
            token: token
        }
    })
}

module.exports = { login }
