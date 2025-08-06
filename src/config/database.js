import mongoose from "mongoose";
import "dotenv/config";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      family: 4,
    });

    console.log("✅ MongoDB conectado com sucesso!");
  } catch (error) {
    console.error(error);
  }
}
export async function disconnectDB() {
  await mongoose.disconnect();
}
