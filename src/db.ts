import pg, { Pool, PoolConfig } from "pg";

let chachedDB: Pool = null;
let connectionParams: PoolConfig = {
  host: "localhost",
  user: "postgres",
  database: "games_note",
  password: "root",
  port: 5433,
};

export default async function connectDB() {
  if (chachedDB != null) {
    return chachedDB;
  }

  const { Pool } = pg;
  const db = new Pool(connectionParams);

  await db.connect();

  chachedDB = db;

  return db;
}
