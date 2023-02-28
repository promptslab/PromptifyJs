const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require('mongoose')
const { config } = require('dotenv')
const helmet = require('helmet')


config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

// Creating express server
const app = express()

app.use(bodyParser.json()); // app.use(express.json()), alternative solution for bodyParsor, but I need dig dive into the differences
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(helmet())

app.use(cors({
  origin: '*'
}));

// promptRoutes(app)


app.listen((3000), () => {
  console.log("Server is Running")
})