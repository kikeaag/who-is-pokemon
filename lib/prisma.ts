// import "dotenv/config";
// import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
// import { PrismaClient } from "../generated/prisma/client";

// const connectionString = `${process.env.DATABASE_URL}`;

// const adapter = new PrismaBetterSqlite3({ url: connectionString });
// const prisma = new PrismaClient({ adapter });

// export { prisma };

import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma