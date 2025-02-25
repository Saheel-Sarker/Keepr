import mongoose from "mongoose";
export default async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // process code 1 means exit with failure, 0 means success.
    }
};