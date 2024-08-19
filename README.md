# E-Commerce Backend

This project is a backend application for managing an e-commerce platform. It provides RESTful API endpoints for handling products, categories, and tags, with full CRUD (Create, Read, Update, Delete) functionality. The project is built using Node.js, Express, and Sequelize, and it connects to a MySQL database.

## Features

- **Products**: Create, read, update, and delete products. Products can be associated with multiple tags and belong to a single category.
- **Categories**: Manage product categories, with the ability to include associated products.
- **Tags**: Assign multiple tags to products for better categorization and filtering.
- **Product Tags**: Associate products with tags through a many-to-many relationship.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Web framework for building the API endpoints.
- **Sequelize**: ORM for interacting with the MySQL database.
- **MySQL**: Relational database for storing product, category, and tag data.