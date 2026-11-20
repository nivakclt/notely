
import mongoose from "mongoose";

const connectionString = process.env.CONNECTION_STRING;

export const connectDB = async () => {
    if (!connectionString) {
        throw new Error("CONNECTION_STRING environment variable is missing");
    }

    try {
        await mongoose.connect(connectionString);
        console.log("DB connected successfully");
    } catch (err) {
        console.error("DB connection failed:", err);
        throw err;
    }
};
