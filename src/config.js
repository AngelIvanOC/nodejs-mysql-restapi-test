// Usar las variables nativas de Railway que SÍ funcionan
export const PORT = process.env.PORT || 3000;
export const DB_PORT = process.env.MYSQLPORT || 3306;
export const DB_HOST = process.env.MYSQLHOST || "localhost";
export const DB_USER = process.env.MYSQLUSER || "root";
export const DB_PASSWORD = process.env.MYSQLPASSWORD || "root";
export const DB_DATABASE = process.env.MYSQLDATABASE || "railway";

// Debug: mostrar las variables
console.log("=== DEBUG VARIABLES ===");
console.log("DB_HOST:", DB_HOST);
console.log("DB_PORT:", DB_PORT);
console.log("DB_USER:", DB_USER);
console.log("DB_DATABASE:", DB_DATABASE);
console.log("=======================");
