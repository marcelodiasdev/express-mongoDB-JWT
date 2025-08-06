import "dotenv/config";

import express from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDB } from "./config/database.js";
import transactionRouter from "./routes/transactionRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use(authRouter);
app.use(transactionRouter);

app.listen(PORT, () => {
  console.log("🟢 Servidor rodando na porta " + PORT);
});
