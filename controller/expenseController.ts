import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUserExpense = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userExpense = await prisma.userExpense.findMany({
    where: {
      userExpenseId: userId,
    },
  });
  res.status(200).json({ status: "message", expenseData: userExpense });
};

export const postUserExpense = async (req: Request, res: Response) => {
  const { data } = req.body;
  console.log(data);
  const userId = req.params.id;

  const userExpense = await prisma.userExpense.create({
    data: {
      expenseName: data.expenseName,
      category: data.category,
      price: data.price,
      userExpenseId: userId,
    },
  });
  res.status(200).json({ status: "expense added", message: userExpense });
};

export const deleteUserExpense = async (req: Request, res: Response) => {
  const expenseId = req.params.id;
  console.log(expenseId);

  const deletedExpense = await prisma.userExpense.delete({
    where: {
      id: expenseId,
    },
  });
  res.status(200).json({ status: "expense deleted", message: deletedExpense });
};

export const updateExpense = async (req: Request, res: Response) => {
  const { data } = req.body;
  const expenseId = req.params.id;
  const updatedExpense = await prisma.userExpense.update({
    where: {
      id: expenseId,
    },
    data: {
      expenseName: data.expenseName,
    },
  });
  res.status(200).json({ status: "expense updated", message: updatedExpense });
};

export const getMonthlyExpense = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const getMonthlyExpense = await prisma.monthlyExpense.findMany({
    where: {
      userId: userId,
    },
  });
  res
    .status(200)
    .json({ status: "monthly expense ", message: getMonthlyExpense });
};

export const postMonthlyExpense = async (req: Request, res: Response) => {
  const { data } = req.body;
  const userId = req.params.id;
  const createdMonthlyExpense = await prisma.monthlyExpense.create({
    data: {
      expenseName: data.expenseName,
      category: data.category,
      price: data.price,
      monthlyPaymentDate: data.monthlyPaymentDate,
      userId: userId,
    },
  });
  res.status(200).json({
    status: "monthly expense crated ",
    message: createdMonthlyExpense,
  });
};

export const updateMonthlyExpense = async (req: Request, res: Response) => {
  const { data } = req.body;
  const expenseId = req.params.id;
  const updatedMonthlyExpense = await prisma.monthlyExpense.update({
    where: {
      id: expenseId,
    },
    data: {
      expenseName: data.expenseName,
    },
  });
  res.status(200).json({
    status: "monthly expense updated ",
    message: updatedMonthlyExpense,
  });
};

export const deleteMonthlyExpense = async (req: Request, res: Response) => {
  const expenseId = req.params.id;
  const deletedMonthlyExpense = await prisma.monthlyExpense.delete({
    where: {
      id: expenseId,
    },
  });
  res.status(200).json({
    status: "monthly expense deleted",
    message: deletedMonthlyExpense,
  });
};
