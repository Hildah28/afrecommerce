# Afrecommerce - African Fashion E-commerce Website

Afrecommerce is an e-commerce website that provides a platform for buying and selling African fashion, including clothing, footwear, and accessories. The website is developed using HTML, CSS, Bootstrap, JavaScript, and MySQL, and the development tools used are VS Code and Git.

This README will guide you through the steps required to install all the dependencies needed to run the website on another machine, as well as how to import tables from an SQL file located in the assets folder.
Prerequisites

Before proceeding with the installation, make sure you have the following installed on your machine:

    Git
    Node.js
    MySQL

Installation

    Clone the Afrecommerce repository from GitHub:

bash

git clone https://github.com/alexkemboi/afrecommerce.git

    Move into the project directory:

bash

cd afrecommerce

    Install the project dependencies:

bash

npm install

    Start the development server:

bash

npm start

The website should now be running on http://localhost:3000.
Importing Tables from an SQL File

The Afrecommerce project comes with an SQL file located in the assets folder that contains the necessary database tables. To import these tables, follow these steps:

    Open MySQL in your terminal:

bash

mysql -u root -p

    Enter your MySQL password when prompted.

    Create a new database:

sql

CREATE DATABASE afrecommerce;

    Switch to the new database:

sql

USE afrecommerce;

    Import the tables from the SQL file:

sql

SOURCE assets/afrecommerce.sql;

The tables should now be imported and ready to use.
Conclusion

You should now have Afrecommerce up and running on your machine, with all the necessary database tables imported. If you encounter any issues during the installation process, please refer to the project's documentation or open an issue on the GitHub repository.
