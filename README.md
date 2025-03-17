# ShoppyGlobe Backend

## Overview

ShoppyGlobe is an e-commerce backend built using **Node.js, Express, and MongoDB**. This project provides RESTful APIs for managing products, carts, and user authentication using **JWT-based authentication**.

## Features

- **Product Management**: Fetch, add, update, and delete products.
- **Cart Functionality**: Add, update, and remove items from the cart.
- **User Authentication**: Register and login users with JWT authentication.
- **Database Integration**: Uses MongoDB for data storage.
- **Error Handling & Validation**: Ensures data integrity and proper error responses.
- **Testing**: Tested with ThunderClient.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT (JSON Web Token) Authentication**
- **Dotenv for Environment Variables**
- **ThunderClient for API Testing**

## Installation & Setup

1. **Clone the repository**

   ````sh
   git clone https://github.com/Sahil-Bhowmick/ShoppyGlobe-Backend
   cd ShoppyGlobe-backend   ```

   ````

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/shoppyglobe
   JWT_SECRET= jwt_secret_key
   ```

4. **Start the server**
   ```sh
   npm start
   ```
   or with nodemon (for development):
   ```sh
   npm run dev
   ```

## API Endpoints

### 1. Product Routes

- **GET api/products** → Fetch all products
- **GET api/products/:id** → Fetch a single product by ID

### 2. Cart Routes (Protected)

- **POST api/cart** → Add a product to the cart
- **PUT api/cart/:id** → Update the quantity of a product in the cart
- **DELETE api/cart/:id** → Remove a product from the cart

### 3. Authentication Routes

- **POST api/register** → Register a new user
- **POST api/login** → Authenticate user and return JWT token

## Testing with ThunderClient

- Import the provided ThunderClient collection to test all endpoints.
- Verify API responses and MongoDB updates after each request.
