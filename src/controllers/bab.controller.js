const {bab:babModel, userbab:userBabModel, user:userModel, matapelajaran:matpelModel, matapelajaranbab:matpelbabModel} = require("../models")

const index = async (req, res, _next) => {
    let que = req.query

    if (Object.keys(que).length > 0) {
        if ( que.idmatapelajaran != null) {
            return res.status(200).send({
                message: "Query Found",
                data: result
            })
        }
    }

    return res.status(400).send({
        message: "Error, No query given / Query not recognizeable"
    })
}

module.exports = {index}