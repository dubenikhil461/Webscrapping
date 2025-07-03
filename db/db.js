import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function db() {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error("MONGO_URL is not defined in .env file");
    }
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default db;
