import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import userRouter from "./routes/userRoutes";
const app = express();

app.use(express.json());

app.use("/api/userinfo", userRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
