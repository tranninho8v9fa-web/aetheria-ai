// Prisma 7 config — Aetheria AI
// Loads DATABASE_URL from .env via dotenv; Prisma client uses the Neon adapter.
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
