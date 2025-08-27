// Configuración sin dotenv para Railway
export const PORT = process.env.PORT || 3000;
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "root";
export const DB_DATABASE = process.env.DB_DATABASE || "railway";

// Debug: mostrar las variables (quitar después del debug)
console.log("=== DEBUG VARIABLES ===");
console.log("DB_HOST:", DB_HOST);
console.log("DB_PORT:", DB_PORT);
console.log("DB_USER:", DB_USER);
console.log("DB_DATABASE:", DB_DATABASE);
console.log("=======================");
