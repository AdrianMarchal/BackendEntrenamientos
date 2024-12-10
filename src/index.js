const express = require("express")
const apicache = require("apicache")
const bodyParse = require("body-parser")
const v1Router = require("./v1/routes/workoutRoutes")
const bodyParser = require("body-parser")


const app = express()
const PORT = process.env.PORT || 3000

// app.get("/" , (req , res) => {
//     res.send("<h1>Servidor basico funcionando a tope</h1>")
// })

app.use(bodyParser.json())
app.use('/api/v1/entrenamientos' , v1Router)
app.listen(PORT , () => {
    console.log(`API i listening on port ${PORT}`)
})

module.exports = {
    apicache
}