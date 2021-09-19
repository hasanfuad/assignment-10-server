const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5000;

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.shttn.mongodb.net/foodBazar?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const productsCollection = client.db("foodBazar").collection("products");
  
  app.post("/addProduct", (req, res) => {
      const newProduct = req.body;
      console.log(newProduct);
  })
  
});

app.get("/", (req, res) => {
  res.send("Hello Fuad Welcome!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
