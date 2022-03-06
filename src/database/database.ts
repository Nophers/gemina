import dotenv from "dotenv";
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("Database not setup!");
}

if(!process.env.token) {
  throw new Error("Token is not defined in the enviroment")
}

// Write your queries into prisma/seed.ts