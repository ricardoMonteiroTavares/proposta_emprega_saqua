import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __db__: PrismaClient | undefined;
}

// Isso é necessário porque, no desenvolvimento, 
// não queremos reiniciar o servidor a cada alteração, 
// mas também queremos garantir que não criamos uma nova 
// conexão com o banco de dados a cada alteração. 
// Em produção, teremos uma única conexão com o banco de dados.
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new PrismaClient();
  }
  db = global.__db__;
  db.$connect();
}

export { db };
