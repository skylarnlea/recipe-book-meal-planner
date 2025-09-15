// this file safely intializes a Prisma Client using TS
// and a singleton pattern to avoid multiple instances 
// during hot reloading in development
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma =
  globalForPrisma.prisma ?? //reuse existing client if available
  new PrismaClient({ //or create a new one
    log: ['query'], // Optional: shows SQL in console during dev
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
