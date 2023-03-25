# Afrecommerce - African Fashion E-commerce Website

Welcome to Afrecommerce, an e-commerce website for buying African fashion including clothing, accessories, and footwear. This website is built using HTML, CSS, Bootstrap, JavaScript, NodeJS, and MySQL. The project is open-source and available on Github.
Setting up the project on your local machine

To set up the project on your local machine, follow these steps:
Fork the repository

Fork the repository to your own Github account by clicking the "Fork" button in the top-right corner of the repository page.
Clone the repository

Clone the repository to your local machine using the following command in your terminal:

bash

git clone https://github.com/YOUR-USERNAME/afrecommerce.git

Make sure to replace YOUR-USERNAME with your Github username.
Install dependencies

Navigate to the project directory in your terminal and run the following command to install the project dependencies:

bash

npm install

Set up the database

The project uses MySQL as the database. Make sure you have MySQL installed on your machine. Create a new database named afrecommerce in MySQL.

Next, create a .env file in the project root directory and add the following configuration:

bash

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=afrecommerce

Make sure to replace the DB_USER and DB_PASSWORD values with your MySQL username and password if you have set one.

Finally, run the following command in your terminal to create the necessary tables in the database:

bash

npm run setup-db

Starting the server

To start the server, run the following command in your terminal:

bash

npm start

The server will start running on http://localhost:3000.
Contributing

We welcome contributions to the project. To contribute, fork the repository, make your changes, and create a pull request.
License

The project is licensed under the MIT License.
