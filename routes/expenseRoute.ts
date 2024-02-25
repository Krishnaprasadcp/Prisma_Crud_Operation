import express from "express";
import {
  deleteMonthlyExpense,
  deleteUserExpense,
  getMonthlyExpense,
  getUserExpense,
  postMonthlyExpense,
  postUserExpense,
  updateExpense,
  updateMonthlyExpense,
} from "../controller/expenseController";

export const expenseRouter = express.Router();
expenseRouter
  .route("/:id")
  .get(getUserExpense)
  .post(postUserExpense)
  .delete(deleteUserExpense)
  .patch(updateExpense);

expenseRouter
  .route("/monthlyexpense/:id")
  .get(getMonthlyExpense)
  .post(postMonthlyExpense)
  .delete(deleteMonthlyExpense)
  .patch(updateMonthlyExpense);
