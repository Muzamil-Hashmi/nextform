const { PrismaClient } = require("@prisma/client");

const globalForPrisma = global;

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
