const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require('mongoose')
const { config } = require('dotenv')
const helmet = require('helmet')

// Importing all the routes
const actAsRoute = require("./routes/act-as-prompt")
const loginroute = require("./routes/login")
// const generatePrompt = require("./routes/generate_prompt")
const searchPrompt = require("./routes/search")
const emotionRoute = require("./routes/emotion")
const sentimentRoute = require("./routes/sentiment")
const tokenizer = require("./routes/tokenizer")
const promptRoutes = require('./routes/promptRoutes')

config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

// Creating express server
const app = express()

app.use(express.static("../"))

const path = require("path");
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "index.html"))
})

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

promptRoutes(app)

// app.
// Handling routes request
// app.use("/",loginroute)
app.use("/", actAsRoute)
app.use("/", loginroute)
// app.use("/", generatePrompt)
app.use("/", searchPrompt)
app.use("/", emotionRoute)
app.use("/", sentimentRoute)
app.use("/", tokenizer)
// promptRoutes.default(app)

// app.post("/testPost", function(req, res){
//     console.dir(req.body);
//     res.send("test");
// })

app.listen((3000), () => {
  console.log("Server is Running")
})