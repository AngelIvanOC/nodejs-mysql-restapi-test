import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_PORT = process.env.MYSQL_PORT || 3306;
export const DB_HOST = process.env.MYSQL_HOST || "mysql.railway.internal";
export const DB_USER = process.env.MYSQL_USER || "root";
export const DB_PASSWORD =
  process.env.MYSQL_PASSWORD || "ZlHdKQrsxTOCYaFdKKgWgVsydqeWxsIu";
export const DB_DATABASE = process.env.MYSQL_DATABASE || "railway";
