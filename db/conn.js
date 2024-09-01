const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.5b7l9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log("Conectado ao DB")
}

main().catch((error) => console.log(error))

module.exports = main