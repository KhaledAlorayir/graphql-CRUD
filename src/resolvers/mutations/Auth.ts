import { authInput } from "../../shared/Interfaces";
import prisma from "../../shared/PrismaClient";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserInputError } from "apollo-server";

export default {
  signup: async (_: any, args: authInput) => {
    const exist = await prisma.user.findUnique({
      where: {
        email: args.input.email,
      },
    });

    if (exist) throw new UserInputError("email exists");

    const hashed = await bcrypt.hash(args.input.password, 12);
    return await prisma.user.create({
      data: {
        email: args.input.email,
        password: hashed,
      },
    });
  },
  signin: async (_: any, args: authInput) => {
    const user = await prisma.user.findUnique({
      where: {
        email: args.input.email,
      },
    });

    if (!user) throw new UserInputError("no email");

    const correctPassword = await bcrypt.compare(
      args.input.password,
      user.password
    );

    if (!correctPassword) throw new UserInputError("wrong pass");

    return { token: jwt.sign({ uid: user.id }, "SECRET") };
  },
};
