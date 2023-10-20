const mongoose = require("mongoose")
require("dotenv").config()

const connection = async() => {
    try {
        await  mongoose.connect(process.env.mongoDBURL)
         console.log("mongoDB Atlas is connected")
    } catch (error) {
        console.log("error")
    }
}

module.exports = {
    connection
}