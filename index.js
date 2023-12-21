const connectToMongo=require("./db");
const express = require('express');
var cors = require('cors')
const { application } = require("express");
const dotenv=require("dotenv");
dotenv.config();

connectToMongo();

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors(
  {
    origin:"https://taskifyclient.netlify.app/"
  }
))


app.use(express.json());

app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))

app.listen(PORT, () => {
  console.log(`backend listening on port ${PORT}`)
})