const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "afrecommerce",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database", error);
  } else {
    console.log("Connected to database");
  }
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/products", (req, res) => {
  const { name, description, image, category, quantity, price } = req.body;

  const query = `INSERT INTO products (name,  description, image, category, quantity,price)
                VALUES (?, ?, ?, ?, ?, ?)`;

  connection.query(
    query,
    [name, description, image, category, quantity, price],
    (error, results) => {
      if (error) {
        res.status(500).send("Failed to insert product data");
        console.error("Error inserting product data", error);
      } else {
        res.status(200).send("Product data inserted successfully");
        console.dir("Product data inserted successfully" + results);
      }
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
