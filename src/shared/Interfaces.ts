import { PrismaClient } from "@prisma/client";

export interface newPostInput {
  input: {
    content: string;
  };
}

export interface updatePostInput {
  input: {
    content: string;
  };
  id: String;
}

export interface authInput {
  input: {
    email: string;
    password: string;
  };
}

export interface Context {
  prisma: PrismaClient;
  auth: number | null;
}
