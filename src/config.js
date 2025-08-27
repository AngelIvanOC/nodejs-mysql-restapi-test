import mysql from "mysql2/promise";

console.log("=== DEBUG VARIABLES ===");
console.log("MYSQL_URL:", process.env.MYSQL_URL);
console.log("=====================");

// Función para parsear MYSQL_URL si existe
function parseMysqlUrl(url) {
  if (!url) return null;

  try {
    const urlObj = new URL(url);
    return {
      host: urlObj.hostname,
      port: parseInt(urlObj.port) || 3306,
      user: urlObj.username,
      password: urlObj.password,
      database: urlObj.pathname.slice(1), // quitar el '/'
    };
  } catch (error) {
    console.error("Error parsing MYSQL_URL:", error);
    return null;
  }
}

// Configuración de conexión
const mysqlConfig = parseMysqlUrl(process.env.MYSQL_URL) || {
  host: process.env.MYSQLHOST || "localhost",
  user: process.env.MYSQLUSER || "root",
  password: process.env.MYSQLPASSWORD || "root",
  port: parseInt(process.env.MYSQLPORT) || 3306,
  database: process.env.MYSQLDATABASE || "railway",
};

export const PORT = process.env.PORT || 3000;
export const DB_CONFIG = mysqlConfig;

console.log("=== CONFIGURACIÓN FINAL ===");
console.log("Host:", DB_CONFIG.host);
console.log("Port:", DB_CONFIG.port);
console.log("User:", DB_CONFIG.user);
console.log("Database:", DB_CONFIG.database);
console.log("Password:", DB_CONFIG.password ? "[OCULTA]" : "NO DEFINIDA");
console.log("============================");
