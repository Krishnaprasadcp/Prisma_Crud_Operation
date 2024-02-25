import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUserData = async (req: Request, res: Response) => {
  const userData = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });

  res.status(200).json({ message: userData });
};

export const postUserData = async (req: Request, res: Response) => {
  const { data } = req.body;
  console.log(data);

  const createdUser = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
      address: data.address,
      age: Number(data.age),
    },
  });
  res.status(200).json({ status: "success", message: createdUser });
};
