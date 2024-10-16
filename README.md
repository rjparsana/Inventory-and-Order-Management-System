# Inventory and Order Management System

Develop a backend system for user authentication, inventory management, and order processing.

## Features
### User Authentication:
JSON Web Token (JWT) based authentication.
Role-based access control for Admins and Customers.

### Inventory Management:
Admin can create, update, view, and delete products.
Admin can manage stock levels.

### Order Management:
Customers can place orders and view their order status.
Admins can manage and update order statuses.

### MongoDB for Data Storage:
Collections for Users, Products, and Orders.

## Install Dependencies:
npm install

## Configure Environment Variables: Create a .env file in the root directory and add the following:
MONGO_URI=mongodb+srv://rjparsana8:9Wqw8qzrjPCTAk2x@cluster0.c19od.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=RJ_SECRET
PORT=5000

## Start the Server:
node server.js
The server will start on http://localhost:5000.

## API Documentation
### Authentication

#### Register a User
POST /api/auth/register

#### Login
POST /api/auth/login

#### Create a Product (Admin Only)
POST /api/products

#### Get All Products
GET /api/products

#### Update a Product (Admin Only)
PUT /api/products/:id

#### Delete a Product (Admin Only)
DELETE /api/products/:id

### Orders
#### Place an Order (Customer Only)
POST /api/orders

#### Get Customer Orders (Customer Only)
GET /api/orders

#### Update Order Status (Admin Only)
PUT /api/orders/:id
