// ========================================
// config.js - VERSIÓN CORREGIDA
// ========================================
import mysql from "mysql2/promise";

console.log("=== TODAS LAS VARIABLES DE ENTORNO ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);
console.log("RAILWAY_ENVIRONMENT_ID:", process.env.RAILWAY_ENVIRONMENT_ID);
console.log("RAILWAY_PROJECT_ID:", process.env.RAILWAY_PROJECT_ID);

// Variables personalizadas
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_DATABASE:", process.env.DB_DATABASE);

// Variables nativas de Railway MySQL
console.log("MYSQLHOST:", process.env.MYSQLHOST);
console.log("MYSQLPASSWORD:", process.env.MYSQLPASSWORD);
console.log("MYSQLPORT:", process.env.MYSQLPORT);
console.log("MYSQLUSER:", process.env.MYSQLUSER);
console.log("MYSQLDATABASE:", process.env.MYSQLDATABASE);
console.log("MYSQL_URL:", process.env.MYSQL_URL);
console.log("=====================================");

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
  host: process.env.MYSQLHOST || process.env.DB_HOST || "localhost",
  user: process.env.MYSQLUSER || process.env.DB_USER || "root",
  password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || "root",
  port: parseInt(process.env.MYSQLPORT || process.env.DB_PORT) || 3306,
  database: process.env.MYSQLDATABASE || process.env.DB_DATABASE || "railway",
};

// Exportar tanto la configuración como las variables individuales para compatibilidad
export const PORT = process.env.PORT || 3000;
export const DB_CONFIG = mysqlConfig;

// Exportar variables individuales para compatibilidad con el código existente
export const DB_HOST = mysqlConfig.host;
export const DB_USER = mysqlConfig.user;
export const DB_PASSWORD = mysqlConfig.password;
export const DB_PORT = mysqlConfig.port;
export const DB_DATABASE = mysqlConfig.database;

console.log("=== CONFIGURACIÓN FINAL ===");
console.log("Host:", DB_CONFIG.host);
console.log("Port:", DB_CONFIG.port);
console.log("User:", DB_CONFIG.user);
console.log("Database:", DB_CONFIG.database);
console.log("Password:", DB_CONFIG.password ? "[OCULTA]" : "NO DEFINIDA");
console.log("============================");

// ========================================
// connection.js - VERSIÓN CORREGIDA
// ========================================
import { createPool } from "mysql2/promise";
import { DB_CONFIG } from "./config.js";

// Usar la configuración completa en lugar de variables individuales
export const pool = createPool(DB_CONFIG);
