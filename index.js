let express = require('express')
let bodyParser = require('body-parser')

let app = express()
let port = process.env.PORT || 3001 

let todoRoutes = require('./routes/todos')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.send("Hello from root ")
})

// set the root url to avoid repeating writing it
app.use('/api/todos', todoRoutes)

app.listen( port, () => {
    console.log("App is running on Port " + port)
})