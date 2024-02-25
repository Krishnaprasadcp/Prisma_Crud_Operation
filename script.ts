import express from "express";
import userRouter from "./routes/userRoutes";
import { expenseRouter } from "./routes/expenseRoute";

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/expense", expenseRouter);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
