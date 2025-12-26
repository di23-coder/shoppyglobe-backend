🛍️ ShoppyGlobe Backend API

Author: Diya Gupta
GitHub: https://github.com/di23-coder/shoppyGlobe-backend

📌 About the Project

ShoppyGlobe Backend is an E-commerce REST API developed using Node.js, Express.js, and MongoDB Atlas.
This project handles user authentication, product management, and shopping cart operations.

JWT authentication is used to secure cart-related APIs, and passwords are stored securely using bcrypt encryption.

🌐 Database Configuration (MongoDB Atlas)

MongoDB Atlas is used as the cloud database

Network access is set to:

0.0.0.0/0

🔐 What this means:

The database can be accessed from any system

Anyone cloning this repository can test APIs without changing IP settings

⚠️ Note:
Only limited database permissions are provided (read & write). No admin access is exposed.

🚀 Tech Stack Used
Technology	Purpose
Node.js	Backend runtime
Express.js	API routing
MongoDB Atlas	Cloud database
Mongoose	MongoDB ODM
JWT	Authentication
bcrypt	Password encryption
CORS	Cross-origin access
ThunderClient / Postman	API testing
📦 Features Implemented

✔ User Registration and Login
✔ Password hashing using bcrypt
✔ JWT-based authentication
✔ Fetch all products and single product by ID
✔ Product data stored directly in MongoDB Atlas
✔ Add items to cart
✔ Update cart item quantity
✔ Remove item from cart
✔ Fetch logged-in user cart (with product details)
✔ Centralized error handling
✔ Email format validation
✔ MongoDB Atlas open access (0.0.0.0/0)

📁 Project Structure
ShoppyGlobe-Backend/
├── server.js
├── models/
│   ├── user.model.js
│   ├── product.model.js
│   └── cart.model.js
├── routes/
│   ├── user.routes.js
│   ├── product.routes.js
│   └── cart.routes.js
├── controllers/
│   ├── auth.controller.js
│   ├── product.controller.js
│   └── cart.controller.js
└── middleware/
    ├── auth.middleware.js
    └── errorHandler.js

🧠 How to Run the Project
📌 Step 1: Clone Repository
git clone https://github.com/di23-coder/ShoppyGlobe-Backend.git

📌 Step 2: Go to Project Folder
cd ShoppyGlobe-Backend

📌 Step 3: Install Dependencies
npm install

📌 Step 4: Start Server
node server.js


🟢 Server will run on:

http://localhost:3000


Note: Port 3000 is hardcoded in server.js.

🧪 API Testing Guide (ThunderClient / Postman)
🔐 1) User Authentication
📍 Register User – POST /api/register
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}

📍 Login User – POST /api/login
{
  "email": "john@example.com",
  "password": "123456"
}


➡ Copy JWT token from login response.

🛍️ 2) Product APIs

GET /api/products – Fetch all products

GET /api/product/:id – Fetch product by ID

⚠️ Product data is inserted directly into MongoDB Atlas.

🛒 3) Cart APIs (JWT Required)
📌 Add Header:
Authorization: Bearer YOUR_TOKEN

➕ Add to Cart – POST /api/cart
{
  "productId": "<MongoDB_Product_ID>",
  "quantity": 2
}

🔄 Update Quantity – PUT /api/cart
{
  "productId": "<MongoDB_Product_ID>",
  "quantity": 5
}

❌ Remove Item – DELETE /api/cart
{
  "productId": "<MongoDB_Product_ID>"
}

🛒 Get User Cart – GET /api/cart
🛑 Error Handling

✔ Route not found handler
✔ Global error handler
✔ Proper HTTP status codes:

400 – Bad Request

401 – Unauthorized

404 – Not Found

500 – Server Error

🌱 Future Improvements

Admin panel for product management

Product search and filtering

Order and checkout system

Image upload using Cloudinary

Refresh tokens and logout feature

🤝 Contributions

Suggestions and improvements are welcome.
Feel free to fork this repository and raise a pull request.
