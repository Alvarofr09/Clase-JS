import { createPool } from "mysql2/promise";
import Pool from "pg-pool";

export const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "imdb",
	password: "1234",
	port: 5432,
});
