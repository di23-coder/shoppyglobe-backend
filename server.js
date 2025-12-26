import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import { routeNotFound, errorHandler } from "./middleware/error.middleware.js";

const app = express();

// =================================================
// DATABASE CONNECTION
// =================================================
// NOTE: Replace username, password & db name
// before running the project
// =================================================
mongoose
  .connect("mongodb+srv://db_user:db_password@cluster0.mongodb.net/shopcartDB")
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((error) => {
    console.log("Database connection failed");
    console.error(error);
  });

// =================================================
// APPLICATION MIDDLEWARE
// =================================================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// =================================================
// API ROUTES
// Base path: /api
// =================================================
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

// =================================================
// ERROR HANDLING
// =================================================
app.use(routeNotFound);   // 404 handler
app.use(errorHandler);    // global error handler

// =================================================
// SERVER START
// =================================================
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
