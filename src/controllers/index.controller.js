import { pool } from "../connection.js";

export const ping = async (req, res) => {
  const [result] = await pool.query(`SELECT "Hello Worl" as RESULT`);
  res.json(result[0]);
};
