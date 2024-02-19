import { createPool } from "mysql2";

export const pool = createPool({
	host: "localhost",
	port: 5432,
	database: "imdb",
	user: "postgres",
	password: 1234,
});
