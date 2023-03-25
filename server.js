const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

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
app.use(cors());

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
      } else {
        res.status(200).send("Product data inserted successfully");
      }
    }
  );
});

//route to select products from the database
app.get("/getProducts", (req, res) => {
  const selectQuerry = "select * from products";
  connection.query(selectQuerry, (error, results) => {
    if (error) {
      res.status(500).send("Failed to get product data");
    } else {
      res.status(200).send({ products: results });
    }
  });
});

//route to select products from the database by category
app.get("/getProductsType", (req, res) => {
  const category = req.query.category;
  const selectQuerry = `select * from products where category='${category}'`;
  connection.query(selectQuerry, (error, results) => {
    if (error) {
      res.status(500).send("Failed to get product per category");
    } else {
      res.status(200).send({ products: results });
    }
  });
});

//route to search for products
//route to select products from the database by category
app.get("/searchProduct", (req, res) => {
  const productName = req.query.productName;
  const selectQuerry = `select * from products where name like '%${productName}%'`;
  connection.query(selectQuerry, (error, results) => {
    if (error) {
      res.status(500).send("Failed to search product");
    } else {
      res.status(200).send({ products: results });
    }
  });
});
//add user route
app.post("/addUser", (req, res) => {
  try {
    const {
      nameInput,
      usernameInput,
      passwordInput,
      accountTypeSelect,
      emailInput,
    } = req.body;
    console.log(nameInput);
    const addUserQuery = `INSERT INTO users (name, username, password,accountType,email) VALUES (?, ?, ?, ?,?)`;
    connection.query(
      addUserQuery,
      [nameInput, usernameInput, passwordInput, accountTypeSelect, emailInput],
      (error, results) => {
        if (error) {
          console.log("Failed to add user" + error);
          res.status(500).send("Failed to add user");
        } else {
          res.status(200).send("User added successfully");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

//select user route
app.get("/selectUser", (req, res) => {
  try {
    const selectUserQuery = `SELECT * FROM users`;
    connection.query(selectUserQuery, (error, results) => {
      if (error) {
        console.log("Failed to select user" + error);
        res.status(500).send("Failed to select user");
      } else {
        res.status(200).send({ users: results });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/addOrder", (req, res) => {
  try {
    const {
      clientId,
      productId,
      noItems,
      orderDate,
      orderStatus,
      paymentStatus,
      deliveryStatus,
      totalPrice,
      orderTime,
    } = req.body;
    const addOrderQuery =
      "INSERT INTO orders (clientId, productId, noItems, orderDate, orderStatus, paymentStatus, deliveryStatus,totalPrice,orderTime) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)";
    connection.query(
      addOrderQuery,
      [
        clientId,
        productId,
        noItems,
        orderDate,
        orderStatus,
        paymentStatus,
        deliveryStatus,
        totalPrice,
        orderTime,
      ],
      (error, results) => {
        if (error) {
          console.log("Failed to add order" + error);
        } else {
          console.log("Order added successfully");
        }
      }
    );
  } catch (error) {
    console.log("Failed to add order");
  }
});

app.get("/getOrders", (req, res) => {
  const selectQuerry = "select * from orders";
  connection.query(selectQuerry, (error, results) => {
    if (error) {
      res.status(500).send("Failed to get orders data");
    } else {
      res.status(200).send({ products: results });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
