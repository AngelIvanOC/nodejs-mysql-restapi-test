import { createPool } from "mysql2/promise";
import { DB_CONFIG } from "./config.js";

import {
  DB_PORT,
  DB_HOST,
  DB_DATABASE,
  DB_PASSWORD,
  DB_USER,
} from "./config.js";

export const pool = createPool({
  DB_CONFIG,
});
